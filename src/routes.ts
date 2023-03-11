import { Router } from "express";
//Fluffs Controllers
import { AllFluffController } from "./controllers/monsters/fluffs/AllFluffController";
import { QueryFluffController } from "./controllers/monsters/fluffs/QueryFluffController";
import { UniqueFluffController } from "./controllers/monsters/fluffs/UniqueFluffController";
//Spells Controllers
import { AllSpellsController } from "./controllers/spells/AllSpellsController";
import { QuerySpellsController } from "./controllers/spells/QuerySpellsController";
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
.get('/spells', new AllSpellsController().execute)
//Query Spells
.get('/spells/query', new QuerySpellsController().execute)

//export router
export {router}
