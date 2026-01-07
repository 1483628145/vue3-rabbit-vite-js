import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 只需要导入 Element Plus 样式，Vite 会处理其按需引入
// import "element-plus/dist/index.css"; // 删除这一行

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
