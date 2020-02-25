<template>
  <div class="catalog">
    <catalog-item
      v-for="product in PRODUCTS"
      :key="product.id"
      v-bind:product_data="product"
      @addToCart="addToCart"
    ></catalog-item>
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
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data)
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
    ...mapGetters(["PRODUCTS"])
  },
  props: {}
};
</script>
<style scoped lang="scss">
.catalog {
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

