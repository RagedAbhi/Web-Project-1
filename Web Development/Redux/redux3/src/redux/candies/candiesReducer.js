import { BUY_CANDIES } from "./candiesTypes";

const initialState = {
    numOfCandies: 50
}

const candiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CANDIES: return {
            ...state,
            numOfCandies: state.numOfCandies - 5
        }
        default: return state
    }
}

export default candiesReducer