import { ClasseInterface } from "../interfaces/classes";

export interface ClassesRepository {
    ClasseSearch(classe: string): Promise<ClasseInterface | null>
}