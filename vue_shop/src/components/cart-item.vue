<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="cart_item_data.img" alt="img" />
    <div class="cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item_quantity">
        {{cart_item_data.quantity}}
        </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>
<script>
export default {
  name: "cart-item",
  components: {},
  data() {
    return {};
  },
  methods: {
      deleteFromCart(){
          this.$emit('deleteFromCart')
      }
  },
  created() {},
  computed: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  }
};
</script>
<style scoped lang=scss>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    max-width: 50px;
  }
}
</style>
