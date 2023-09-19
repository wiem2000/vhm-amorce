import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// Managing HTTP endpoint for PrmTg (parameters) to communicate with the backend.
export class PrmTgService {


    // Injecting the 'HttpClient' service for making HTTP requests.
  constructor( private http:HttpClient) { }

 


 // Define the base URL for HTTP requests.

public host:string="http://localhost:8080/prmTg"


// HTTP GET request to fetch all PrmTg data.
  public getAllPrmTg(){
    return this.http.get(this.host+"/all")
  }

  // HTTP GET request to find a PrmTg by its ID.
  public findPrmTgById(id : any){
    return this.http.get(this.host+'/find/'+id);
  }

    // HTTP POST request to add a new PrmTg.
  public addPrmTg(prmTg:any){
    return this.http.post(this.host+"/add",prmTg);
  }

    // HTTP PUT request to update an existing PrmTg.
  public updatePrmTg(prmTg:any){
    return this.http.put(this.host+"/update",prmTg);
  }

   // HTTP DELETE request to delete a PrmTg by its ID.
  public deletePrmTg(id : any){
    return this.http.delete(this.host+'/delete/'+id);
  }
  
    // Filter PrmTg by a PrmTp (type of parameter).
  getPrmTgByPrmTp(lstPrmTg :any[], prmTp:any):any[]{

    return lstPrmTg.filter(prmTg => prmTg.prmTp?.id === prmTp?.id);
  
}
}
