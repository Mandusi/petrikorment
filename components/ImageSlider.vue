<template>
	<div
		class="relative max-w-[700px] overflow-hidden rounded-2xl"
		@mouseenter="pause()"
		@mouseleave="resume()"
		@click="togglePause()"
	>
		<div
			ref="track"
			class="flex ease-in-out"
			:class="animate ? 'transition-transform duration-700' : ''"
			:style="{ transform: `translateX(-${currentIndex * 100}%)` }"
			@transitionend="handleTransitionEnd"
		>
			<!-- Slides (with a cloned first at the end for seamless loop) -->
			<img
				v-for="(src, i) in slides"
				:key="i"
				:src="src"
				alt=""
				class="w-full flex-shrink-0"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = withDefaults(
	defineProps<{
		images: string[]
		intervalMs?: number
	}>(),
	{
		intervalMs: 4000,
	},
)

const slides = computed(() => {
	if (!props.images?.length) return []
	return [...props.images, props.images[0]]
})

const currentIndex = ref(0)
const animate = ref(true)
let timer: ReturnType<typeof setInterval> | null = null
const isPaused = ref(false)

function step() {
	currentIndex.value += 1
}

function start() {
	if (timer) return
	timer = setInterval(() => {
		if (!isPaused.value) step()
	}, props.intervalMs)
}

function stop() {
	if (timer) {
		clearInterval(timer)
		timer = null
	}
}

function pause() {
	isPaused.value = true
}

function resume() {
	isPaused.value = false
}

function togglePause() {
	isPaused.value = !isPaused.value
}

async function handleTransitionEnd() {
	if (currentIndex.value === slides.value.length - 1) {
		animate.value = false // disable transition
		currentIndex.value = 0 // jump to first real slide
		await nextTick() // ensure DOM updates without transition
		requestAnimationFrame(() => {
			animate.value = true
		})
	}
}

onMounted(() => {
	start()
})

onUnmounted(() => {
	stop()
})
</script>
