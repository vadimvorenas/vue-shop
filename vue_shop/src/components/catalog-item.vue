<template>
  <div class="catalog-item">
    <v-sheet class="catalog-item__skeleton">
      <v-skeleton-loader
        :loading="loading"
        class="m-auto image"
        width="128"
        height="128"
        type="image"
      >
        <img class="catalog-item__image" :src="product_data.img" />
      </v-skeleton-loader>
      <v-skeleton-loader
        :loading="loading"
        width="50"
        height="20"
        class="m-auto skeleton_p"
        type="image"
      >
        <p class="catalog-item__name">{{product_data.name}}</p>
      </v-skeleton-loader>
      <v-skeleton-loader
        :loading="loading"
        width="50"
        height="20"
        class="m-auto skeleton_p"
        type="image"
      >
        <p class="catalog-item__price">Price: {{product_data.price}}{{product_data.currency}}</p>
      </v-skeleton-loader>
    </v-sheet>

    <button class="catalog-item__add_to_cart_btn btn" @click="addToCart">Add to cart</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "catalog-item",
  data() {
    return {
      loading: true
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    }
  },
  components: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.loading = this.PRODUCTS.length ? false : true;
    }, 1000);
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin: auto $margin * 2 $margin * 2 $margin * 2;
  &__skeleton {
    div {
      margin: $margin * 2 auto;
    }
    .title {
      color: white;
      div {
        height: 20px;
      }
    }
  }
  img {
    width: 128px;
    height: 128px;
  }
}
</style>
