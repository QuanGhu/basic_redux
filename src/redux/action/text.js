import { CHANGE_TEXT } from '../type/text'

export const changeTextValue = (data) => {
    return {
        type : CHANGE_TEXT,
        payload : data
    }
}