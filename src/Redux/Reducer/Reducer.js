const initialState = {
    imageurl:[]
}

const imageReducer = (state=initialState, action) =>{
    switch (action.type){
        case "Addimage":
            return{
                ...state,
                imageurl : [...state.imageurl, action.payload]
            }
        case "Deleteimage" :
            return {
                ...state,
                imageurl: action.payload
            }

        default:
            return state;
    }
}

export default imageReducer;
