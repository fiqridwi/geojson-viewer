import maplibregl from "maplibre-gl"; // or "const maplibregl = require('maplibre-gl');"
import * as monaco from "monaco-editor";
export default {
	data() {
		return {
			isSidePanel: true,
			activeMenu: "json",
			map: null,
		};
	},
	mounted() {
		this.mountMap();
	},
	methods: {
		mountMap() {
			let mapEl: any;
			mapEl = document.getElementById("map");
			this.map = new maplibregl.Map({
				container: mapEl,
				style: "https://api.maptiler.com/maps/basic-v2/style.json?key=aJ1aWBQyxkpsVjqWZPpk",
				center: [106.845599, -6.21462],
				zoom: 10,
			});
			// Map Controls
			this.map.addControl(
				new maplibregl.NavigationControl({
					visualizePitch: true,
					showZoom: true,
					showCompass: true,
				}),
				"bottom-left"
			);
			const value = `{
						"type": "FeatureCollection",
						"features": []
					}
						`;

			// Hover on each property to see its docs!
			const container: any = document.getElementById("code-container");
			const myEditor = monaco.editor.create(container, {
				value,
				language: "json",
				automaticLayout: true,
				minimap: {
					enabled: false,
				},
				tabSize: 3,
			});
		},
		toggleSidepanel() {
			this.isSidePanel = !this.isSidePanel;
		},
		handleCurrentLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					const center = [position.coords.longitude, position.coords.latitude];
					console.log(position);
					this.map.setCenter(center);
					this.map.setZoom(15);
					const marker = new maplibregl.Marker().setLngLat(center).addTo(this.map);
				});
			}
		},
	},
};
