// Vue imports.
import { createRouter, createWebHistory } from 'vue-router'
import { START_LOCATION } from 'vue-router';

// Import state.
import { state } from '../stores/store.js'

// Import views.
import HomeView from '../components/HomeView.vue'
import Page2View from '../components/Page2View.vue'
import NotFoundView from '../components/NotFoundView.vue'


// Define routes.
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home'
        },
    },  
    { 
        path: '/page2',
        name: 'page2',
        component: Page2View,
        meta: {
            title: 'Page2'
        }
    },
    {
        path: '/:catchAll(.*)*',
        name: '404',
        component: NotFoundView,
        meta: {
            title: '404',
        }
    }
]

// Define router.
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// 1. Determine the title for the routes.
// 2. Move the screen to the top every time a new route is called.
// 3. Determine if there was just a page reload.
router.beforeEach(async (to, from, next) => {
    let title = to.meta.title

    document.title = `${title} | Helping Web`

    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (from === START_LOCATION) {
        state.justReloaded = true
    } else {
        state.justReloaded = false
    }

    next()
})

export default router