<template>
  <div>
      <h3 v-show="info">{{ info }}</h3>
      <p>用户名: <input type="text" v-model.trim="usename"></p>
      <p>密码: <input type="text" v-model.trim="password"></p>
      <p><button @click="login">登录</button></p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            usename: '',
            password: '',
            info: ''
        }
    },
    methods: {
        login(){
            if("lisi" === this.usename && "1234" === this.password){
                sessionStorage.setItem("isAuth", true);
                let redirect = this.$route.query.redirect;
                if (redirect) {                     //如果存在查询参数
                    this.$router.replace(redirect);  //则跳转至进入登录页面前的路由
                }else{
                    this.$router.replace("/");       //否则跳转至首页
                }
            }
            else{
                sessionStorage.setItem("isAuth", false);
                this.usename = '';
                this.password = '';
                this.info = '用户名或密码错误, 请重新登录'
            }          
        }
    }
}
</script>

<style>

</style>