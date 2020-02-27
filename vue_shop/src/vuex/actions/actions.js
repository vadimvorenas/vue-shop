import axios from "axios"

export default {
    GET_PRODUCTS_FROM_API({ commit }) {
        return axios('https://5e53de4c31b9970014cf7f2f.mockapi.io/products', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            })
            .catch((error) => {
                console.log(error)
                commit('SET_PRODUCTS_TO_STATE', [
                    {
                        id: 1,
                        name: 'Name',
                        price: getRandomInt(0, 50),
                        article: 'Article',
                        quantity: 1,
                        img: 'https://picsum.photos/200?random=1',
                        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit consequatur nisi perspiciatis aliquam odit a, temporibus molestiae similique? Facere corporis, incidunt deleniti quasi, quod architecto dignissimos deserunt iusto possimus distinctio eveniet commodi delectus temporibus asperiores ad facilis aliquam! Minima.'

                    },
                    {
                        id: 2,
                        name: 'Name',
                        price: getRandomInt(0, 50),
                        article: 'Article',
                        quantity: 1,
                        img: 'https://picsum.photos/200?random=2',
                        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit consequatur nisi perspiciatis aliquam odit a, temporibus molestiae similique? Facere corporis, incidunt deleniti quasi, quod architecto dignissimos deserunt iusto possimus distinctio eveniet commodi delectus temporibus asperiores ad facilis aliquam! Minima.'

                    },
                    {
                        id: 3,
                        name: 'Name',
                        price: getRandomInt(0, 50),
                        article: 'Article',
                        quantity: 1,
                        img: 'https://picsum.photos/200?random=3',
                        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit consequatur nisi perspiciatis aliquam odit a, temporibus molestiae similique? Facere corporis, incidunt deleniti quasi, quod architecto dignissimos deserunt iusto possimus distinctio eveniet commodi delectus temporibus asperiores ad facilis aliquam! Minima.'

                    },
                ])
                return error
            })
    },
    ADD_TO_CART({ commit }, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({ commit }, index) {
        commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({ commit }, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
        commit('DECREMENT', index)
    },
    UPDATE_CART_ITEM({ commit }, index, val) {
        commit('UPDATE_CART', index, val)
    },
    EDIT_CART_TOTAL_COST({ commit }) {
        commit('SUM_CART_COST')
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
