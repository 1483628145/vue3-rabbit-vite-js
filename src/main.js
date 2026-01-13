import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

import { lazyImagPlugin } from "@/directive/index";

// components 下面全部注册成全局组件
import GlobalComponents from "@/components";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(lazyImagPlugin);

createApp(App).use(GlobalComponents).mount("#app");

app.mount("#app");
