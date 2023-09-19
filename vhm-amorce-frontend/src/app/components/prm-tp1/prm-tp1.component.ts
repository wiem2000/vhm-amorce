import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrmTp } from 'src/app/models/PrmTp';
import { GlobalEventService } from 'src/app/services/global-event-service.service';
import { PrmSbClssService } from 'src/app/services/prm-sb-clss.service';
import { PrmTpService } from 'src/app/services/prm-tp.service';
import Swal from 'sweetalert2';
declare let $: any;

@Component({
  selector: 'app-prm-tp1',
  templateUrl: './prm-tp1.component.html',
  styleUrls: ['./prm-tp1.component.css']
})

// Angular component for managing parameter type (PrmTp) associated with a parameter subclass (PrmSbClss).
export class PrmTp1Component implements OnInit {

  public lstPrmTp!: any;    // A list of PrmTp objects.
  public prmSbClss!: any;    // Represents a PrmSbClss (parameter subclass) object.
  form!: FormGroup;     // Represents a FormGroup used for managing form controls in the component.
  public selectedObj: any | null = null;    // Represents the currently selected object for editing (if any).
  submitted = false;  // A flag to track whether a form has been submitted.

  
  constructor(
    private globalEventService: GlobalEventService,
    private route: ActivatedRoute,
    private prmSbClssService: PrmSbClssService,
    private prmTpService: PrmTpService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Subscribe to route parameters and load data.
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log('ID récupéré' + id);
      this.getPrmSbClssById(id)
      this.getLstPrmTpBySbClss()

    });

    // Initialize the form.
    this.initForm()

  }

  // Update the global event service to notify data changes.( to update the sidebar)

  updateDatabase() {

    this.globalEventService.emitDataUpdated();

  }

  // Fetch the parameter subclass (PrmSbClss) by ID.

  getPrmSbClssById(id: any) {
    this.prmSbClssService.findPrmSbClssById(id)
      .subscribe(data => {
        this.prmSbClss = data;

      }, err => {
        console.log(err)

      })
  }

  // Fetch a list of parameter types (PrmTp) associated with the subclass.
  getLstPrmTpBySbClss() {
    this.prmTpService.getAllPrmTp()
      .subscribe(data => {
        let lstPrmTp: any = data;
        this.lstPrmTp = this.prmTpService.getPrmTpByPrmSbClss(lstPrmTp, this.prmSbClss)
        console.log(this.lstPrmTp)
      }, err => {
        console.log(err)

      })

  }

  // Initialize the form with default values.
  initForm() {
    this.form = this.formBuilder.group(
      {
        prmTpName: ['', [Validators.required]],
        tpRef: ['', [Validators.required]],
        prmSbClss: [this.prmSbClss, [Validators.required]],

      }

    );

    this.selectedObj = null;
  }

  // Show the add/update form modal.
  onAddFormModal() {
    $("#addUpdateformModal").modal("show");
    this.initForm()
  }

  // Dismiss the modal by ID.
  onDismiss(idModal: any) {
    $("#" + idModal).modal("hide");
    this.initForm()

  }

  // Getter for form controls.
  get formModal() { return this.form.controls; }

  // Show the edit form modal and populate with selected object data.

  onEditFormModal(obj: any) {

    this.selectedObj = obj;
    this.form.controls["prmTpName"].setValue(obj.prmTpName);
    this.form.controls["tpRef"].setValue(obj.tpRef);
    $("#addUpdateformModal").modal("show");
    console.log(this.form)

  }

  // Show the delete confirmation modal.
  onDeleteFormModal(obj: any) {
    $("#deleteFormModal").modal("show");
    this.selectedObj = obj;
  }

  // Add or update a parameter type (PrmTp) to the database.
  addUpdateObj() {
    this.submitted = true;
    if (this.form.invalid) { return; }
    if (this.submitted) {

      if (this.selectedObj) {

        var obj = this.selectedObj;
        obj.prmTpName = this.form.value.prmTpName;
        obj.tpRef = this.form.value.tpRef;
        this.prmTpService.updatePrmTp(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmTpBySbClss()
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
        let obj = new PrmTp()
        obj.prmTpName = this.form.value.prmTpName;
        obj.tpRef = this.form.value.tpRef;
        obj.prmSbClss = this.form.value.prmSbClss;

        this.prmTpService.addPrmTp(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmTpBySbClss()
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

  // Delete a parameter type (PrmTp) from the database.
  deleteObj(id: number) {
    this.prmTpService.deletePrmTp(id).subscribe(
      response => {

        this.onDismiss("deleteFormModal")
        this.getLstPrmTpBySbClss()
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
