export function ItemsList(itemsArray){
    const itemsList = itemsArray.item.map((item: any) => {
        return {
            name: item.name,
            source: item.source,
            rarity: item.rarity,
            wondrous: item.wondrous,
            reqAttune: item.reqAttune,
            entries: item.entries,
        }
    })
    return itemsList
}