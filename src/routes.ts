import { Router } from "express";
//Monsters Controllers
import { MMMonstersController } from "./controllers/monsters/MMMonstersController";
import { MPMMonstersController } from "./controllers/monsters/MPMMonstersController";
import { VRGRMonstersController } from "./controllers/monsters/VRGRMonstersController";

import {QueryMonstersController} from "./controllers/monsters/QueryMonstersController";
//Spells Controllers
import { PHBSpellsController } from "./controllers/spells/PHBSpellsController";
import { TCESpellsController } from "./controllers/spells/TCESpellsController";
import { XGESpellsController } from "./controllers/spells/XGESpellsController";
import { AllFluffController } from "./controllers/monsters/fluffs/AllFluffController";
import { QueryFluffController } from "./controllers/monsters/fluffs/QueryFluffController";
import { UniqueFluffController } from "./controllers/monsters/fluffs/UniqueFluffController";
//init router
const router = Router();

//routes
router.get("/health", (req, res) => {
    return res.sendStatus(200)
})
//Fluffs
.get('/monsters/fluffs', new AllFluffController().execute)
//fluff Query
.get('/monsters/fluffs/query', new QueryFluffController().execute)
//Monster + fluff info unique
.get('/monster/info', new UniqueFluffController().execute)
//Spells
.get('/spells-phb', new PHBSpellsController().execute) //Player's Handbook
.get('/spells-tce', new TCESpellsController().execute) //Tasha's Cauldron of Everything
.get('/spells-xge', new XGESpellsController().execute) //Xanathar's Guide to Everything


//export router
export {router}
