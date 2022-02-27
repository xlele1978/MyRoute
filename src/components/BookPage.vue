<template>
  <!-- <div>图书ID: {{ $route.params.id }}</div> -->
  <div>
      <p>图书ID: {{ book.id }}</p>
      <p>书名: {{ book.title }}</p>
      <p>说明: {{ book.desc }}</p>
  </div>
</template>

<script>
import books from '@/data/books'
export default {
    data() {
        return {
            book: {}
        }
    },
    // created(){
    //     this.book = books.find(item => item.id == this.$route.params.id)
    // },
    // watch: {
    //     '$route'(to){
    //         this.book = books.find(item => item.id == to.params.id)
    //     }
    // }

    // watch: {
    //     '$route': {
    //         handler(to){
    //             this.book = books.find((item) => item.id == to.params.id)
    //         },
    //         immediate: true        
    //     }
    // }

    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.book = books.find(item => item.id == to.params.id)
        })
    },
    beforeRouteUpdate(to){
        this.book = books.find((item) => item.id == to.params.id)
    }
}
</script>

<style>

</style>