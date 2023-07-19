import { Router } from "express";
//Items Controllers
import { AllItemsController } from "./controllers/items/GetAllItemsController";
    import { QueryItemsController } from "./controllers/items/QueryItemsController";
        import { UniqueItemController } from "./controllers/items/UniqueItemsController";
        
//Monsters Controllers
import { AllMonstersController } from "./controllers/monsters/AllMonstersController";
    import { QueryMonsterController } from "./controllers/monsters/QueryMonsterController";
        import { UniqueMonsterController } from "./controllers/monsters/UniqueMonsterController";

//Spells Controllers
import { AllSpellsController } from "./controllers/spells/AllSpellsController";

//tables Controllers
import { GenerateAdventureController } from "./controllers/tables/GenerateAdventureController";
    import { QuerySpellsController } from "./controllers/spells/QuerySpellsController";
        import { UniqueSpellsController } from "./controllers/spells/UniqueSpellController";
import { GenerateDnDCharacterController } from "./controllers/tables/GenerateDnDCharacter";
import { SearchClassController } from "./controllers/classes/SearchClasseControllet";
import { CreateId } from "./controllers/createId";
import { GetAllFeatsController } from "./controllers/feats/get-all-feats-controller";
import { UniqueFeatController } from "./controllers/feats/UniqueFeatController";
import { GetAllBackgroundsController } from "./controllers/backgrounds/GetAllBackgroundsController";
import { UniqueBackgroundController } from "./controllers/backgrounds/UniqueBackgroundController";
import { GetAllConditionsController } from "./controllers/conditions/Get-All-Conditions-Controller";
import { UniqueConditionController } from "./controllers/conditions/Unique-Condition-Controller";

//init router
const router = Router();

//routes
router.get("/health", (req, res) => {
    return res.sendStatus(200)
})
.get("/newID", new CreateId().execute)
//Monsters
.get('/monsters', new AllMonstersController().execute)
    //Monsters Query
    .get('/monsters/query', new QueryMonsterController().execute)
    .get('/monsters/:id', new UniqueMonsterController().execute)

//Spells
.get('/spells', new AllSpellsController().execute)
    //Query Spells
    .get('/spells/query', new QuerySpellsController().execute)
    .get('/spells/:id', new UniqueSpellsController().execute)

//OpenAI
    //Adventure
    .get('/adventure', new GenerateAdventureController().execute)
    // Image
    .post('/character', new GenerateDnDCharacterController().execute)

//Items
.get('/items', new AllItemsController().execute)
    //Query Items
     .get('/items/query', new QueryItemsController().execute)
     .get('/items/:id', new UniqueItemController().execute)

//Classes
.get('/classes', new SearchClassController().execute)

//Feats
    .get('/feats', new GetAllFeatsController().execute)
    .get('/feats/:id', new UniqueFeatController().execute)

// Backgrounds
    .get('/backgrounds', new GetAllBackgroundsController().execute)
    .get('/backgrounds/:id', new UniqueBackgroundController().execute)

//Conditions
    .get('/conditions', new GetAllConditionsController().execute)
    .get('/conditions/:id', new UniqueConditionController().execute)
//export router
export {router}
