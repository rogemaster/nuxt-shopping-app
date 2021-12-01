import { fetchCartItems } from "../api"

// es6+ 문법 각 store관리 별로 상수화 시킴
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
    cartItems: [],
})

export const mutations = {
    addCartItem(state, cartItem) {
        const newCartItem = {
            ...cartItem,
            imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
        }
        state.cartItems.push(newCartItem)
    },
    setCartItems(state, cartItems) {
        state.cartItems = cartItems
    }
}

export const actions = {
    async [FETCH_CART_ITEMS]({ commit }) {
        const { data } = await fetchCartItems();
        commit('setCartItems', data.map(item => ({
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`
        })));
    },

    // async nuxtServerInit(storeContext, nuxtContext) {
    //     await storeContext.dispatch(FETCH_CART_ITEMS)
    //     // const { data } = await fetchCartItems();
    //     // storeContext.commit('setCartItems', data.map(item => ({
    //     //     ...item,
    //     //     imageUrl: `${item.imageUrl}?random=${Math.random()}`
    //     // })));
    // }
}