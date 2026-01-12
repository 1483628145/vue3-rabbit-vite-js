import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一级路由
    {
      path: "/",
      name: "layout",
      component: () => import("@/views/Layout/index.vue"),
      children: [
        {
          path: "",
          name: "name",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "category/:id",
          name: "category",
          component: () => import("@/views/Category/index.vue"),
        },
        // 二级分类
        {
          path: "category/sub/:id",
          name: "sub",
          component: () => import("@/views/SubCategory/index.vue"),
        },
        // 商品详情区
        {
          path: "detail/:id",
          name: "detail",
          component: () => import("@/views/Detail/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/index.vue"),
    },
  ],
  // 路由行为配置
  /*
  可以实现当跳转回其他路由的时候自动将滚动条到顶部
  */
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
