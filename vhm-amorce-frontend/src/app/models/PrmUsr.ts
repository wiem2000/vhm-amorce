
import { PrmSrvc } from "./PrmSrvc";
import { PrmVl } from "./PrmVl";


//represents a parameter user.
export class PrmUsr{

public id!: number;
public prmUsr_Vl!: string;
public prmUsr_SrvcAr!: string;
public prmSrvc!:PrmSrvc;
public lstPrmVl!:PrmVl[]

}


