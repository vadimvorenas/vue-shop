<template>
  <div class="catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog__link_to_cart">
        <i class="fas fa-shopping-cart"></i>
        <p class="catalog__quantity">{{CART.length}}</p>
        <p class="catalog__total_price">{{CART_TOTAL_COST}} {{CART[0] ? CART[0].currency : ''}}</p>
      </div>
    </router-link>
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        v-bind:product_data="product"
        @addToCart="addToCart"
      ></catalog-item>
    </div>
  </div>
</template>
<script>
import CatalogItem from "./catalog-item";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "catalog",
  components: {
    CatalogItem
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART",
      "EDIT_CART_TOTAL_COST"
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
      this.EDIT_CART_TOTAL_COST();
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
      .then(result => {
        if (result.data) {
          console.log("data load");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  created() {},
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "CART_TOTAL_COST"])
  },
  props: {},
  watch: {
    CART: function() {
      this.EDIT_CART_TOTAL_COST();
    }
  }
};
</script>
<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 0.8 $padding * 2;
    .fa-shopping-cart {
      color: #595d75;
      font-size: 28px;
    }
    p {
      margin: auto;
      padding: $padding * 0.8;
      box-sizing: content-box;
    }
  }
  &__quantity {
    display: inline-block;
    font-size: 11px;
    left: -9px;
    position: relative;
    color: white;
    border-radius: 50%;
    background: #ff0505;
    width: 6px;
    height: 6px;
    text-align: center;
    line-height: 7px;
    top: -16px;
    font-weight: bold;
  }
  &__total_price {
    color: #1905ff;
    font-size: 12px;
    position: relative;
    display: block;
    text-align: center;
    top: -25px;
    left: 25px;
    font-weight: bold;
  }
}
</style>

