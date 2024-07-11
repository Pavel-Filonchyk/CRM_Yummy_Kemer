const initialState = {
    menu: [],
    dishes: {},

    postMenu: [],
    postDishes: [],
    blockId: '',

    redact: {},
    blockIdRedact: '',
    filterRedact: {},
    findDish: {}
}

const restMenuReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'POST_MENU':
            //console.log(action.payload)
            return {
                ...state,
                postMenu: action.payload
            }
        case 'GET_MENU_SUCCESS':
            const list = Object.keys(action.payload).map(key => ({...action.payload[key], blockId: key}))
            return {
                ...state,
                menu: list
            }
        case 'POST_DISHES':
            const filter = state.menu?.filter(item => item.nameDishRu === action.payload?.nameDishRu)[0]
            const newMenu = {
                image: filter?.image,
                nameDishTr: filter?.nameDishTr,
                nameDishRu: filter?.nameDishRu,
                nameDishEn: filter?.nameDishEn,
                dishes: [...filter?.dishes, action.payload.dishes]
            }
            return {
                ...state,
                postDishes: newMenu,
                blockId: filter?.blockId
            }
        case 'POST_DISHES_SUCCESS':
            console.log(action.payload)
            return {
                ...state,
                
            }
        case 'POST_DISHES_ERROR':
            console.log(action.payload)
            return {
                ...state,
                
            }
        case 'CHOOSE_DISHES':
            const dishes = state.menu?.find(item => item.blockId === action.payload)
            return {
                ...state,
                dishes
            }
        case 'ADD_TO_REDACT':
            const filterRedact = state.menu?.filter(item => item?.blockId === action.payload?.blockId)[0]
            const findDish = filterRedact?.dishes?.find(item => item?.id === action.payload?.id)
            return {
                ...state,
                redact: findDish,
                blockIdRedact: action.payload?.blockId,
                filterRedact,
                findDish
            }
        case 'PUT_REDACT':
            console.log(action.payload)
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
            const redactDishes = state.dishes?.filter(item => item.id !== action.payload.id)
            const findIndex = state.dishes?.findIndex(item => item.id === action.payload.id)
            redactDishes.splice(findIndex, 0, newDish)
            return {
                ...state,
                dishes: redactDishes
                }
        default: 
        return state;  
    }
}

export default restMenuReducer

