import HomePage from '@/components/HomePage'
// import NewsPage from '@/components/NewsPage'
// import BooksPage from '@/components/BooksPage'
// import VideosPage from '@/components/VideosPage'
// import BookPage from '@/components/BookPage'
// import LoginPage from '@/components/LoginPage'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/', 
        redirect: {
            name: 'news'
        },
        name: 'home',
        component: HomePage
    },
    {
        path: '/news', 
        name: 'news',
        component: () =>import('@/components/NewsPage'), //NewsPage,
        meta: {
            title: '新闻'
        }
    },
    {
        path: '/books', 
        name: 'books',
        component: () =>import('@/components/BooksPage'), //BooksPage,
        // children: [
        //     {path: '/book/:id', name: 'book', component: BookPage}
        // ]
        meta: {
            title: '图书列表'
        }
    },
    {
        path: '/videos', 
        name : 'videos',
        component: () =>import('@/components/VideosPage'), //VideosPage,
        meta: {
            title: '视频'
        }
    },
    {
        path: '/book/:id', 
        name: 'book',
        components: {
            bookDetail: () =>import('@/components/BookPage'), //BookPage
        },
        meta: {
            title: '图书'
        }
    },
    {
        path: '/login', 
        name: 'login',
        component: () =>import('@/components/LoginPage'), //LoginPage,
        meta: {
            title: '登录'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    if(to.path === '/login'){
        return true;
    }
    else{
        if(sessionStorage.getItem("isAuth") === "true"){
            return true;
        }
        else{
            return {
                path: '/login',
                query: {redirect: to.fullPath}
            }
        }
    }
})

router.afterEach(to => {
    document.title = to.meta.title
})

export default router