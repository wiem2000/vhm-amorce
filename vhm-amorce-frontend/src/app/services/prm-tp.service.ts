import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Managing HTTP endpoint for PrmTp (parameter types) to communicate with the backend.
export class PrmTpService {

 
  // Injecting the 'HttpClient' service for making HTTP requests.
  constructor( private http:HttpClient) { }

  

 // Define the base URL for HTTP requests.
public host:string="http://localhost:8080/prmTp"


// HTTP GET request to fetch all PrmTp data.
 
  public getAllPrmTp(){
    return this.http.get(this.host+"/all")
  }

   // HTTP GET request to find a PrmTp by its ID.
  public findPrmTpById(id : any){
    return this.http.get(this.host+'/find/'+id);
  }

  // HTTP POST request to add a new PrmTp.
  public addPrmTp(prmTp:any){
    return this.http.post(this.host+"/add",prmTp);
  }

  // HTTP PUT request to update an existing PrmTp.
  public updatePrmTp(prmTp:any){
    return this.http.put(this.host+"/update",prmTp);
  }

   // HTTP DELETE request to delete a PrmTp by its ID.
  public deletePrmTp(id : any){
    return this.http.delete(this.host+'/delete/'+id);
  }
  
   // Filter PrmTp by a PrmSbClss (subclass of parameters).
  getPrmTpByPrmSbClss(lstPrmTp :any[], prmSbClss:any):any[]{

    return lstPrmTp.filter(prmTp => prmTp.prmSbClss?.id === prmSbClss?.id);
  
}
}
