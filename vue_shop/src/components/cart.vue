<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <i class="fas fa-border-all"></i>
      <div class="cart__link_to_catalog">Catalog</div>
    </router-link>
    <h1 class="cart__title">Cart</h1>
    <p class="m-auto" v-if="!cart_data.length">Zero products</p>
    <cart-item
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @decrement="decrement(index)"
      @increment="increment(index)"
      @updateCart="updateCart(index, ...arguments)"
    ></cart-item>
    <div class="cart__total">
      <p class="total__name">Total:</p>
      <p>{{CART_TOTAL_COST}} {{CART[0] ? CART[0].currency : ''}}</p>
      <router-link
        :class="{'link-disabled': !CART.length, 'cart__link_to_shipping': true}"
        :to="{name: 'shipping'}"
      >
        <div class="cart__link_to_shipping__btn">Buy</div>
      </router-link>
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
      "EDIT_CART_TOTAL_COST",
      "UPDATE_CART_ITEM"
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
    updateCart(index, val) {
      this.UPDATE_CART_ITEM({
        index,
        val
      });
      this.EDIT_CART_TOTAL_COST();
    }
  },
  created() {},
  computed: {
    ...mapGetters(["CART_TOTAL_COST", "CART"])
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
  &__link_to_catalog {
    font-size: 10px;
    position: absolute;
    top: 37px;
    color: #353535;
  }
  &__link_to_shipping {
    margin: 15px;
    text-decoration: none;
    background: #dcd567;
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid black;
    text-transform: uppercase;
    color: #000;
    &__btn {
    }
  }
  svg {
    font-size: 39px;
    color: $green-bg;
  }
  .cart-item {
    margin: $margin * 2 auto;
  }
  .total__name {
    margin-right: $margin * 2;
  }
  .router-link-active {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 20px;
    top: 20px;
    text-decoration: none;
  }
}
</style>
