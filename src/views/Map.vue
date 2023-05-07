<template>
	<div>
		<div class="main-container">
			<div id="map"></div>
			<div class="menu"></div>
		</div>
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
.main-container {
	position: relative;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	flex-shrink: 0;
	overflow-x: hidden;
}
#map {
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 70%;
	flex-basis: 0px;
	flex-grow: 1;
	flex-shrink: 0;
	overflow: hidden;
	position: relative;
}

.menu {
	background-color: white;
	max-width: 30rem;
	width: 40%;
}
</style>
