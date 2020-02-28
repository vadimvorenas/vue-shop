import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '../components/catalog'
import Cart from '../components/cart'
import Shipping from '../components/shipping'

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
        }
    ]
})

export default router;
