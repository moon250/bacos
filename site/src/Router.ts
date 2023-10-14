import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./Components/Pages/HomePage.vue";
import NotFoundPage from "./Components/Pages/NotFoundPage.vue";
import GamePage from "./Components/Pages/GamePage.vue";

const routes = [
  {
    path: "/",
    name: "home_page",
    component: HomePage,
  },
  {
    path: "/game/:id",
    name: "game",
    component: GamePage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "e404",
    component: NotFoundPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
