import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrmTg } from 'src/app/models/PrmTg';
import { GlobalEventService } from 'src/app/services/global-event-service.service';
import { PrmTgService } from 'src/app/services/prm-tg.service';
import { PrmTpService } from 'src/app/services/prm-tp.service';
import Swal from 'sweetalert2';
declare let $: any;

@Component({
  selector: 'app-prm-tg1',
  templateUrl: './prm-tg1.component.html',
  styleUrls: ['./prm-tg1.component.css']
})

// Angular component for managing parameter target (PrmTg) associated with a parameter type (PrmTp).

export class PrmTg1Component implements OnInit {


  public lstPrmTg!: any; // A list of PrmTg objects.
  public prmTp!: any; // Represents a PrmTp (parameter type) object.
  form!: FormGroup; // Represents a FormGroup used for managing form controls in the component.
  public selectedObj: any | null = null; // Represents the currently selected object for editing (if any).
  submitted = false;  // A flag to track whether a form has been submitted.



  // Constructor for initializing the component with necessary services and dependencies.
  constructor(
    private globalEventService: GlobalEventService,
    private route: ActivatedRoute,
    private prmTpService: PrmTpService,
    private prmTgService: PrmTgService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Subscribe to route parameters and load data
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log('ID récupéré' + id);
      this.getPrmTpById(id)
      this.getLstPrmTgByTp()

    });

    // Initialize the form.

    this.initForm()

  }

  // Helper method to trigger a database update event.(to update the sidebar)
  updateDatabase() {

    this.globalEventService.emitDataUpdated();


  }

  // Fetch the parameter type (PrmTp) by ID.
  getPrmTpById(id: any) {
    this.prmTpService.findPrmTpById(id)
      .subscribe(data => {
        this.prmTp = data;

      }, err => {
        console.log(err)

      })
  }

  // Fetch a list of parameter targets (PrmTg) associated with the parameter type.

  getLstPrmTgByTp() {
    this.prmTgService.getAllPrmTg()
      .subscribe(data => {
        let lstPrmTg: any = data;
        this.lstPrmTg = this.prmTgService.getPrmTgByPrmTp(lstPrmTg, this.prmTp)
        console.log(this.lstPrmTg)
      }, err => {
        console.log(err)

      })

  }

  // Initialize the form with default values.

  initForm() {
    this.form = this.formBuilder.group(
      {
        prmTg: ['', [Validators.required]],
        tgRef: ['', [Validators.required]],
        prmTp: [this.prmTp, [Validators.required]],

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

    this.form.controls["prmTg"].setValue(obj.prmTg);
    this.form.controls["tgRef"].setValue(obj.tgRef);


    $("#addUpdateformModal").modal("show");

    console.log(this.form)

  }

  // Show the delete confirmation modal.
  onDeleteFormModal(obj: any) {
    $("#deleteFormModal").modal("show");
    this.selectedObj = obj;
  }

  // Add or update a parameter target (PrmTg) to the database.
  addUpdateObj() {
    this.submitted = true;
    if (this.form.invalid) { return; }
    if (this.submitted) {

      if (this.selectedObj) {

        var obj = this.selectedObj;
        obj.prmTg = this.form.value.prmTg;
        obj.tgRef = this.form.value.tgRef;


        this.prmTgService.updatePrmTg(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmTgByTp()
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
        let obj = new PrmTg()
        obj.prmTg = this.form.value.prmTg;
        obj.tgRef = this.form.value.tgRef;

        obj.prmTp = this.form.value.prmTp;

        this.prmTgService.addPrmTg(obj).subscribe(
          response => {

            this.onDismiss("addUpdateformModal")
            this.getLstPrmTgByTp()
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

  // Delete a parameter target (PrmTg) from the database.
  deleteObj(id: number) {
    this.prmTgService.deletePrmTg(id).subscribe(
      response => {

        this.onDismiss("deleteFormModal")
        this.getLstPrmTgByTp()
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
