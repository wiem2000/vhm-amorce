import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// Managing HTTP endpoint for PrmUsr (users in a medical service using parameters) to communicate with the backend.
export class PrmUsrService {


  // Injecting the 'HttpClient' service for making HTTP requests.

  constructor(private http:HttpClient) { }

  

  // Define the base URL for HTTP requests.

public host:string="http://localhost:8080/prmUsr"


// HTTP GET request to fetch all PrmUsr data.
  public getAllPrmUsr(){
    return this.http.get(this.host+"/all")
  }

   // HTTP GET request to find a PrmUsr by its ID.

  public findPrmUsrById(id : any){
    return this.http.get(this.host+'/find/'+id);
  }

   // HTTP POST request to add a new PrmUsr.
  public addPrmUsr(prmUsr:any){
    return this.http.post(this.host+"/add",prmUsr);
  }

    // HTTP PUT request to update an existing PrmUsr.
  public updatePrmUsr(prmUsr:any){
    return this.http.put(this.host+"/update",prmUsr);
  }

    // HTTP DELETE request to delete a PrmUsr by its ID.
  public deletePrmUsr(id : any){
    return this.http.delete(this.host+'/delete/'+id);
  }

    // Get a list of  PrmUsr by a PrmSrvc (medical service).
  public getPrmUsrByPrmSrvc(prmSrvc:any, lstPrmUsr:any[]){
    return lstPrmUsr.filter(prmUsr => prmUsr.prmSrvc?.id === prmSrvc?.id);

  }
  

    // Get a list of PrmUsr by a list of PrmSrvc (medical services).
public getPrmUsrByLstPrmSrvc(lstPrmSrvc:any, lstPrmUsr:any){
  
  
  let lstPrmUsrSrvc: any[]=[]

  lstPrmSrvc.forEach((prmSrvc: any) => {

    lstPrmUsrSrvc=lstPrmUsrSrvc.concat(this.getPrmUsrByPrmSrvc(prmSrvc,lstPrmUsr));

  })
return lstPrmUsrSrvc;
      


}




}
