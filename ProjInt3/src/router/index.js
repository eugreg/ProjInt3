import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PaginaFilme from "@/views/PaginaFilme.vue"
import FilmesView from "@/views/FilmesView.vue";
import SeriesView from "@/views/SeriesView.vue";
import AtorView from "@/views/AtorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes/:id",
      nome: "filmes",
      component: PaginaFilme,
      props: true,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
    },
    {
      path: "/series",
      name: "series",
      component: SeriesView,
    },
    {
      path: "/AtorView",
      name: "AtorView",
      component: AtorView,
    },
  ],
});

export default router;
