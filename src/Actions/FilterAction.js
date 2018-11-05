export const ADD_ID_BOARD_TO_FILTER = "@@filter/ADD_ID_BOARD_TO_FILTER"
export const REMOVE_ID_BOARD_TO_FILTER = "@@filter/REMOVE_ID_BOARD_TO_FILTER"

export const initFilter = {

    boardsFilter : [],
    cardsFilter : [], 
    labelsFilter : []
}

export const addBoardToFilter= (idBoard) => ({
    type: ADD_ID_BOARD_TO_FILTER,
    payload:  {
        idBoard
    }
})
export const removeBoardFromFilter= (idBoard) => ({
    type: REMOVE_ID_BOARD_TO_FILTER,
    payload:  {
        idBoard
    }
})