<!-- 基础组件- header -->
<template>
<mt-header fixed title="我是页头">
    <router-link to="/" slot="left">
         <mt-button icon="back" @click="back"></mt-button>
    </router-link>
</mt-header>
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

  methods: {
      back(){
          console.log('back');
      }
  }
}

</script>
<style lang='scss' scoped>
.header{
    & p{
        text-align: center;
    }
}
</style>