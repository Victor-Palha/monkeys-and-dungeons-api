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
//init router
const router = Router();

//routes
router.get("/health", (req, res) => {
    return res.sendStatus(200)
})
//monsters
.get('/monsters-mm', new MMMonstersController().execute) //Monster Manual
.get('/monsters-mpmm', new MPMMonstersController().execute) //Mordenkainen's Presents Monsters of Multiverse
.get('/monsters-vrgr', new VRGRMonstersController().execute) //Van Richten's Guide to Ravenloft

.get('/monsters', new QueryMonstersController().execute) //Query Monsters
//Spells
.get('/spells-phb', new PHBSpellsController().execute) //Player's Handbook
.get('/spells-tce', new TCESpellsController().execute) //Tasha's Cauldron of Everything
.get('/spells-xge', new XGESpellsController().execute) //Xanathar's Guide to Everything


//export router
export {router}
