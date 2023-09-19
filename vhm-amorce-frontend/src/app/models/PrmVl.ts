import { PrmTg } from "./PrmTg";
import { PrmUsr } from "./PrmUsr";


//represents a parameter value.
export class PrmVl{

    public id!: number;
    public prmVl_Dta!: number;
    public prmTg!: PrmTg;
    public lstPrmUsr!:PrmUsr[]
    
    }