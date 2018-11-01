<!-- 基础组件- header -->
<template>
<div class="header">
<p>我是页头</p>
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
     
    };
  },

  computed: {},

  watch: {},

  mounted(){
  
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.header{
    & p{
        text-align: center;
    }
}
</style>