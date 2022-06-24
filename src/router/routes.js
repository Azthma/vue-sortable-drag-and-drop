import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../page/sortable.vue");
const Sortable = () => import("../page/sortableTwo.vue");

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path     : "/",
            name     : "Home",
            component: Home,
        },
        {
            path     : "/test",
            name     : "Sortable",
            component: Sortable,
        }
    ],
    mode: "history",
});

export default router;