// https://online-store-f02de-default-rtdb.europe-west1.firebasedatabase.app/

export const MENU_URL = 'https://online-store-19e86-default-rtdb.europe-west1.firebasedatabase.app/menu.json'
export const menuUrl = (index) => {
    return `https://online-store-19e86-default-rtdb.europe-west1.firebasedatabase.app/menu/${index}.json?auth=${token}`
}
export const putDishes = (index) => {
    return `https://online-store-19e86-default-rtdb.europe-west1.firebasedatabase.app/menu/${index}/dishes.json?auth=${token}`
}

