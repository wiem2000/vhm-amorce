import { PrmTp,  } from "./PrmTp";
import { PrmVl,} from "./PrmVl";


//represents a parameter target.
export class PrmTg{

    public id!: number;
    public prmTg!: string;
    public tgRef!: number;
    public prmTp!: PrmTp;
    public lstPrmVl!:PrmVl[]
    }