import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrmSbClss } from 'src/app/models/PrmSbClss';
import { GlobalEventService } from 'src/app/services/global-event-service.service';
import { PrmClssService } from 'src/app/services/prm-clss.service';
import { PrmSbClssService } from 'src/app/services/prm-sb-clss.service';
import Swal from 'sweetalert2';
declare let $: any;


@Component({
  selector: 'app-prm-sb-clss1',
  templateUrl: './prm-sb-clss1.component.html',
  styleUrls: ['./prm-sb-clss1.component.css']
})

// Angular component for managing parameter subclass (PrmSbClss) associated with a parameter class (PrmClss).

export class PrmSbClss1Component implements OnInit {


  public lstPrmSbClss!: any; // Variable to hold a list of parameter subclasses associated with a class.
  public prmClss!: any; // Variable to store information about the parameter class.
  form!: FormGroup; // Form group variable to manage form controls.
  public selectedObj: any | null = null;  // Variable to store the currently selected object (or null if none selected).
  submitted = false;  // Boolean flag to track whether the form has been submitted or not.


  constructor(
    private globalEventService: GlobalEventService,
    private route: ActivatedRoute,
    private prmClssService: PrmClssService,
    private prmSbClssService: PrmSbClssService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Subscribe to route parameters and load data.
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log('ID récupéré' + id);
      this.getPrmClssById(id)
      this.getLstPrmSbClssByClss()

    });

    // Initialize the form.
    this.initForm()
  }

  // Update the global event service to notify data changes (to apply the modification in the sidebar).
  updateDatabase() {
    this.globalEventService.emitDataUpdated();
  }

  // Fetch the parameter class (PrmClss) by ID.
  getPrmClssById(id: any) {
    this.prmClssService.findPrmClssById(id)
      .subscribe(data => {
        this.prmClss = data;

      }, err => {
        console.log(err)

      })
  }

  // Fetch a list of parameter subclasses (PrmSbClss) associated with the class.

  getLstPrmSbClssByClss() {
    this.prmSbClssService.getAllPrmSbClss()
      .subscribe(data => {
        let lstPrmSbClss: any = data;
        this.lstPrmSbClss = this.prmSbClssService.getPrmSbClssByPrmClss(lstPrmSbClss, this.prmClss)
        console.log(this.lstPrmSbClss)
      }, err => {
        console.log(err)

      })
  }

  // Initialize the form with default values.
  initForm() {
    this.form = this.formBuilder.group(
      {
        prmSbClss_Name: ['', [Validators.required]],
        prmSbClss_KY: ['', [Validators.required]],
        prmClss: [this.prmClss, [Validators.required]],

      }

    );

    this.selectedObj = null;
  }

  // Show the add/update form modal.
  onAddFormModal() {
    $("#addUpdateformModal").modal("show");
    this.initForm()
  }

  // Dismiss the modal 
  onDismiss(idModal: any) {
    $("#" + idModal).modal("hide");
    this.initForm()

  }

  // Getter for form controls.
  get formModal() { return this.form.controls; }

  // Show the edit form modal and populate with selected object data.
  onEditFormModal(obj: any) {

    this.selectedObj = obj;
    this.form.controls["prmSbClss_Name"].setValue(obj.prmSbClss_Name);
    this.form.controls["prmSbClss_KY"].setValue(obj.prmSbClss_KY);

    $("#addUpdateformModal").modal("show");
    console.log(this.form)

  }

  // Show the delete confirmation modal.
  onDeleteFormModal(obj: any) {
    $("#deleteFormModal").modal("show");
    this.selectedObj = obj;
  }

  // Add or update a parameter subclass (PrmSbClss) to the database.
  addUpdateObj() {
    this.submitted = true;
    if (this.form.invalid) { return; }
    if (this.submitted) {

      if (this.selectedObj) {

        var obj = this.selectedObj;
        obj.prmSbClss_Name = this.form.value.prmSbClss_Name;
        obj.prmSbClss_KY = this.form.value.prmSbClss_KY;

        this.prmSbClssService.updatePrmSbClss(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmSbClssByClss()
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
        let obj = new PrmSbClss()


        obj.prmSbClss_Name = this.form.value.prmSbClss_Name;
        obj.prmSbClss_KY = this.form.value.prmSbClss_KY;
        obj.prmClss = this.form.value.prmClss;

        this.prmSbClssService.addPrmSbClss(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmSbClssByClss()
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

  // Delete a parameter subclass (PrmSbClss) from the database by its ID.
  deleteObj(id: number) {
    this.prmSbClssService.deletePrmSbClss(id).subscribe(
      response => {

        this.onDismiss("deleteFormModal")
        this.getLstPrmSbClssByClss()
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
