const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if(favorites) return JSON.parse(favorites)
        return []
}

const addFavorite = (phone) => {
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id)
    if(isExist){
        alert('already exist')
    }else{
        favorites.push(phone)
    }
    localStorage.setItem('favorites',JSON.stringify(favorites))
}
const removeFavorite = (id) => {
    const favorites = getFavorites();
    const remainingFavorite = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorite))
}
// cart

const getCart = () => {
    const cart = localStorage.getItem('cart');
    if(cart) return JSON.parse(cart)
        return []
}

const addCart = (phone) => {
    const cart = getCart();
    const isExist = cart.find(p => p.id === phone.id)
    if(isExist){
        alert('already exist')
    }else{
        cart.push(phone)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
// const removeCart = (id) => {
//     const cart = getCart();
//     const remainingCart = cart.filter(phone => phone.id !== id)
//     localStorage.setItem('cart', JSON.stringify(remainingCart))
// }
export {addFavorite, getFavorites , removeFavorite, addCart, getCart, }