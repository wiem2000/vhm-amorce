import { PrmFmly } from "./PrmFmly";
import { PrmSbClss } from "./PrmSbClss";

//represents a parameter class.
export class PrmClss{

public id!: number;
public clssRef!: number;
public prmClssName!: string;
public prmFmly!:PrmFmly;
public lstPrmSbClss!:PrmSbClss[]

}