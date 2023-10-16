import { createWebHistory, createRouter } from "vue-router";
import App from '../App.vue';
import Index from '../components/Index.vue'
import Guide from '../components/Guide.vue'
import Board from '../components/Board.vue'
import BoardDetail from '../components/BoardDetail.vue'

const routes = [ 
    {
        path: '/',
        name: Index,
        component: Index
    },
    {
        path: '/guide',
        name: Guide,
        component: Guide
    },
    {
        path: '/board',
        name: Board,
        component: Board
    },
    {
        path: '/boardDetail',
        name: BoardDetail,
        component: BoardDetail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;