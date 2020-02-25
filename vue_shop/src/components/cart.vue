<template>
  <div class="cart">
    <cart-item
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    ></cart-item>
  </div>
</template>
<script>
import CartItem from "./cart-item";
import { mapActions } from "vuex";
export default {
  name: "cart",
  data() {
    return {};
  },
  components: {
    CartItem
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  },
  created() {},
  computed: {},
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
<style scoped>
</style>
