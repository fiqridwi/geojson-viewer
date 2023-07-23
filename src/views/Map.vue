<template>
	<div>
		<div id="map"></div>
		<div class="sidepanel" :style="isSidePanel ? 'display:block;' : 'display:none'">
			<div class="sidepanel-menu">
				<div class="sidepanel-menu-item" @click="activeMenu = 'json'">
					<p>JSON</p>
				</div>
				<div class="sidepanel-menu-item" @click="activeMenu = 'style'">
					<p>Style</p>
				</div>
			</div>
			<div class="sidepanel-content">
				<div v-if="activeMenu == 'json'">
					<div id="code-container"></div>
				</div>
				<div v-else-if="activeMenu == 'style'">style</div>
			</div>
		</div>

		<!-- sidepanel button -->
		<div class="sidepanel-toggle" :style="isSidePanel ? 'right:30%;' : 'right:0;'" @click="toggleSidepanel">
			<font-awesome-icon :icon="isSidePanel ? 'chevron-circle-right' : 'chevron-circle-left'" />
		</div>
	</div>
</template>
<script src="./Map.ts"></script>

<style src="../assets/styles/Map.scss" lang="scss"></style>
