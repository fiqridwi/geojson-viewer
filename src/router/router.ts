import { createRouter, createWebHistory, RouterView } from "vue-router";
import Map from "../views/Map.vue";

const routes = [
	{
		path: "/",
		name: "Map",
		component: Map,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
