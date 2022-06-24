import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../page/sortable.vue");

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path     : "/",
            name     : "Home",
            component: Home,
        }
    ],
    mode: "history",
});

export default router;