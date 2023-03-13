//Rolar dados de uma tabela de monstros de terror
export function rollDice(str) {
    const [numDice, numSides] = str.split('d');
    return (Math.floor(Math.random() * numSides));
}
//Buscar informações específicas de uma tabela de monstros de terror
export function GetHorrorMonster(HorrorTable, name){
    let colLabelsArray = []
    let rowsArray = []
    HorrorTable.horror.map((table)=>{
        if(table.name === name){
            if(table.entries){
                table.entries.map((entry)=>{
                    if(entry.type === "table"){
                        colLabelsArray.push(entry.colLabels[0])
                        rowsArray.push(...entry.rows)
                    }
                })
            }
        }
    })
    if(colLabelsArray.includes("Challenge")){
        //console.log(rowsArray.length)
        return rowsArray[rollDice(`d${rowsArray.length}`)]
    }
    return rowsArray[rollDice(colLabelsArray[0])]
}
