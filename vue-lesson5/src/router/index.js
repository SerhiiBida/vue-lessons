import {createWebHistory, createRouter} from "vue-router"
import {pinia} from "@/main.js";

import HomeView from "@/views/customer/HomeView.vue";
import AboutView from "@/views/customer/AboutView.vue";
import ShopView from "@/views/customer/ShopView.vue";
import ShopDetailView from "@/views/customer/ShopDetailView.vue";
import ProductView from "@/views/customer/ProductView.vue";
import RegistrationView from "@/views/customer/RegistrationView.vue";
import LoginView from "@/views/customer/LoginView.vue";
import NotFoundView from "@/views/customer/NotFoundView.vue";
import AdminHomeView from "@/views/admin/AdminHomeView.vue";
import {useUserStore} from "@/store/auth.js";

// 7. Налаштуйте маршрут так, щоб параметри шляху передавалися як props до компонента.
// 8. Реалізуйте "404 Not Found" маршрут і сторінку, яка відображається, коли користувач переходить на неіснуючий маршрут.
// 9. Треба щоб у проєкті було декілька сторінок котрі будуть:
//     - Сторінка яка доступна всім
//     - Сторінка доступна лише адміністратору
//     - Сторінка доступна лише авторизованим користувачам
//   Використовувати Vue Router hooks (beforeEach, afterEach) для перевірки автентифікації користувача
// і його ролі перед переходом на відповідний маршрут.
//   Якщо користувач спробує отримати доступ до сторінки, до якої у нього немає прав,
// він повинен бути перенаправлений на сторінку 404 Not Found Page.

// urls
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/registration",
        name: "registration",
        component: RegistrationView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/shop",
        children: [
            {
                path: "products",
                name: "shop",
                component: ShopView,
                meta: {
                    requiresAuth: true
                },
                children: [
                    {
                        path: "detail/:id",
                        name: "shop-detail",
                        component: ShopDetailView,
                        meta: {
                            requiresAuth: true
                        },
                        props: true
                    },
                ]
            },
            {
                path: "product/:id",
                name: "shop-product",
                component: ProductView,
                meta: {
                    requiresAuth: true
                },
            },
        ]
    },
    {
        path: "/admin",
        name: "admin-home",
        component: AdminHomeView,
        meta: {
            requiresAuth: true,
            isAdminPage: true
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundView,
    },
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

// 5. Додайте navigation guards для захисту маршрутів від неавторизованих користувачів.
// 6. Використовуйте мета-поля маршруту для передачі даних між маршрутами.
index.beforeEach((to, from) => {
    const userStore = useUserStore(pinia);

    // Не авторизован
    if (to.meta?.requiresAuth && !userStore.isLoggedIn) {
        return {
            name: "not-found"
        };
    }

    // Авторизован
    if ((to.name === "registration" || to.name === "login") && userStore.isLoggedIn) {
        return {
            name: "home"
        }
    }

    // Если не админ
    if (to.meta?.isAdminPage && !userStore.isAdmin) {
        return {
            name: "not-found"
        };
    }
});

export default index;