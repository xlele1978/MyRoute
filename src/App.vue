<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>
    <!-- <router-link to="/">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/books">图书</router-link>
    <router-link to="/videos">视频</router-link> -->
    <!-- <router-link to="/book/1">图书1</router-link>
    <router-link to="/book/2">图书2</router-link> -->
    <router-link :to="{name: 'home'}">首页</router-link>
    <router-link :to="{name: 'news'}">新闻</router-link>
    <router-link :to="{name: 'books'}">图书</router-link>
    <router-link :to="{name: 'videos'}">视频</router-link>
    <router-link :to="{name: 'login'}">登录</router-link>
  </p>
  <router-view></router-view>
  <router-view name="bookDetail"></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
