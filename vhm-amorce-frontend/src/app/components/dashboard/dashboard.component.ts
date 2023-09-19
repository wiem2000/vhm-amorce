import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrmClssService } from 'src/app/services/prm-clss.service';
import { PrmFmlyService } from 'src/app/services/prm-fmly.service';
import { PrmSbClssService } from 'src/app/services/prm-sb-clss.service';
import { PrmSrvcService } from 'src/app/services/prm-srvc.service';
import { PrmTgService } from 'src/app/services/prm-tg.service';
import { PrmTpService } from 'src/app/services/prm-tp.service';
import { PrmVlService } from 'src/app/services/prm-vl.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// Angular Component for displaying a dashboard (agenda) of medical services and their associated parameters. 
export class DashboardComponent implements OnInit {

  // Declare public variables to hold data fetched from services

  public lstPrmSrvc: any
  public lstPrmSrvcAll: any
  public lstPrmFmly: any; lstPrmFmlyAll: any
  public lstPrmClss: any; lstPrmClssAll: any
  public lstPrmSbClss: any; lstPrmSbClssAll: any
  public lstPrmTp: any; lstPrmTpAll: any
  public lstPrmTg: any; lstPrmTgAll: any
  public lstPrmVl: any; lstPrmVlAll: any
  form!: FormGroup;


  constructor(private prmSrvcService: PrmSrvcService,
    private prmVlService: PrmVlService,
    private formBuilder: FormBuilder,
    private prmFmlyService: PrmFmlyService,
    private prmClssService: PrmClssService,
    private prmSbClssService: PrmSbClssService,
    private prmTpService: PrmTpService,
    private prmTgService: PrmTgService,) { }


  ngOnInit(): void {
    // Fetch initial data from services
    this.getPrmSrvc()
    this.getPrmVl()
    this.getPrmFmly()
    this.getPrmClss()
    this.getPrmSbClss()
    this.getPrmTp()
    this.getPrmTg()
    this.initForm()

  }

  // Initialize the form
  initForm() {
    this.form = this.formBuilder.group(
      {
        prmFmly: [null,],
        prmClss: [null,],
        prmSbClss: [null,],
        prmTp: [null,],
        prmTg: [null,],
        prmVl: [null,],

      }
    );
  }

  // Fetch Parameter Families
  getPrmFmly() {

    this.prmFmlyService.getAllPrmFmly()
      .subscribe(data => {
        this.lstPrmFmlyAll = data;
        this.lstPrmFmly = data;
      }, err => {
        console.log(err)

      })
  }

  // Fetch Parameter Classes
  getPrmClss() {

    this.prmClssService.getAllPrmClss()
      .subscribe(data => {
        this.lstPrmClssAll = data;
        this.lstPrmClss = data;
      }, err => {
        console.log(err)

      })
  }

  // Fetch Parameter Subclasses

  getPrmSbClss() {

    this.prmSbClssService.getAllPrmSbClss()
      .subscribe(data => {
        this.lstPrmSbClssAll = data;
        this.lstPrmSbClss = data;
      }, err => {
        console.log(err)

      })
  }

  // Fetch Parameter Types
  getPrmTp() {

    this.prmTpService.getAllPrmTp()
      .subscribe(data => {
        this.lstPrmTpAll = data;
        this.lstPrmTp = data;
      }, err => {
        console.log(err)

      })
  }

  // Fetch Parameter Targets
  getPrmTg() {

    this.prmTgService.getAllPrmTg()
      .subscribe(data => {
        this.lstPrmTgAll = data;
        this.lstPrmTg = data;
      }, err => {
        console.log(err)

      })
  }

  // Fetch Parameter Services

  getPrmSrvc() {

    this.prmSrvcService.getAllPrmSrvc()
      .subscribe(data => {
        this.lstPrmSrvcAll = data;
        this.lstPrmSrvc = data;
        console.log(this.lstPrmSrvcAll)
      }, err => {
        console.log(err)

      })

  }

  // Fetch Parameter Values

  getPrmVl() {

    this.prmVlService.getAllPrmVl()
      .subscribe(data => {

        this.lstPrmVlAll = data;
        this.lstPrmVl = data;
        console.log(this.lstPrmSrvcAll)
        console.log(this.lstPrmVl)

        // Filter Parameter Services based on selected Parameter Values
        this.lstPrmSrvc = this.prmVlService.getPrmVlByPrmSrvc(this.lstPrmSrvcAll, this.lstPrmVl)
        console.log(this.lstPrmSrvc)
      }, err => {
        console.log(err)

      })

  }

  // Initialize dropdown lists based on selected options

  public initSelect(lst?: any) {

    let prmFmly = this.form.value.prmFmly
    let prmClss = this.form.value.prmClss
    let prmSbClss = this.form.value.prmSbClss
    let prmTp = this.form.value.prmTp
    let prmTg = this.form.value.prmTg
    let prmVl = this.form.value.prmVl

    console.log(prmFmly)

    if (prmFmly != null) this.lstPrmClss = this.prmClssService.getPrmClssByPrmFmly(this.lstPrmClssAll, prmFmly)
    if (prmClss != null) { this.lstPrmSbClss = this.prmSbClssService.getPrmSbClssByPrmClss(this.lstPrmSbClssAll, prmClss) }
    if (prmSbClss != null) this.lstPrmTp = this.prmTpService.getPrmTpByPrmSbClss(this.lstPrmTpAll, prmSbClss)
    if (prmTp != null) this.lstPrmTg = this.prmTgService.getPrmTgByPrmTp(this.lstPrmTgAll, prmTp);
    if (prmTg != null) this.lstPrmVl = this.prmVlService.getPrmVlByPrmTg(this.lstPrmVlAll, prmTg);

    this.lstPrmVl = this.prmVlService.getPrmVlByOption(this.lstPrmVlAll, prmFmly, prmClss, prmSbClss, prmTp, prmTg)

    this.lstPrmSrvc = this.prmVlService.getPrmVlByPrmSrvc(this.lstPrmSrvcAll, this.lstPrmVl)

    if (prmVl != null) {

      this.lstPrmSrvc = this.prmVlService.getPrmVlByPrmSrvc(this.lstPrmSrvcAll, [prmVl])
    }

  }

}
