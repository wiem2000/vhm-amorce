import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


// managing HTTP endpoint for PrmSbClss( subclass of params ) to communicate with the backend 
export class PrmSbClssService {

   //Injecting the 'HttpClient' service for making HTTP requests
  constructor( private http:HttpClient) { }

  
// Defining the base URL for HTTP requests.

public host:string="http://localhost:8080/prmSbClss"


 // HTTP GET request to fetch all data.
  public getAllPrmSbClss(){
    return this.http.get(this.host+"/all")
  }

    //HTTP GET request to find a PrmSbClss by its ID.
  public findPrmSbClssById(id : any){
    return this.http.get(this.host+'/find/'+id);
  }

   // HTTP POST request to add a new PrmSbClss.
  public addPrmSbClss(prmSbClss:any){
    return this.http.post(this.host+"/add",prmSbClss);
  }

// HTTP PUT request to update an existing PrmSbClss.
  public updatePrmSbClss(prmSbClss:any){
    return this.http.put(this.host+"/update",prmSbClss);
  }

  // HTTP DELETE request to delete a PrmSbClss by its ID.
  public deletePrmSbClss(id : any){
    return this.http.delete(this.host+'/delete/'+id);
  }
  
  //// Filter PrmSbClss by a PrmClss ( class of params).
  getPrmSbClssByPrmClss(lstPrmSbClss :any[], prmClss:any):any[]{

    return lstPrmSbClss.filter(prmSbClss => prmSbClss.prmClss?.id === prmClss?.id);
  
}
}
