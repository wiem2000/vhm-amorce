import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Managing HTTP endpoint for PrmSrvc (medical service) to communicate with the backend.
export class PrmSrvcService {

   // Injecting the 'HttpClient' service for making HTTP requests.
  constructor( private http:HttpClient) { }

 


// Define the base URL for HTTP requests.
  
  public host:string="http://localhost:8080/prmSrvc"
  

  // HTTP GET request to fetch all PrmSrvc data.
    public getAllPrmSrvc(){
      return this.http.get(this.host+"/all")
    }

 // HTTP GET request to find a PrmSrvc by its ID.
  
    public findPrmSrvcById(id : any){
      return this.http.get(this.host+'/find/'+id);
    }

    // HTTP POST request to add a new PrmSrvc.
    public addPrmSrvc(prmSrvc:any){
      return this.http.post(this.host+"/add",prmSrvc);
    }

     // HTTP PUT request to update an existing PrmSrvc.
    public updatePrmSrvc(prmSrvc:any){
      return this.http.put(this.host+"/update",prmSrvc);
    }
  
     // HTTP DELETE request to delete a PrmSrvc by its ID.
    public deletePrmSrvc(id : any){
      return this.http.delete(this.host+'/delete/'+id);
    }
    
 // Get a list of PrmSrvc by a list of PrmUsr (users working in the service).
   
 public getPrmSrvcByLstPrmUsr(lstPrmUsr:any){

      let lstPrmSrvcUsr: any[]=[]
    
      lstPrmUsr.forEach((prmUsr: any) => {
    
        if (lstPrmSrvcUsr.find((prmSrvc: { id: any; }) => prmSrvc?.id === prmUsr.prmSrvc?.id) == null ) {
    
          lstPrmSrvcUsr.push(prmUsr.prmSrvc)
    
        }
    
      })
    return lstPrmSrvcUsr;
    
    }
      
 
}
