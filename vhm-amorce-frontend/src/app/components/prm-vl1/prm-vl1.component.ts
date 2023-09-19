import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrmSrvc } from 'src/app/models/PrmSrvc';
import { PrmVl } from 'src/app/models/PrmVl';
import { GlobalEventService } from 'src/app/services/global-event-service.service';
import { PrmSrvcService } from 'src/app/services/prm-srvc.service';
import { PrmTgService } from 'src/app/services/prm-tg.service';
import { PrmUsrService } from 'src/app/services/prm-usr.service';
import { PrmVlService } from 'src/app/services/prm-vl.service';
import Swal from 'sweetalert2';
declare let $: any;



@Component({
  selector: 'app-prm-vl1',
  templateUrl: './prm-vl1.component.html',
  styleUrls: ['./prm-vl1.component.css']
})

// Angular component for managing Parameter Values (PrmVl) associated with a parameter target (PrmTg)
export class PrmVl1Component implements OnInit {

  public lstPrmVl!: any;  // Parameter Values
  public lstPrmSrvc!: any;   // Parameter Services
  public lstPrmUsr!: any;    // Parameter Users
  public lstPrmUsrSrvc!: any;   // Parameter Users filtered by Service selection
  public lstPrmSrvcSelected!: any  // Selected Parameter Service
  public prmTg!: any;     // Parameter Target
  form!: FormGroup;  //FormGroup used for managing form controls in the component.
  public selectedObj: any | null = null;   // Represents the currently selected object for editing (if any).
  submitted = false;   // A flag to track whether a form has been submitted.




