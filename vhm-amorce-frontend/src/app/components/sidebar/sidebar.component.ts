import { Component, OnInit } from '@angular/core';
import { PrmSbClss } from 'src/app/models/PrmSbClss';
import { GlobalEventService } from 'src/app/services/global-event-service.service';
import { PrmClssService } from 'src/app/services/prm-clss.service';
import { PrmFmlyService } from 'src/app/services/prm-fmly.service';
import { PrmSbClssService } from 'src/app/services/prm-sb-clss.service';
import { PrmTgService } from 'src/app/services/prm-tg.service';
import { PrmTpService } from 'src/app/services/prm-tp.service';
import { PrmVlService } from 'src/app/services/prm-vl.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

// Angular component for managing the sidebar containing hierarchical parameter data.

export class SidebarComponent implements OnInit {

  public lstPrmFmly!: any;  // list of Parameter families
  public lstPrmClss!: any;  // Parameter classes
  public lstPrmSbClss!: any;   // Parameter subclasses
  public lstPrmTp!: any;   // Parameter types
  public lstPrmTg!: any;  // Parameter targets
  public lstPrmVl!: any;   // Parameter values
  public sidebarStreched = true;   // Flag to control the sidebar's stretched state.

  constructor(
    private globalEventService: GlobalEventService,
    private prmFmlyService: PrmFmlyService,
    private prmClssService: PrmClssService,
    private prmSbClssService: PrmSbClssService,
    private prmTpService: PrmTpService,
    private prmTgService: PrmTgService,
    private prmVlService: PrmVlService) { }

  ngOnInit(): void {

    // Fetch data and subscribe to data updates.
    this.getData()
    this.globalEventService.dataUpdated$().subscribe(() => {
      this.getData()
    });


  }

  // Toggle the sidebar's stretched state.
  public hideSideBar() {
    if (this.sidebarStreched == true)
      this.sidebarStreched = false
    else this.sidebarStreched = true

  }

  // Fetch all parameter data.
  public getData() {
    this.prmFmlyService.getAllPrmFmly()
      .subscribe(data => {
        this.lstPrmFmly = data;
        this.prmClssService.getAllPrmClss()
          .subscribe(data => {
            this.lstPrmClss = data;
            this.prmSbClssService.getAllPrmSbClss()
              .subscribe(data => {
                this.lstPrmSbClss = data;
                this.prmTpService.getAllPrmTp()
                  .subscribe(data => {
                    this.lstPrmTp = data;
                    this.prmTgService.getAllPrmTg()
                      .subscribe(data => {
                        this.lstPrmTg = data;
                        this.prmVlService.getAllPrmVl()
                          .subscribe(data => {
                            this.lstPrmVl = data;
                            this.initSidebar()
                            console.log(this.lstPrmFmly)

                          }, err => {
                            console.log(err)

                          })
                      }, err => {
                        console.log(err)
                      })
                  }, err => {
                    console.log(err)

                  })

              }, err => {
                console.log(err)

              })

          }, err => {
            console.log(err)

          })

      }, err => {
        console.log(err)

      })
  }

  // Initialize the hierarchical sidebar data structure.
  public initSidebar() {

    this.lstPrmFmly.forEach((fmly: any) => {

      fmly.lstPrmClss = this.prmClssService.getPrmClssByPrmFmly(this.lstPrmClss, fmly)

      this.lstPrmClss.forEach((clss: any) => {
        clss.lstPrmSbClss = this.prmSbClssService.getPrmSbClssByPrmClss(this.lstPrmSbClss, clss)
        clss.lstPrmSbClss.forEach((sbClss: PrmSbClss) => {
          sbClss.lstPrmTp = this.prmTpService.getPrmTpByPrmSbClss(this.lstPrmTp, sbClss);
          sbClss.lstPrmTp.forEach(tp => {
            tp.lstPrmTg = this.prmTgService.getPrmTgByPrmTp(this.lstPrmTg, tp)
            tp.lstPrmTg.forEach(tg => {
              tg.lstPrmVl = this.prmVlService.getPrmVlByPrmTg(this.lstPrmVl, tg)

            });

          });

        });

      });
    });

  }




  // Toggle the visibility of parameter data list by its ID and number.
  public onClick(id: string, num: number) {
    let maListe: HTMLElement | null;
    let icone = document.getElementById(id + num)

    if (id === "#fmly") {
      maListe = document.getElementById('clss' + num);
    }
    if (id === "#clss") {

      maListe = document.getElementById('sbClss' + num);
    }
    if (id === "#sbClss") {
      maListe = document.getElementById('tp' + num);

    }
    if (id === "#tp") {
      maListe = document.getElementById('tg' + num);
    }
    if (id === "#tg") {
      maListe = document.getElementById('vl' + num);
    }

    if (maListe!.style.display === 'none') {
      maListe!.style.display = 'block';
      icone!.className = "fa-solid fa-minus"

    } else {
      maListe!.style.display = 'none';
      icone!.className = "fa-solid fa-plus"

    }

  }


}
