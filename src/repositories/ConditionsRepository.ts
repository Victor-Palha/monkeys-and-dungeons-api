import { Conditions, ConditionsTemplate } from "../interfaces/conditions";

export interface ConditionsRepository {

    getAllConditions(): Promise<ConditionsTemplate[]>;
    uniqueCondition(id: string): Promise<Conditions>;
}