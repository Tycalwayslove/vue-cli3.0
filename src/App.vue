<template>
    <div id="app">
        <p>hello world</p>
    </div>
</template>

<script>
import {test} from '@api';
export default {
  components: {
  },
  data() {
      return {
          
      }
  },
  mounted () {
    this.getData();
  },
  methods: {
      async getData(){
          this.$http.get('http://rap2api.taobao.org/app/mock/122101/user',{}).then(res=>{
              console.log(res);
          })
         
      }
  },
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