  constructor(
    private globalEventService: GlobalEventService,
    private route: ActivatedRoute,
    private prmTgService: PrmTgService,
    private prmVlService: PrmVlService,
    private prmUsrService: PrmUsrService,
    private prmSrvcService: PrmSrvcService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log('ID récupéré' + id);
      this.getPrmTgById(id)
      this.getLstPrmVlByTg()

    });

    this.initForm()
    this.getLstPrmUsr()
    this.getLstPrmSrvc()

  }


  // change the list of users acoording to the selected Parameter Service.

  onChangePrmSrvc(lstPrmSrvc: any) {

    if (lstPrmSrvc) {
      this.lstPrmSrvcSelected = lstPrmSrvc;
      this.lstPrmUsrSrvc = this.prmUsrService.getPrmUsrByLstPrmSrvc(lstPrmSrvc, this.lstPrmUsr)
      console.log("ok")
    }
    console.log(lstPrmSrvc)

  }


  // Handle the change of the "Select All Services" checkbox.
  onChangeAllPrmSrvc(lst: any) {

    if (this.form.value.prmAllSrvc == true) {
      this.getLstPrmSrvc()
      this.getLstPrmUsr()
    }

  }

  // Handle the change of the "Select All Users" checkbox.
  onChangeAllPrmUsr(lst: any) {

    if (this.form.value.prmAllUsr == true) {

      if (this.form.value.prmAllSrvc == false) {
        this.onChangePrmSrvc(this.lstPrmSrvcSelected);
      }
      else {
        this.getLstPrmUsr()
      }

    }
  }

  // Update the global database after an operation.
  updateDatabase() {

    this.globalEventService.emitDataUpdated();


  }

  // Fetch Parameter Target (PrmTg) by its ID.
  getPrmTgById(id: any) {
    this.prmTgService.findPrmTgById(id)
      .subscribe(data => {
        this.prmTg = data;

      }, err => {
        console.log(err)

      })
  }

  // Fetch a list of Parameter Values (PrmVl) by Parameter Target (PrmTg).

  getLstPrmVlByTg() {
    this.prmVlService.getAllPrmVl()
      .subscribe(data => {
        let lstPrmVl: any = data;
        this.lstPrmVl = this.prmVlService.getPrmVlByPrmTg(lstPrmVl, this.prmTg)

      }, err => {
        console.log(err)

      })

  }

  // Fetch a list of Parameter Services (PrmSrvc).
  getLstPrmSrvc() {
    this.prmSrvcService.getAllPrmSrvc()
      .subscribe(data => {
        this.lstPrmSrvc = data

      }, err => {
        console.log(err)

      })

  }

  // Fetch a list of Parameter Users (PrmUsr).
  getLstPrmUsr() {
    this.prmUsrService.getAllPrmUsr()
      .subscribe(data => {
        this.lstPrmUsr = data
        this.lstPrmUsrSrvc = this.lstPrmUsr

      }, err => {
        console.log(err)

      })

  }


  // Initialize the form with default values.
  initForm() {
    this.form = this.formBuilder.group(
      {
        prmVl_Dta: ['', [Validators.required]],
        prmTg: [this.prmTg, [Validators.required]],
        prmUsr: [],
        prmSrvc: [],
        prmAllSrvc: [true,],
        prmAllUsr: [true,]

      }

    );

    this.selectedObj = null;
    this.getLstPrmSrvc();
    this.getLstPrmUsr();


  }
  // Show the add/update form modal.
  onAddFormModal() {
    $("#addUpdateformModal").modal("show");

    this.initForm()
    console.log(this.form.value)
  }

  // Dismiss a modal
  onDismiss(idModal: any) {
    $("#" + idModal).modal("hide");
    this.initForm()

  }

  // Get the form controls.
  get formModal() { return this.form.controls; }

  // Show the edit form modal.
  onEditFormModal(obj: any) {

    this.selectedObj = obj;
    this.form.controls["prmVl_Dta"].setValue(obj.prmVl_Dta);
    this.form.controls["prmUsr"].setValue(this.selectedObj.lstPrmUsr)

    $("#addUpdateformModal").modal("show");

    console.log(this.selectedObj.lstPrmUsr)
    console.log(this.form.value)

  }

  // Check if a Parameter User is selected.
  isSelected(prmUsr: any): boolean {
    if (this.selectedObj != null)
      return this.selectedObj.lstPrmUsr.some((value: any) => value.id === prmUsr.id);
    else return false

  }

  // Check if a Parameter Service is selected.
  isSelectedPrmSrvc(prmSrvc: any): boolean {
    if (this.selectedObj != null)
      return this.prmSrvcService.getPrmSrvcByLstPrmUsr(this.selectedObj.lstPrmUsr).some((value: any) => value.id === prmSrvc.id);
    else return false

  }

  // Show the delete form modal.
  onDeleteFormModal(obj: any) {
    $("#deleteFormModal").modal("show");
    this.selectedObj = obj;

  }


  //  add/update operation for Parameter Value.
  addUpdateObj() {
    this.submitted = true;
    if (this.form.invalid) { return; }
    if (this.submitted) {

      if (this.selectedObj) {

        // Update the Parameter Value.

        var obj = this.selectedObj;
        obj.prmVl_Dta = this.form.value.prmVl_Dta;

        // Handle Parameter User selection based on checkboxes.
        if (this.form.value.prmAllUsr == false) { obj.lstPrmUsr = this.form.value.prmUsr; }
        else if (this.form.value.prmAllSrvc == false && this.form.value.prmAllUsr == true) {
          obj.lstPrmUsr = this.lstPrmUsrSrvc

        }
        else if (this.form.value.prmAllSrvc == true && this.form.value.prmAllUsr == true) {
          obj.lstPrmUsr = this.lstPrmUsr;
        }


        this.prmVlService.updatePrmVl(obj).subscribe(
          response => {
            console.log(obj)

            this.onDismiss("addUpdateformModal")
            this.getLstPrmVlByTg()
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

        // Adda Parameter Value. 
        let obj = new PrmVl()
        obj.prmVl_Dta = this.form.value.prmVl_Dta;
        obj.prmTg = this.form.value.prmTg;

        // Handle Parameter User selection based on checkboxes.
        if (this.form.value.prmAllUsr == false) { obj.lstPrmUsr = this.form.value.prmUsr; }
        else if (this.form.value.prmAllSrvc == false && this.form.value.prmAllUsr == true) {
          obj.lstPrmUsr = this.lstPrmUsrSrvc

        }
        else if (this.form.value.prmAllSrvc == true && this.form.value.prmAllUsr == true) {
          obj.lstPrmUsr = this.lstPrmUsr;
        }

        this.prmVlService.addPrmVl(obj).subscribe(
          response => {

            console.log(obj)

            this.onDismiss("addUpdateformModal")
            this.getLstPrmVlByTg()
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

  // Delete a Parameter Value by its ID.
  deleteObj(id: number) {
    this.prmVlService.deletePrmVl(id).subscribe(
      response => {

        this.onDismiss("deleteFormModal")
        this.getLstPrmVlByTg()
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
