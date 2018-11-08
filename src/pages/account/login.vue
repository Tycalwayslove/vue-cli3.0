/*
 * @Author: tangyouchao 
 * @email: 1186446929@qq.com 
 * @Github: https://github.com/Tycalwayslove 
 * @Date: 2018-11-08 21:45:33 
 * @Last Modified by: tangyouchao
 * @Last Modified time: 2018-11-08 22:35:13
 */
<!-- 登陆页面 -->
<template>
    <div class="login-page">
        <p>一般登陆的流程都是输入账号密码然后后台返回一个token。这里就不输账号密码，假定咱们点击页面上的"获取token"按钮，即可获得端口返回的token和一些用户信息</p>
        <mt-button type="primary" @click="test">获取token</mt-button>
        <mt-button type="primary" @click="test2">移除token</mt-button>
    </div>
</template>

<script>
// import {mapActions} from 'vuex';
// import {mapMutations} from 'vuex';
    export default {
components: {},
data(){
    return {	};
},
methods:{
    // ...mapMutations("SET_USER_INFO"),
    test(){
        const user_msg = {
            token:'6255ed21e29a199098726781362a3c5f',
            login:1
        }
        this.$store.dispatch('SET_USER_INFO',user_msg);
    },
    test2(){
        this.$store.dispatch('SET_USER_INFO');
    }
}
};
</script>

<style lang="scss" scoped>
p{
    margin:80px auto 20px;
    padding:20px 40px 0;
    text-align: left;
}

</style>