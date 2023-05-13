import { onMounted, ref } from "vue";
import maplibregl from "maplibre-gl"; // or "const maplibregl = require('maplibre-gl');"

export default {
	setup() {
		let isSidePanel = ref(true);
		let activeMenu = ref("json");
		const toggleSidepanel = () => {
			console.log("toggleSidepanel");
			isSidePanel.value =
				!isSidePanel.value;
		};
		onMounted(() => {
			let mapEl: HTMLElement | any;
			mapEl =
				document.getElementById("map");
			const map = new maplibregl.Map({
				container: mapEl,
				style: "https://api.maptiler.com/maps/basic-v2/style.json?key=aJ1aWBQyxkpsVjqWZPpk",
				center: [106.845599, -6.21462],
				zoom: 10,
			});
			// Map Controls
			map.addControl(
				new maplibregl.NavigationControl({
					visualizePitch: true,
					showZoom: true,
					showCompass: true,
				})
			);
		});
		return {
			isSidePanel,
			toggleSidepanel,
			activeMenu,
		};
	},
};
