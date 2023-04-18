import { Router } from "express";
//Items Controllers
import { AllItemsController } from "./controllers/items/AllItemsController";
import { QueryItemsController } from "./controllers/items/QueryItemsController";
import { UniqueItemsController } from "./controllers/items/UniqueItemController";
//Monsters Controllers
import { AllMonstersController } from "./controllers/monsters/AllMonstersController";
//Spells Controllers
import { AllSpellsController } from "./controllers/spells/AllSpellsController";
//tables Controllers
import { GenerateAdventureController } from "./controllers/tables/GenerateAdventureController";

//init router
const router = Router();

//Database Classes
//const spellsController = new AllSpellsController();


//routes
router.get("/health", (req, res) => {
    return res.sendStatus(200)
})
//Monsters
.get('/monsters', new AllMonstersController().AllMonsters)
    //Monsters Query
    .get('/monsters/query', new AllMonstersController().QueryMonsters)
    .get('/monsters/unique', new AllMonstersController().UniqueMonster)

//Spells
.get('/spells', new AllSpellsController().AllSpells)
    //Query Spells
    .get('/spells/query', new AllSpellsController().QuerySpells)
    .get('/spells/unique', new AllSpellsController().UniqueSpell)

//Tables
    //Adventure
    .get('/adventure', new GenerateAdventureController().execute)

//Items
.get('/items', new AllItemsController().execute)
    //Query Items
    .get('/items/query', new QueryItemsController().execute)
    .get('/items/unique', new UniqueItemsController().execute)
//export router
export {router}
