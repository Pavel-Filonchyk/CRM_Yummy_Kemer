const initialState = {
    menu: [],
    token: '',
    dishes: [],
    redact: {},
    blockId: '',
}

const restMenuReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'GET_MENU_SUCCESS':
            const list = Object.keys(action.payload).map(key => ({...action.payload[key], blockId: key}))
            return {
                ...state,
                menu: list
            }
        case 'SEND_TOKEN':
            return {
                ...state,
                token: action.payload.token
            }
        case 'CHOOSE_DISHES':
            const dishes = state.menu?.find(item => item.blockId === action.payload)?.dishes
            return {
                ...state,
                dishes,
                blockId: action.payload
            }
        case 'ADD_TO_REDACT':
            const filterRedact = state.menu?.filter(item => item?.blockId === state.blockId)[0]
            const findDish = filterRedact?.dishes?.find(item => item?.id === action.payload?.id)
            return {
                ...state,
                redact: findDish
            }
        case 'PUT_REDACT':
            const newDish = {
                nameTr: action.payload.nameTr,
                nameRu: action.payload.nameRu,
                nameEn: action.payload.nameEn,
                discriptionsTr: action.payload.discriptionsTr,
                discriptionsRu: action.payload.discriptionsRu,
                discriptionsEn: action.payload.discriptionsEn,
                image: action.payload.image,
                id: action.payload.id,
                amount: action.payload.amount,
                cost: action.payload.cost
                
            }
            const redactDishes = state.dishes?.filter(item => item?.id !== action.payload.id)
            const findIndex = state.dishes?.findIndex(item => item?.id === action.payload.id)
            redactDishes.splice(findIndex, 0, newDish)
            return {
                ...state,
                dishes: redactDishes
            }
        case 'PUT_REDACT_SUCCESS':
            console.log(action.payload)
            return {
                ...state,
            }
        case 'POST_REDACT':
            return {
                ...state,
                dishes: [...state.dishes, action.payload]
            }
        case 'POST_REDACT_SUCCESS':
            console.log(action.payload)
            return {
                ...state,
            }
        case 'DELETE_REDACT':
            const deleteDishes = state.dishes?.filter(item => item?.id !== action.payload.id)
            return {
                ...state,
               dishes: deleteDishes
            }
        case 'DELETE_REDACT_SUCCESS':
            console.log(action.payload)
            return {
                ...state
            }
        default: 
        return state;  
    }
}

export default restMenuReducer

