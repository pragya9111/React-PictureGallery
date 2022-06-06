import { Addimage, Deleteimage } from "./ActionType";

export const addimage= (value)=> {
    return {
        type:Addimage,
        payload:value
    }
}
export const deleteimage = (value)=> {
    return {
        type:Deleteimage,
        payload: value
    }
}
