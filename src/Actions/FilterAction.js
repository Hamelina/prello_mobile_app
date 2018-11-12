export const ADD_ID_BOARD_TO_FILTER = "@@filter/ADD_ID_BOARD_TO_FILTER"
export const REMOVE_ID_BOARD_FROM_FILTER = "@@filter/REMOVE_ID_BOARD_FROM_FILTER"

export const ADD_ID_LIST_TO_FILTER = "@@filter/ADD_ID_LIST_TO_FILTER"
export const REMOVE_ID_LIST_FROM_FILTER = "@@filter/REMOVE_ID_LIST_FROM_FILTER"

export const ADD_ID_LABEL_TO_FILTER = "@@filter/ADD_ID_LABEL_TO_FILTER"
export const REMOVE_ID_LABEL_FROM_FILTER = "@@filter/REMOVE_ID_LABEL_FROM_FILTER"

export const ADD_DATE_TO_FILTER = "@@filter/ADD_DATE_TO_FILTER"
export const REMOVE_DATES_FROM_FILTER = "@@filter/REMOVE_DATES_FROM_FILTER"



export const initFilter = {

    boardsFilter : [],
    listsFilter : [], 
    labelsFilter : [], 
    dateFilter : [],
}

export const addBoardToFilter= (idBoard) => ({
    type: ADD_ID_BOARD_TO_FILTER,
    payload:  {
        idBoard
    }
})
export const removeBoardFromFilter= (idBoard) => ({
    type: REMOVE_ID_BOARD_FROM_FILTER,
    payload:  {
        idBoard
    }
})

export const addListToFilter= (idList) => ({
    type: ADD_ID_LIST_TO_FILTER,
    payload:  {
        idList
    }
})
export const removeListFromFilter= (idList) => ({
    type: REMOVE_ID_LIST_FROM_FILTER,
    payload:  {
        idList
    }
})

export const addLabelToFilter= (idLabel) => ({
    type: ADD_ID_LABEL_TO_FILTER,
    payload:  {
        idLabel
    }
})
export const removeLabelFromFilter= (idLabel) => ({
    type: REMOVE_ID_LABEL_FROM_FILTER,
    payload:  {
        idLabel
    }
})

export const addDateToFilter= (idDate) => ({
    type: ADD_DATE_TO_FILTER,
    payload:  {
        idDate
    }
})
export const removeDatesFromFilter= () => ({
    type: REMOVE_DATES_FROM_FILTER,
    payload:  {
        
    }
})