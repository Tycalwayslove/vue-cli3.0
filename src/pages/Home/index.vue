/*
 * @Author: tangyouchao 
 * @Date: 2018-11-08 10:11:59 
 * @Last Modified by: tangyouchao
 * @Last Modified time: 2018-11-08 10:34:37
 */
<!-- 入口页面 -->
<template>
    <div class="home-page">
        <div class="account-box">
            <router-link to="/login">
                <mt-button type="primary">登陆</mt-button>
            </router-link>
            <router-link to="/register">
                <mt-button type="default">注册</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.account-box {
  margin-top: 20px;
  & button {
    margin-right: 20px;
  }
}
</style>