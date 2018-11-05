<!-- base组件 - navbar -->
<template>
    <div class="footer">
        <mt-tabbar v-model="selected">
            <mt-tab-item id="1">
                <i slot="icon"
                    class="iconfont icon-home_checked"></i>
                外卖
            </mt-tab-item>
            <mt-tab-item id="2">
                <i slot="icon"
                    class="iconfont icon-home_checked"></i>
                订单
            </mt-tab-item>
            <mt-tab-item id="3">
                <i slot="icon"
                    class="iconfont icon-home_checked"></i>
                发现
            </mt-tab-item>
            <mt-tab-item id="4">
                <i slot="icon"
                    class="iconfont icon-home_checked"></i>
                我的
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      selected: "1"
    };
  },

  computed: {},

  created() {
    this.selected = "1";
  },

  watch: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>