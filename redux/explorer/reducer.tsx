import { AnyAction } from 'redux'

const initialState = {
    blocks: [],
    nfts: [],
    transactions: [],
    validators: []
}

export const reducer = (state = initialState, action: AnyAction) => {
    let nextState
    switch (action.type){
        case 'EXP_BLOCKS':
            nextState = {
                ...state,
                blocks: action.value
            }
            return nextState
        case 'EXP_NFTS':
            nextState = {
                ...state,
                nfts: action.value
            }
            return nextState
        case 'EXP_TRANSACTIONS':
            nextState = {
                ...state,
                transactions: action.value
            }
            return nextState
        case 'EXP_VALIDATORS':
            nextState = {
                ...state,
                validators: action.value
            }
            return nextState
        default:
            return state
    }
}