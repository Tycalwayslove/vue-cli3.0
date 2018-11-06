<!-- index頁面 -->
<template>
    <div>hello world</div>
</template>

<script>
import { getAppConfigs } from "@/api/index";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  computed: {},

  created() {
    this.loginBtn();
  },

  watch: {},

  mounted() {},

  methods: {
    async loginBtn() {
      const { code, data, error } = await getAppConfigs({});
      console.log(data);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>