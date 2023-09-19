
import { PrmClss } from "./PrmClss";
import { PrmTp,} from "./PrmTp";


//represents a parameter subclass.
export class PrmSbClss{

    public id!: number;
    public prmSbClss_Name!: string;
    public prmSbClss_KY!: number;
    public prmClss!: PrmClss
    public lstPrmTp!:PrmTp[]
    }