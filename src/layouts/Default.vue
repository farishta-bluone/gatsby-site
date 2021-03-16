<template>
  <div class="default-page">
    <div style="min-height: 56px">
      <Header />
    </div>
    <Menu />
    <div class="mx-7 pl-12" @click="$store.state.miniMenu = true">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/drawers/LeftMenu";

export default {
  components: {
    Header,
    Menu,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.default-page {
  /* background: #F2F2F2 100% 100% no-repeat;  */
  height: 100vh;
}
</style>