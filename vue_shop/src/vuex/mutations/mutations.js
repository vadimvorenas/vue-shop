export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
    },
    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProsuctExists = false
            state.cart.map(function (item) {
                console.log(item)
                if (item.id == product.id) {
                    console.log(item)
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
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    },
    UPDATE_CART: (state, index, val) =>{
        state.cart[index] = val
    },
    SUM_CART_COST: (state)=> {
        let result = [];
        console.log('SUM CART COST')
        if (state.cart.length) {
          for (let item of state.cart) {
            result.push(parseFloat(item.price) * item.quantity);
          }
          result = result.reduce(function(sum, el) {
            return sum + el;
          });
          state.cart_total_cost = result;
        } else {
            state.cart_total_cost = 0;
        }
    }
}
