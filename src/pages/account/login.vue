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
        <p>身份认证一般都是通过登陆接口向后台发送账号密码验证码之类的认证信息，然后后台返回一个token外加一些其他的数据。而一般都会和约定好请求接口时需要传递的消息头，其中token一般为必须项。这里仅简单的演示当获取到接口返回的数据后，如何使用localStorage 解合vuex来存储和移除数据。总的来说，应该还有token 失效的情况，请求拦截的时候可以设置判断条件。</p>
        <mt-button type="primary" @click="test">获取token</mt-button>
        <mt-button style="marginLeft:20px;" type="primary" @click="test2">移除token</mt-button>
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
            token:'我是token真好玩',
            login:1
        }
        this.$store.dispatch('SET_USER_INFO',user_msg);
        this.$toast("现在localStorage里面的数据是："+localStorage.getItem('user_info'));
    },
    test2(){
        this.$store.dispatch('SET_USER_INFO');
        this.$toast("现在localStorage里面的数据是："+localStorage.getItem('user_info'));
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