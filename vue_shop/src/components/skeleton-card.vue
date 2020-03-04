<template>
  <div class="skeleton-card">
    <v-sheet class="catalog-item__skeleton" v-if="loading.length?false: true">
      <v-skeleton-loader
        :loading="true"
        class="m-auto image"
        width="60%"
        height="calc(10px + 7vw)"
        type="image"
      >
        <img class="catalog-item__image" />
      </v-skeleton-loader>
      <v-skeleton-loader
        :loading="true"
        width="50"
        height="20"
        class="m-auto skeleton_p"
        type="image"
      >
        <p class="catalog-item__name">fasfaf</p>
      </v-skeleton-loader>
      <v-skeleton-loader
        :loading="true"
        width="50"
        height="20"
        class="m-auto skeleton_p"
        type="image"
      >
        <p class="catalog-item__price">Price:</p>
      </v-skeleton-loader>
      <v-skeleton-loader
        :loading="true"
        width="100"
        height="25"
        class="m-auto skeleton_p"
        type="image"
      ></v-skeleton-loader>
    </v-sheet>

  </div>
</template>
<script>
export default {
  name: "skeleton-card",
  components: {
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {},
  props: {
    loading: {
      type: [Object, Array],
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.skeleton-card {
  flex-basis: 17%;
  padding: $padding * 2;
  margin: $margin * 2 auto;
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
</style>
