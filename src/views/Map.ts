import { onMounted, ref } from "vue";
import maplibregl from "maplibre-gl"; // or "const maplibregl = require('maplibre-gl');"
import * as monaco from "monaco-editor";
export default {
	setup() {
		let isSidePanel = ref(true);
		let activeMenu = ref("json");
		const toggleSidepanel = () => {
			console.log("toggleSidepanel");
			isSidePanel.value = !isSidePanel.value;
		};
		onMounted(() => {
			let mapEl: HTMLElement | any;
			mapEl = document.getElementById("map");
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

			const value = `{ 
				"type": "FeatureCollection",
				"features": []
			}
				`;

			// Hover on each property to see its docs!
			const myEditor = monaco.editor.create(
				document.getElementById("code-container"),
				{
					value,
					language: "json",
					automaticLayout: true,
					minimap: {
						enabled: false,
					},
					tabSize: 3,
				}
			);
		});
		return {
			isSidePanel,
			toggleSidepanel,
			activeMenu,
		};
	},
};
