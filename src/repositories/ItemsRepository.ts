import { Items } from "../interfaces/Itens";

export interface ItemsRepository {
    AllItems(): Promise<Items[]>
    QueryItems(search: string): Promise<Items[]>
    UniqueItem(id: string): Promise<Items>
}