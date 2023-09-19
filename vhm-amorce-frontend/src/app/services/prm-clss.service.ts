import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// managing HTTP endpoint for PrmClss( class of params ) to communicate with the backend  
export class PrmClssService {
  
  
  //Injecting the 'HttpClient' service for making HTTP requests
  constructor( private http:HttpClient) { }






// Defining the base URL for HTTP requests.
public host:string="http://localhost:8080/prmClss"


 // HTTP GET request to fetch all data.
  public getAllPrmClss(){
    return this.http.get(this.host+"/all")
  }

  //HTTP GET request to find a PrmClss by its ID.
  
  public findPrmClssById(id : any){
    return this.http.get(this.host+'/find/'+id);
  }


  // HTTP POST request to add a new PrmClss.
  public addPrmClss(prmClss:any){
    return this.http.post(this.host+"/add",prmClss);
  }

   // HTTP PUT request to update an existing PrmClss.
  public updatePrmClss(prmClss:any){
    return this.http.put(this.host+"/update",prmClss);
  }

    // HTTP DELETE request to delete a PrmClss by its ID.

  public deletePrmClss(id : any){
    return this.http.delete(this.host+'/delete/'+id);
  }
  
  //// Filter PrmClss by a PrmFmly ( family of params).
  getPrmClssByPrmFmly(lstPrmClss :any[], prmfmly:any):any[]{

    return lstPrmClss.filter(prmClss => prmClss.prmFmly?.id === prmfmly?.id);
  
}
}

