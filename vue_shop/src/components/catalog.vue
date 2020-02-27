<template>
  <div class="catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog__link_to_cart">
        <p>Cart: {{CART.length}}</p>
        <p class="catalog__total_price">Price: {{CART_TOTAL_COST}} $</p>
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
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART", "EDIT_CART_TOTAL_COST"]),
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
    ...mapGetters([
      "PRODUCTS",
      "CART",
      "CART_TOTAL_COST"
    ])
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
    border: solid 1px gray;
    p {
      margin: auto;
      padding: $padding * 0.8;
    }
  }
}
</style>

