import { PrmUsr } from "./PrmUsr";


//represents a medical service related to parameters.
export class PrmSrvc{

public id!: number;
public refSrvc!: number;
public prmSrvc_Nm!: string;

public lstPrmUsr!:PrmUsr[]

}

