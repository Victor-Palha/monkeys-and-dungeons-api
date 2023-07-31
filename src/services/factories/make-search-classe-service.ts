import { InMemoryClassesRepository } from "../../repositories/In-Memory/in-memoty-classes-repository";
import { SearchClassService } from "../classes/Search-Classe-Service";

export function MakeSearchClasseService() {
    const classeRepository = new InMemoryClassesRepository();
    const service = new SearchClassService(classeRepository)
    return service;
}