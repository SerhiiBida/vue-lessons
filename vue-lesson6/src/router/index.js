import {createRouter, createWebHistory} from "vue-router"
import {useUserStore} from "@/stores/auth.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/HomeView.vue")
        },
        {
            path: "/basket",
            name: "basket",
            component: () => import("@/views/BasketView.vue"),
            meta: {
                requiresAuth: true
            }
        }
    ]
});

// 11. Використайте store для отримання данних про користувача у файлах Router,
// наприклад для переадресаціі неавторизованних користувачів
router.beforeEach((to, from) => {
    const userStore = useUserStore();

    if (to.meta?.requiresAuth && !userStore.isLoggedIn) {
        return {
            name: "home"
        }
    }
});

export default router
