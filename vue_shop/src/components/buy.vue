<template>
  <div class="buy">
    <router-link :to="{name: 'catalog'}">
      <i class="fas fa-border-all"></i>
      <div class="buy__link_to_catalog">Catalog</div>
    </router-link>
    <h1>Thank you for your purchase</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "buy",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["SET_SHIPPING"])
  },
  created() {},
  computed: {
    ...mapGetters(["SHIPPING", "CART_TOTAL_COST"])
  },
  props: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.buy {
  &__link_to_catalog {
    font-size: 10px;
    position: absolute;
    top: 37px;
    color: #353535;
  }

  svg {
    font-size: 39px;
    color: $green-bg;
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
