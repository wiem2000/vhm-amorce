import {  PrmTg } from "./PrmTg";
import { PrmSbClss, } from "./PrmSbClss";


//represents a parameter type.
export class PrmTp{

    public id!: number;
    public prmTpName!: string;
    public tpRef!: number;
    public prmSbClss!: PrmSbClss
    public lstPrmTg!:PrmTg[]
    
    }