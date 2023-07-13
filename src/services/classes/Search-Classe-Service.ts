import { ClasseInterface } from "../../interfaces/classes";
import { ClassesRepository } from "../../repositories/ClassesRepository";

export class SearchClassService{
    constructor(private classesRepository: ClassesRepository){}

    async execute(classe: string): Promise<ClasseInterface>{
        const classeSearch = await this.classesRepository.ClasseSearch(classe)
        
        return classeSearch
    }
}