import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from 'element-plus'
import router from "./router/index";
import App from "./App.vue";
import './style.css'

const app = createApp(App);

app.use(router).use(createPinia()).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount("#app");
