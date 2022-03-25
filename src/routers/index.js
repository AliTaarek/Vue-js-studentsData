import { createRouter, createWebHistory } from 'vue-router'
import studentcomponent from "../components/studentcomponent.vue"
import app from "../App.vue"
const routes = [
    {path:'/',component:app},
    {path:'/student/:id',component:studentcomponent}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
