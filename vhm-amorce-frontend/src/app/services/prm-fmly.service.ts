import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// managing HTTP endpoint for PrmFmly( family of params ) to communicate with the backend  
export class PrmFmlyService {

  //Injecting the 'HttpClient' service for making HTTP requests
  constructor( private http:HttpClient) { }

 

// Defining the base URL for HTTP requests.

public host:string="http://localhost:8080/prmFmly"


// HTTP GET request to fetch all data.
  public getAllPrmFmly(){
    return this.http.get(this.host+"/all")
  }

   //HTTP GET request to find a PrmFmly by its ID.

  public findPrmFmlyById(id : any){
    return this.http.get(this.host+'/find/'+id);
  }

 // HTTP POST request to add a new PrmFmly.
  public addPrmFmly(prmFmly:any){
    return this.http.post(this.host+"/add",prmFmly);
  }

  // HTTP PUT request to update an existing PrmFmly.
  public updatePrmFmly(prmFmly:any){
    return this.http.put(this.host+"/update",prmFmly);
  }

   // HTTP DELETE request to delete a PrmFmly by its ID.
  public deletePrmFmly(id : any){
    return this.http.delete(this.host+'/delete/'+id);
  }



}
