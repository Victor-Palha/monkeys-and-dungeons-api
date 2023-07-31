import { InMemoryConditionsRepository } from "../../repositories/In-Memory/in-memory-conditions-repository";
import { UniqueConditionService } from "../conditions/Unique-condition-service";

export function MakeUniqueConditionService() {
    const conditionRepository = new InMemoryConditionsRepository();
    const service = new UniqueConditionService(conditionRepository);
    return service;
}