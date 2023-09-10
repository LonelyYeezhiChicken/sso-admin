import { createApp } from "vue";
import { createPinia } from "pinia";
// import './style.css'
import "element-plus/theme-chalk/dark/css-vars.css";
import "./css-vars.css";
import ElementPlus from "element-plus";
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);

app.use(router).use(createPinia()).use(ElementPlus, { size: "small", zIndex: 3000 }).mount("#app");
