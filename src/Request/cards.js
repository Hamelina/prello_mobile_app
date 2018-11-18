import client from './client'

export const fetchCardsWithFilter = (dueDate = null, filterBoards = Array('5bf0fdd070807ea6b90b2d64') , filterLists=[] , filterTags=[] ) => {
    let filterBoardJoin = filterBoards != false ? "boards="+filterBoards.join(",") + "&" : "" ;
    let filterListJoin = filterLists != false ? "lists="+filterLists.join(",") +"&" : "" ;
    let filterTagJoin = filterTags != false ? "label="+filterTags.join(",")+"&" : "" ;
    let filterDueDate = !dueDate == false ? "duedate="+dueDate.time()+"&" : "" ;
    let filterDueComplete = "dueComplete=false" ;
    console.log("api/cards?"+filterBoardJoin+filterListJoin+filterTagJoin+filterDueDate+filterDueComplete+"&perpage=2000")
    return  client.get("api/cards?"+filterBoardJoin+filterListJoin+filterTagJoin+filterDueDate+filterDueComplete+"&perpage=2000")
}    
        
export const fetchCard = (idCard) =>  {
    console.log(idCard);
    return client.get(`/api/board/${idCard}`)
    .then(response => response.data)
    .catch(err => console.log(err))
}
        