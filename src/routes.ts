import { Router } from "express";
//Monsters Controllers
import { AllMonstersController } from "./controllers/monsters/AllMonstersController";
import { QueryMonstersController } from "./controllers/monsters/QueryMonstersController";
import { UniqueMonstersController } from "./controllers/monsters/UniqueMonstersController";
//Spells Controllers
import { AllSpellsController } from "./controllers/spells/AllSpellsController";
import { QuerySpellsController } from "./controllers/spells/QuerySpellsController";
//init router
const router = Router();

//routes
router.get("/health", (req, res) => {
    return res.sendStatus(200)
})
//Monsters
.get('/monsters', new AllMonstersController().execute)
//Monsters Query
.get('/monsters/query', new QueryMonstersController().execute)
//Monsters Unique
.get('/monsters/unique', new UniqueMonstersController().execute)
//Spells
.get('/spells', new AllSpellsController().execute)
//Query Spells
.get('/spells/query', new QuerySpellsController().execute)

//export router
export {router}
