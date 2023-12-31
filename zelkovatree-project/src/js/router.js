import { createWebHistory, createRouter } from "vue-router";
import App from '../App.vue';
import Index from '../components/Index.vue'
import Guide from '../components/Guide.vue'
import Board from '../components/Board.vue'
import BoardDetail from '../components/BoardDetail.vue'
import BoardWrite from '../components/BoardWrite.vue'
import Gallery from '../components/Gallery.vue'
import Update from '../components/Update.vue'

const routes = [ 
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/guide',
        name: 'Guide',
        component: Guide
    },
    {
        path: '/board',
        name: 'Board',
        component: Board
    },
    {
        path: '/boardDetail',
        name: 'BoardDetail',
        component: BoardDetail
    },
    {
        path: '/boardWrite',
        name: 'BoardWrite',
        component: BoardWrite
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/update',
        name: 'Update',
        component: Update
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;