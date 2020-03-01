import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '../components/catalog'
import Cart from '../components/cart'
import Shipping from '../components/shipping'
import Buy from '../components/buy'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            props: true
        },
        {
            path: '/shipping',
            name: 'shipping',
            component: Shipping
        },
        {
            path: '/buy',
            name: 'buy',
            component: Buy
        }
    ]
})

export default router;
