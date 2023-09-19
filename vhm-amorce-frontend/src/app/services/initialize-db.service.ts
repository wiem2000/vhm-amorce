import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InitializeDBService {

  constructor() { }
  /*
  families:PrmFmly[]=[
    {
      id:1,
      fmlyName:"fmly1",
      fmlyRef:564,
      lstPrmClss:[]
    }
  ]

  classes:PrmClss[]=[
    {
      id:1,
      prmClssName:"Environment",
      clssRef:123,
      prmFmly:this.families[0],
      lstPrmSbClss:[]
    },  
    {
      id:2,
      prmClssName:"HIS",
      clssRef:123,
      prmFmly:this.families[0],
      lstPrmSbClss:[]
    },
    {
      id:3,
      prmClssName:"Network",
      clssRef:123,
      prmFmly:this.families[0],
      lstPrmSbClss:[]
    },  
    {
      id:4,
      prmClssName:"Option",
      clssRef:123,
      prmFmly:this.families[0],
      lstPrmSbClss:[]
    }, 
    
  ]
  sousClasses:PrmSbClss[]=[
    {
      id:1,sbClssName:"HIS",sbClssRef:123,prmClss:this.classes[0],lstPrmTp:[]
    },
    {
      id:2,sbClssName:"Intefrace",sbClssRef:123,prmClss:this.classes[0],lstPrmTp:[]
    },
    {
      id:3,sbClssName:"Server",sbClssRef:123,prmClss:this.classes[1],lstPrmTp:[]
    },
    {
      id:4,sbClssName:"System",sbClssRef:123,prmClss:this.classes[2],lstPrmTp:[]
    },
    {
      id:5,sbClssName:"Application",sbClssRef:123,prmClss:this.classes[3],lstPrmTp:[]
    },
  ]
  types:PrmTp[]=[
    {
      id:1,tpName:"HL7_Vrsn_Clncn",prmSbClss:this.sousClasses[0],lstPrmTg:[],tpRef:123,
    
    },  
    {
      id:2,tpName:"HIS",prmSbClss:this.sousClasses[1],lstPrmTg:[],tpRef:123,
    },
    {
      id:3,tpName:"Directory",prmSbClss:this.sousClasses[2],lstPrmTg:[],tpRef:123,
    },
    {
      id:4,tpName:"Audit",prmSbClss:this.sousClasses[3],lstPrmTg:[],tpRef:123,
    },
    {
      id:5,tpName:"TraceVhmOpen",prmSbClss:this.sousClasses[4],lstPrmTg:[],tpRef:123,
    },
  ]
  parametres:PrmTg[]=[
    {
      id:1,tgName:"Admission",prmTp:this.types[0],lstPrmVl:[],tgRef:123
    
    },  
    {
      id:2,tgName:"Advncmnt",prmTp:this.types[1],lstPrmVl:[],tgRef:123
    },
    {
      id:3,tgName:"HciSolutions",prmTp:this.types[2],lstPrmVl:[],tgRef:123
    },
    {
      id:4,tgName:"MediSupport",prmTp:this.types[3],lstPrmVl:[],tgRef:123
    },
    {
      id:5,tgName:"PPEnabled",prmTp:this.types[4],lstPrmVl:[],tgRef:123
    },
  ]
  valeurs:PrmVl[]=[
    {
      id:1,vlData:1,prmTg:this.parametres[0]
    
    },  
    {
      id:2,vlData:2,prmTg:this.parametres[1]
    },
    {
      id:3,vlData:3,prmTg:this.parametres[2]
    },
    {
      id:4,vlData:1,prmTg:this.parametres[3]
    },
    {
      id:5,vlData:4,prmTg:this.parametres[4]
    },
  ]


*/


}
