import { createRouter, createWebHistory } from "vue-router";

import back from "../Layouts/back.vue";
import main from "../Layouts/main.vue";
import Viewconten from "../Layouts/Viewconten.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: main },
      children: [],
    },
    {
      path: "/equipment",
      name: "equipment",
      meta: { layout: Viewconten },
      children: [
        {
          path: "/",
          name: "equipment",
          component: () => import("../Layouts/Viewconten.vue"),
        },
      ],
    },
    // -------------------------Back------------------------------------
    {
      path: "/back",
      name: "dashboard",
      meta: { layout: back },
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../views/menu-sidebar/home.vue"),
        },
        {
          path: "/storage",
          name: "storage",
          component: () => import("../views/menu-sidebar/storage.vue"),
        },
        {
          path: "/meeting_room",
          name: "meeting",
          component: () => import("../views/menu-sidebar/meeting.vue"),
        },
        {
          path: "/office",
          name: "office",
          component: () => import("../views/menu-sidebar/office.vue"),
        },
        {
          path: "/parking",
          name: "parking",
          component: () => import("../views/menu-sidebar/parking.vue"),
        },
        {
          path: "/restaurant",
          name: "restaurant",
          component: () => import("../views/menu-sidebar/restaurant.vue"),
        },
        {
          path: "/dining_place",
          name: "dining_place",
          component: () => import("../views/menu-sidebar/dining.vue"),
        },

        {
          path: "/category",
          name: "category",
          component: () => import("../views/menu-sidebar/category.vue"),
        },
      ],
    },
  ],
});

export default router;
