import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WorkoutDesc from '../views/WorkoutDesc.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/opis/:id', component: WorkoutDesc, props: true },
    { path: '/', component: Home }]
})

export default router