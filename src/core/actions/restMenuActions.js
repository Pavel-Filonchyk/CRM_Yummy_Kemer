export const getMenu = (data) => {
    return {
        type: 'GET_MENU',
        payload: data 
    } 
}
export const GET_MENU = 'GET_MENU'

export const getMenuSuccess = (data) => {
    return {
        type: 'GET_MENU_SUCCESS',
        payload: data 
    } 
}
export const getMenuError = (data) => {
    return {
        type: 'GET_MENU_ERROR',
        payload: data 
    } 
}

// redact
export const addToRedact = (data) => {
    return {
        type: 'ADD_TO_REDACT',
        payload: data 
    } 
}
export const putRedact = (data) => {
    return {
        type: 'PUT_REDACT',
        payload: data 
    } 
}
export const PUT_REDACT = 'PUT_REDACT'

export const putRedactSuccess = (data) => {
    return {
        type: 'PUT_REDACT_SUCCESS',
        payload: data 
    } 
}
export const putRedactError = (data) => {
    return {
        type: 'PUT_REDACT_ERROR',
        payload: data 
    } 
}
export const postRedact = (data) => {
    return {
        type: 'POST_REDACT',
        payload: data 
    } 
}
export const POST_REDACT = 'POST_REDACT'

export const postRedactSuccess = (data) => {
    return {
        type: 'POST_REDACT_SUCCESS',
        payload: data 
    } 
}
export const postRedactError = (data) => {
    return {
        type: 'POST_REDACT_ERROR',
        payload: data 
    } 
}

export const deleteRedact = (data) => {
    return {
        type: 'DELETE_REDACT',
        payload: data 
    } 
}
export const DELETE_REDACT = 'DELETE_REDACT'

export const deleteRedactSuccess = (data) => {
    return {
        type: 'DELETE_REDACT_SUCCESS',
        payload: data 
    } 
}
export const deleteRedactError = (data) => {
    return {
        type: 'DELETE_REDACT_ERROR',
        payload: data 
    } 
}