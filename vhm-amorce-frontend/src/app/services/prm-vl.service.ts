import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// Managing HTTP endpoint for PrmVl (parameter values) to communicate with the backend.
export class PrmVlService {

// Injecting the 'HttpClient' service for making HTTP requests.
  constructor( private http: HttpClient) { }


   // Define the base URL for HTTP requests.
  public host: string = "http://localhost:8080/prmVl"

    // HTTP GET request to fetch all PrmVl data.
  public getAllPrmVl() {
    return this.http.get(this.host + "/all")
  }


    // HTTP GET request to find a PrmVl by its ID.
  public findPrmVlById(id: any) {
    return this.http.get(this.host + '/find/' + id);
  }

   // HTTP POST request to add a new PrmVl.
  public addPrmVl(prmVl: any) {
    return this.http.post(this.host + "/add", prmVl);
  }

    // HTTP PUT request to update an existing PrmVl.
  public updatePrmVl(prmVl: any) {
    return this.http.put(this.host + "/update", prmVl);
  }

    // HTTP DELETE request to delete a PrmVl by its ID.

  public deletePrmVl(id: any) {
    return this.http.delete(this.host + '/delete/' + id);
  }

  // Get PrmVl by PrmTg ( a parameter).

  getPrmVlByPrmTg(lstPrmVl: any[], prmTg: any): any[] {

    return lstPrmVl.filter(prmVl => prmVl.prmTg.id === prmTg.id);

  }

   // for each PrmSrvc (medical service),  associate the list of PrmVl by associated PrmSrvc .
  public getPrmVlByPrmSrvc(lstPrmSrvcAll: any[], lstPrmVl: any[]) {


    let lstPrmSrvc=lstPrmSrvcAll;
    lstPrmSrvc.forEach((prmSrvc :any) => {

      prmSrvc.lstPrmVl = []

      lstPrmVl.forEach((prmVl: { lstPrmUsr: any[]; id:any}) => {

        prmVl.lstPrmUsr.forEach((prmUsr: any) => {

          if (prmSrvc.lstPrmVl.find((prmVlSrvc: { id: any; }) => prmVlSrvc?.id === prmVl?.id) == null && prmUsr.prmSrvc?.id === prmSrvc?.id) {

            prmSrvc.lstPrmVl.push(prmVl)

          }

        })


      })
    })

    return lstPrmSrvc;



  }

   // Get PrmVl by various filtering options (prmFmly, prmClss, prmSbClss, prmTp, prmTg).
  public getPrmVlByOption(lstPrmVl:any[], prmFmly?:any|null,prmClss?:any|null,prmSbClss?:any|null,prmTp?:any|null ,prmTg?:any|null ){
 
    
    
  if(prmFmly)
    lstPrmVl=lstPrmVl.filter(prmVl => prmVl.prmTg.prmTp.prmSbClss.prmClss.prmFmly.id === prmFmly.id);

  
  if(prmClss && prmFmly)
  lstPrmVl=lstPrmVl.filter(prmVl => prmVl.prmTg.prmTp.prmSbClss.prmClss.id === prmClss.id);

  
  if(prmSbClss && prmClss && prmFmly)
  lstPrmVl=lstPrmVl.filter(prmVl => prmVl.prmTg.prmTp.prmSbClss.id === prmSbClss.id);

  
  if(prmTp && prmSbClss && prmClss && prmFmly )
  lstPrmVl=lstPrmVl.filter(prmVl => prmVl.prmTg.prmTp.id === prmTp.id);

  
  if(prmTg && prmTp && prmSbClss && prmClss && prmFmly )
  lstPrmVl=lstPrmVl.filter(prmVl => prmVl.prmTg.id === prmTg.id);

  return lstPrmVl
  
}
}
