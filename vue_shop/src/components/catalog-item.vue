<template>
    <div class="catalog-item">
        <img class="catalog-item__image" :src="product_data.img" alt="img">
        <p class="catalog-item__name">{{product_data.name}}</p>
        <p class="catalog-item__price">Price: {{product_data.price}}{{product_data.currency}}</p>

        <button
        class="catalog-item__add_to_cart_btn btn"
        @click="addToCart"
        >Add to cart
        </button>
    </div>
</template>
<script>

export default{
    name: "catalog-item",
    data(){
        return{

        }
    },
    methods:{
        addToCart(){
            this.$emit('addToCart', this.product_data)
        }
    },
    created(){

    },
    mounted(){

    },
    computed:{},
    props:{
        product_data: {
            type: Object,
            default(){
                return{}
            }
        }
    }
}
</script>
<style scoped lang="scss">
.catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
}
</style>
