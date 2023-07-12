import { Items } from "../interfaces/Itens";
import { Query } from "../interfaces/Query";

export interface ItemsRepository {
    AllItems(): Promise<Items[]>
    QueryItems(search: string): Promise<Items[]>
    UniqueItem(id: string): Promise<Items[]>
}