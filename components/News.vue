<template>
	<div
		ref="ScrollPosition"
		class="z-10 flex h-[400px] items-center justify-center bg-gray-100/50 px-5 md:p-10"
	>
		<div class="z-10 flex min-h-[480px] w-full flex-col gap-5 rounded-3xl bg-white p-10">
			<h1 class="text-center font-mega text-5xl font-semibold sm:text-left">Duyurular</h1>
			<div class="flex gap-10 overflow-x-auto">
				<NuxtLink to="/news/9">
					<NewsCard
						title="Hukukta İleri: Kayseri Ticaret Odası İşbirliğinde..."
						date="14 Temmuz 2025"
						image="/new-9.jpeg"
					/>
				</NuxtLink>
				<NuxtLink to="/news/8">
					<NewsCard
						title="David Goulthorpe Erciyes Üniversitesi'nde!"
						date="14 Temmuz 2025"
						image="/new-8_1.jpeg"
					/>
				</NuxtLink>
				<NuxtLink to="/news/7">
					<NewsCard
						title="GC Elite Türkiye 2025 Etkinliğinde Yer Aldık!"
						date="14 Temmuz 2025"
						image="/new-7_2.jpeg"
					/>
				</NuxtLink>
				<NuxtLink to="/news/6">
					<NewsCard
						title="İklim Kanunu ve Sürdürülebilirlik Webinarı!"
						date="14 Temmuz 2025"
						image="/new-6_1.jpeg"
					/>
				</NuxtLink>

				<template v-for="(announcement, index) in announcements" :key="index">
					<NuxtLink :to="`/news/${announcement.id}`">
						<NewsCard
							:title="announcement.title"
							:date="announcement.date"
							:image="announcement.imagePath"
						/>
					</NuxtLink>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { announcements } from '@/data/announcements'

const ScrollPosition = ref()
defineExpose({ ScrollPosition })
</script>
