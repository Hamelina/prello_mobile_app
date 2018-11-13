import client from './client'

export const fetchCardsWithFilter = (dueDate,filterBoards , filterLists , filterTags ) => {
    const filterBoardJoin = filterBoards.join(",")
    const filterListJoin = filterLists.join(",") 
    const filterTagJoin = filterTags.join(",") 

    return( 
        client.get("api/cards?"+filterBoardJoin+"&"+filterListJoin+"&"+filterTagJoin+"&"+dueDate)
    )

} 


export const fetchCard = (idCard) =>  {
    console.log(idCard);
    return client.get(`/api/board/${idCard}`)
    .then(response => response.data)
    .catch(err => console.log(err))
}