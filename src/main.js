import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "./client/resources/request";
import "./assets/styles/styles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMapPin,
  faBars,
  faPhone,
  faAward,
  faPeopleGroup,
  faMoneyBills,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import filters from "./helpers/filters";

library.add(
  faMapPin,
  faBars,
  faPhone,
  faAward,
  faPeopleGroup,
  faMoneyBills,
  faSort
);

const app = createApp(App);

app.use(router);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$filters = filters;
app.mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
