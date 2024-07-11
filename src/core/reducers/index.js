import restMenuReducer from './restMenuReducer'
import chooseItemsReducer from './chooseItemsReducer'

export const rootReducer = () => {
    return { 
        restMenuReducer, 
        chooseItemsReducer
    }
}