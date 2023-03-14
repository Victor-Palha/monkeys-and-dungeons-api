export function ItemsList(itemsArray){
    const itemsList = itemsArray.map((item: any) => {
        return {
            name: item.name,
            source: item.source,
            rarity: item.rarity,
            wondrous: item.wondrous,
            reqAttune: item.reqAttune,
            //entries: item.entries,
        }
    })
    return itemsList
}

export function QueryItemsList(itemsArray, nome){
    const QueryItems = []

        itemsArray.map((item: any) => {
            if(item.name.toLowerCase().includes(validName(nome).toLowerCase())){
                QueryItems.push(item)
            }
        })
    return QueryItems
}

export function validName(nome){

    const regex = /^[1-9]\s.*$/;

    if (regex.test(nome)) {
        // A string começa com "1 alguma coisa", "2 outra coisa", "3 outra outra coisa", etc.
        var formatedNome = nome.replace(/^\d/, "+$&"); // Substitui o primeiro caractere (que é um dígito) por "+"
        return formatedNome
    }
    else{
        
        return nome
    }
}