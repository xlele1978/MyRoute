<template>
  <div>
    <h3>图书列表</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <!-- <router-link :to="{name: 'book', params:{id: book.id}}">{{ book.title }}</router-link> -->
        <a href="javascript:;"
        @click="goRoute({name: 'book', params:{id: book.id}})">  
            {{ book.title }}
        </a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import books from '@/data/books'
export default {
  data() {
    return {
      books
    }
  },
  methods: {
    goRoute(location){
      if(location.params.id != this.$route.params.id)
      this.$router.push(location)
    }
  }
}
</script>

<style>

</style>