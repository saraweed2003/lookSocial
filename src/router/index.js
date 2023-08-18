import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/Layouts/Main.vue";
import ViewConten from "@/Layouts/Viewconten.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Look-social",
      name: "HomeView",
      meta: { layout: HomeView },
      children: [],
    },
    {
      path: "/equipment",
      name: "equipment",
      meta: { layout: ViewConten },
      children: [
        {
          path: "/equipment",
          name: "equipment",
          component: () =>
            import("@/components/Viewconten/HeaderEquipment.vue"),
        },
      ],
    },
  ],
});

export default router;
