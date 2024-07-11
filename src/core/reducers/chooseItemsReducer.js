const initialState = {
    moveSideBar: false,
    language: 'ru'
}

const chooseDishesReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'MOVE_SIDE_BAR':
            return {
                ...state,
                moveSideBar: action.payload
            }
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: action.payload
            }
        default: 
        return state;  
    }
}

export default chooseDishesReducer