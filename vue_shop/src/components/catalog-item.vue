<template>
  <div class="catalog-item">
    <v-card class="mx-auto" max-width="320">
      <v-skeleton-loader
        :loading="loading"
        height="calc(10px + 7vw)"
        width="60%"
        max-width="300px"
        class="m-auto image"
        type="image"
      >
        <figure v-lazyload>
          <img class="m-auto" :data-url="product_data.img" />
        </figure>
      </v-skeleton-loader>

      <v-card-subtitle class="pb-0">{{product_data.name}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Price: {{product_data.price}}{{product_data.currency}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="rgba(8, 0, 255, 0.5)" class="m-auto" @click="addToCart" text>Add to cart</v-btn>
      </v-card-actions>
    </v-card>
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
  flex-basis: 17%;
  padding: $padding * 2;
  margin: $margin * 2 auto;
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
  figure {
    width: 60%;
    height: auto;
    min-height: calc(10px + 7vw);
    border-radius: 5px;
    margin: auto;
    padding: 5px;
    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
}
</style>
