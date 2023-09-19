import { PrmClss } from "./PrmClss";

//represents a parameter family.
export class PrmFmly{

    public id!: number;
    public prmFmly_EkEY!: number;
    public prmFmly_Nm!: string;
    public lstPrmClss!:PrmClss[]
    
    }