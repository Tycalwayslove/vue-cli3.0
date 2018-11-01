<template>
    <div id="app">
        <div class="main">
            <base-header></base-header>
            <div class="content">
                <router-view />
            </div>
        </div>
        <base-nav-bar></base-nav-bar>
    </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseNavBar from "@/components/BaseNavBar";

export default {
  components: {
    BaseHeader,
    BaseNavBar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
