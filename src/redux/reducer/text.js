import { CHANGE_TEXT } from '../type/text'

const initialState = {
    data : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT :
            return {
                ...state,
                data : action.payload
            }
        default :
            return state
    }
}