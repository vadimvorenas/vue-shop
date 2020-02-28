<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="cart_item_data.img" alt="img" />
    <div class="cart-item__info">
      <p class="cart-item__title">{{cart_item_data.name}}</p>
      <p class="cart-item__description">{{cart_item_data.description}}</p>
      <p class="cart-item__article">{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item__quantity">
      <span class="quantity__btn cart-item__quantity_child" @click="decrementItem">-</span>
      <input
        class="cart-item__quantity__input cart-item__quantity_child"
        type="text"
        :value="cart_item_data.quantity"
        @input="updateQuantity"
      />
      <span class="quantity__btn cart-item__quantity_child" @click="incrementItem">+</span>
      <p
        class="cart-item__quantity__price cart-item__quantity_child nowrap"
      >{{cart_item_data.price}} {{cart_item_data.currency}}</p>
      <button class="cart-item__quantity__delete_btn" @click="deleteFromCart">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
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
    deleteFromCart() {
      this.cart_item_data.quantity = 1;
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    updateQuantity(e) {
      this.$emit("updateCart", e.target.value);
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
  watch: {}
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
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  &__image {
    max-width: 130px;
    border-radius: 5px;
    box-shadow: 1px 1px 6px gray;
    margin: auto 15px;
    width: 100%;
  }
  &__title {
    font-size: calc(14px + 0.5vw);
    font-weight: 600;
  }
  &__description {
    text-align: justify;
    padding: $padding * 2;
  }
  &__article {
    text-align: left;
    padding: 8px 16px;
    color: #808080c7;
  }

  &__quantity {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 250px;
    max-height: 30px;
    &__input {
      border: 1px solid #d2d2d2;
      border-radius: 4px;
      width: 23px;
      text-align: center;
    }
    &_child {
      height: 100%;
      display: block;
      padding: $padding;
      font-size: 18px;
      margin: auto;
      max-height: 20px;
    }
    &__delete_btn {
      margin: auto;
      margin-top: 5px;
    }
  }

  .quantity__btn {
    cursor: pointer;
    user-select: none;
    &:active {
      box-shadow: 0px 0px 10px gray;
      border-radius: 5px;
    }
  }
}
</style>
