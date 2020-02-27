<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_cart">Catalog</div>
    </router-link>
    <h1 class="cart__title">Cart</h1>
    <p v-if="!cart_data.length">Zero products</p>
    <cart-item
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @decrement="decrement(index)"
      @increment="increment(index)"
      @updateCart="updateCart(index)"
    ></cart-item>
    <div class="cart__total">
      <p class="total__name">Total:</p>
      <p>{{CART_TOTAL_COST}} $</p>
    </div>
  </div>
</template>
<script>
import CartItem from "./cart-item";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "cart",
  data() {
    return {};
  },
  components: {
    CartItem
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
      "EDIT_CART_TOTAL_COST"
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
      this.EDIT_CART_TOTAL_COST();
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
      this.EDIT_CART_TOTAL_COST();
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
      this.EDIT_CART_TOTAL_COST();
    },
    updateCart(index, val){
      console.log(index, val, arguments)
    }
  },
  created() {},
  computed: {
    ...mapGetters(["CART_TOTAL_COST"])
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped lang="scss">
.cart {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background: $green-bg;
    color: white;
    font-size: 20px;
  }
  &__title {
    display: block;
    width: 100%;
  }
  .cart-item {
    margin: $margin*2 auto;
  }
  .total__name {
    margin-right: $margin * 2;
  }
}
</style>
