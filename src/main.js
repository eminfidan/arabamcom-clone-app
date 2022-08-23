import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "./client/resources/request";

const app = createApp(App);

app.use(router);
app.config.globalProperties.$axios = axios;
app.mount("#app");
