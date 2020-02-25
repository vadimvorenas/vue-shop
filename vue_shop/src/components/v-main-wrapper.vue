<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <catalog></catalog>
    <cart
    v-if="CART.length"
    :cart_data='CART'
    ></cart>
  </div>
</template>

<script>
import Catalog from "./catalog";
import Cart from "./cart";
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  components: {
    Catalog,
    Cart
  },
  props: {},
  data() {
    return {
      title: "Main wrapper"
    };
  },
  computed: {
    ...mapGetters(["CART"])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello main wrapper alive");
  }
};
</script>


<style>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
