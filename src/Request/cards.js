import client from './client'

const fetchCardsWithFilter = (dueDate,filterBoards , filterLists , filterTags ) => {
    const filterBoardJoin = filterBoards.join(",")
    const filterListJoin = filterLists.join(",") 
    const filterTagJoin = filterTags.join(",") 

    return( 
        client.get("api/cards?"+filterBoardJoin+"&"+filterListJoin+"&"+filterTagJoin+"&"+dueDate)
    )

} 