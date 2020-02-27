<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "v-main-wrapper",
  props: {},
  data() {
    return {
      title: "Main wrapper"
    };
  },
  methods: {},
  watch: {}
};
</script>


<style>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  min-width: 300px;
  margin: 0 auto;
}
@media screen and (max-width: 992px) {
  .v-main-wrapper {
    max-width: 960px;
  }
}
@media screen and (max-width: 768px) {
  .v-main-wrapper {
    max-width: 720px;
  }
}
@media screen and (max-width: 576px) {
  .v-main-wrapper {
    max-width: 540px;
  }
}
@media screen and (max-width: 575px) {
  .v-main-wrapper {
    max-width: 100%;
  }
}
</style>
