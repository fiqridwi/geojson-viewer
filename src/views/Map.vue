<template>
	<div class="main-container">
		<div
			id="map"
			:style="
				isSidePanel
					? 'flex-basis: 0px;'
					: 'flex-basis: 100%;'
			"
		></div>
		<div
			class="sidepanel"
			:style="
				isSidePanel
					? 'width:30rem'
					: 'width:0'
			"
		>
			<div class="sidepanel-menu">
				<div
					class="sidepanel-menu-item"
					@click="activeMenu = 'json'"
				>
					<p>JSON</p>
				</div>
				<div
					class="sidepanel-menu-item"
					@click="activeMenu = 'style'"
				>
					<p>Style</p>
				</div>
			</div>
			<div class="sidepanel-content">
				<div v-if="activeMenu == 'json'">
					Json
				</div>
				<div
					v-else-if="
						activeMenu == 'style'
					"
				>
					style
				</div>
			</div>
		</div>
		<div
			class="sidepanel-toggle"
			:style="
				isSidePanel
					? 'right:30rem;'
					: 'right:0;'
			"
			@click="toggleSidepanel"
		>
			<font-awesome-icon
				:icon="
					isSidePanel
						? 'chevron-circle-right'
						: 'chevron-circle-left'
				"
			/>
		</div>
	</div>
</template>
<script src="./Map.ts" lang="ts"></script>

<style
	src="../assets/styles/Map.scss"
	lang="scss"
></style>
