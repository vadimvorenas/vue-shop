export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
    },
    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProsuctExists = false
            state.cart.map(function (item) {
                if (item.id == product.id) {
                    isProsuctExists = true
                    item.quantity++
                }
            })
            if (!isProsuctExists) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    EMPTY_CART: (state)=>{
        console.log('EMPTY_CART')
        state.cart = []
    },
    INCREMENT: (state, index) => {
        let quantity_tmp = checkQuantity(state.cart[index].quantity + 1)
        state.cart[index].quantity = quantity_tmp
    },
    DECREMENT: (state, index) => {
        let quantity_tmp = checkQuantity(state.cart[index].quantity - 1)
        state.cart[index].quantity = quantity_tmp
    },
    UPDATE_CART: (state, options) => {
        console.log(options)
        state.cart[options.index].quantity = checkQuantity(options.val)
    },
    SUM_CART_COST: (state) => {
        let result = [];
        if (state.cart.length) {
            for (let item of state.cart) {
                result.push(parseFloat(item.price) * item.quantity);
            }
            result = result.reduce(function (sum, el) {
                return sum + el;
            });
            state.cart_total_cost = result;
        } else {
            state.cart_total_cost = 0;
        }
    },
    ADD_SHIPPING: (state, variable) => {
        state.shipping.push(variable)
    }
}

function checkQuantity(quantity) {
    if (quantity > 50) {
        return 50
    } else if (quantity < 1) {
        return 1
    } else {
        return parseFloat(quantity)
    }
}
