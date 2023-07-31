import { InMemoryConditionsRepository } from "../../repositories/In-Memory/in-memory-conditions-repository";
import { GetAllConditionsService } from "../conditions/Get-all-conditions-service";

export function MakeGetAllConditionsService() {
    const conditionRepository = new InMemoryConditionsRepository();
    const service = new GetAllConditionsService(conditionRepository);
    return service;
}