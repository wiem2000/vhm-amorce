import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrmClss } from 'src/app/models/PrmClss';
import { GlobalEventService } from 'src/app/services/global-event-service.service';
import { PrmClssService } from 'src/app/services/prm-clss.service';
import { PrmFmlyService } from 'src/app/services/prm-fmly.service';

import Swal from 'sweetalert2';
declare let $: any;

@Component({
  selector: 'app-prm-clss1',
  templateUrl: './prm-clss1.component.html',
  styleUrls: ['./prm-clss1.component.css']
})


// Angular component for managing parameter classes (PrmClss) .
export class PrmClss1Component implements OnInit {

  
  public lstPrmClss!: any;// Variable to hold a list of parameter classes associated with a family.
  public prmFmly!: any; // Variable to store information about the parameter family.
  form!: FormGroup;// Form group variable to manage form controls.
  public selectedObj: any | null = null;// Variable to store the currently selected object (or null if none selected).
  submitted = false;// Boolean flag to track whether the form has been submitted or not.

  constructor(
    private globalEventService: GlobalEventService,
    private route: ActivatedRoute,
    private prmFmlyService: PrmFmlyService,
    private prmClssService: PrmClssService,
    private formBuilder: FormBuilder) { }

  // Subscribe to route parameters and load data.

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log('ID récupéré' + id);
      this.getPrmFmlyById(id)
      this.getLstPrmClssByFmly()

    });

    // Initialize the form.
    this.initForm()

  }

  // Update the global event service to notify data changes.(to apply the modification in the sidebar)
  updateDatabase() {

    this.globalEventService.emitDataUpdated();


  }


  // Fetch the parameter family (PrmFmly) by ID.
  getPrmFmlyById(id: any) {
    this.prmFmlyService.findPrmFmlyById(id)
      .subscribe(data => {
        this.prmFmly = data;

      }, err => {
        console.log(err)

      })
  }


  // Fetch a list of parameter classes (PrmClss) associated with the family.
  getLstPrmClssByFmly() {
    this.prmClssService.getAllPrmClss()
      .subscribe(data => {
        let lstPrmClss: any = data;
        this.lstPrmClss = this.prmClssService.getPrmClssByPrmFmly(lstPrmClss, this.prmFmly)
        console.log(this.lstPrmClss)
      }, err => {
        console.log(err)

      })

  }



  // Initialize the form with default values.
  initForm() {
    this.form = this.formBuilder.group(
      {
        prmClssName: ['', [Validators.required]],
        clssRef: ['', [Validators.required]],
        prmFmly: [this.prmFmly, [Validators.required]],

      }

    );

    this.selectedObj = null;


  }

  // Show the add/update form modal.
  onAddFormModal() {
    $("#addUpdateformModal").modal("show");
    this.initForm()
  }

  // Dismiss the modal .
  onDismiss(idModal: any) {
    $("#" + idModal).modal("hide");
    this.initForm()

  }

  // Getter for form controls.
  get formModal() { return this.form.controls; }


  // Show the edit form modal and populate with selected object data.
  onEditFormModal(obj: PrmClss) {

    this.selectedObj = obj;
    this.form.controls["prmClssName"].setValue(obj.prmClssName);
    this.form.controls["clssRef"].setValue(obj.clssRef);


    $("#addUpdateformModal").modal("show");

    console.log(this.form)

  }

  // Show the delete confirmation modal.
  onDeleteFormModal(obj: PrmClss) {
    $("#deleteFormModal").modal("show");
    this.selectedObj = obj;
  }

  // Add or update a parameter class (PrmClss) to the database.
  addUpdateObj() {
    this.submitted = true;
    if (this.form.invalid) { return; }
    if (this.submitted) {

      if (this.selectedObj) {

        var obj = this.selectedObj;
        obj.prmClssName = this.form.value.prmClssName;
        obj.clssRef = this.form.value.clssRef;
        obj.prmFmly = this.form.value.prmFmly;


        this.prmClssService.updatePrmClss(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmClssByFmly()

            this.updateDatabase()

            Swal.fire({
              title: 'Succés!!',
              text: " enregistré avec succés",
              icon: 'success'
            });

         },
          (error: HttpErrorResponse) => { alert(error.message); }
        );
      }
      else {
        let obj = new PrmClss()
        obj.prmClssName = this.form.value.prmClssName;
        obj.clssRef = this.form.value.clssRef;

        obj.prmFmly = this.form.value.prmFmly;

        this.prmClssService.addPrmClss(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmClssByFmly()
            this.updateDatabase()

            Swal.fire({
              title: 'Succés!!',
              text: " enregistré avec succés",
              icon: 'success'
            });
          },
          (error: HttpErrorResponse) => { alert(error.message); }
        );
      }

    }
  }

  // Delete a parameter class (PrmClss) from the database.
  deleteObj(id: number) {
    this.prmClssService.deletePrmClss(id).subscribe(
      response => {

        this.onDismiss("deleteFormModal")
        this.getLstPrmClssByFmly()
        this.updateDatabase()




        Swal.fire({
          title: 'Succés!!',
          text: " enregistré avec succés",
          icon: 'success'
        });



      },
      (error: HttpErrorResponse) => { alert(error.message); }
    );

  }

}
