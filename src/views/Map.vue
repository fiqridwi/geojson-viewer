<template>
	<div>
		<div id="map"></div>
	</div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import maplibregl from "maplibre-gl"; // or "const maplibregl = require('maplibre-gl');"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

onMounted(() => {
	let mapEl: HTMLElement;
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
	// Add the control to the map.
	map.addControl(
		new MapboxGeocoder({
			accessToken: "pk.eyJ1IjoiZmlxcmlkd2kiLCJhIjoiY2wzbnY5N3Z5MDcwdTNrcWR3MmhmajZoZSJ9.x2iHHQ_9giyNRTFcLVcAOA",
			mapboxgl: maplibregl,
		})
	);
});
</script>

<style scoped>
#map {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
}
</style>
