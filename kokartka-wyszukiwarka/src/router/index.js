import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WorkoutDesc from '../views/WorkoutDesc.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/opis',
        name: 'WorkoutDesc',
        component: WorkoutDesc,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/opis/:id', component: WorkoutDesc, props: true },
    { path: '/', component: Home }]
})

export default router