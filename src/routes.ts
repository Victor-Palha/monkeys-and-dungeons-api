import { Router } from "express";
//Monsters Controllers
import { AllMonstersController } from "./controllers/monsters/AllMonstersController";
import { QueryMonstersController } from "./controllers/monsters/QueryMonstersController";
import { UniqueMonstersController } from "./controllers/monsters/UniqueMonstersController";
//Spells Controllers
import { AllSpellsController } from "./controllers/spells/AllSpellsController";
import { QuerySpellsController } from "./controllers/spells/QuerySpellsController";
import { UniqueSpellsController } from "./controllers/spells/UniqueSpellsController";
//tables Controllers
import { GenerateAdventureController } from "./controllers/tables/GenerateAdventureController";

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
    .get('/monsters/unique', new UniqueMonstersController().execute)

//Spells
.get('/spells', new AllSpellsController().execute)
    //Query Spells
    .get('/spells/query', new QuerySpellsController().execute)
    .get('/spells/unique', new UniqueSpellsController().execute)

//Tables
    //Adventure
    .post('/adventure', new GenerateAdventureController().execute)
//export router
export {router}
