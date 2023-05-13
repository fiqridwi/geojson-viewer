import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faChevronCircleRight, faChevronCircleLeft);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
