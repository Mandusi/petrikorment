<template>
	<div class="p-5 md:p-10">
		<div
			class="flex flex-col items-center justify-center gap-9 rounded-3xl bg-white p-10"
		>
			<div class="w-full">
				<NuxtLink to="/">
					<div class="w-10">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								fill="#12664f"
								d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"
							/>
						</svg>
					</div>
				</NuxtLink>
			</div>
			<div>
				<h1 class="w-full max-w-[700px] font-mega text-3xl font-bold">
					GC Elite Türkiye 2025 Etkinliğinde Yer Aldık!
				</h1>
				<div class="flex gap-6 text-slate-400">
					<span>21 Temmuz 2025</span>
					<span>3 dakika okuma</span>
				</div>
			</div>

			<ImageSlider
				:images="['/new-7_1.jpeg', '/new-7_2.jpeg', '/new-7_3.jpeg']"
				:interval-ms="4000"
			/>

			<div class="flex w-full max-w-[700px] flex-col gap-5 font-mega font-light">
				<!-- Turkish Version -->
				<p
					>Genç hukukçuların mesleki gelişim süreçlerine somut katkı sunan bir iş
					birliğiyle, <strong>GC Elite Türkiye 2025</strong>’te yer almaktan memnuniyet
					duyduk.</p
				>

				<p
					><strong>Petrikor Mentorship</strong> olarak,
					<strong>Barış Agun Business Development Agency</strong> koordinasyonunda
					yürütülen etkinlikte hukuk fakültesi öğrencilerinden oluşan gönüllü bir ekibin
					organizasyonunu üstlendik. Öğrenciler, etkinlik boyunca aktif görev alarak genel
					hukuk müşavirleri başta olmak üzere çok sayıda üst düzey profesyonelle birebir
					temas kurma fırsatı yakaladı.</p
				>

				<p
					>Bu süreç yalnızca etkinlik günüyle sınırlı kalmayıp, öncesinde gerçekleştirilen
					hazırlık programları ve mentorluk oturumlarıyla pekişen çok katmanlı bir öğrenme
					alanı sundu.</p
				>

				<p
					>Kısa bir süre önce Kayseri’de düzenlediğimiz
					<strong>“İş Geliştirme Stratejileri ve Uygulamaları”</strong> eğitiminin
					ardından, genç meslektaşlarımızı sahada görmek, tüm bu çabanın karşılık
					bulduğunu bir kez daha gösterdi.</p
				>

				<p
					>Hukuk öğrencilerinin sektöre erken temas kurmasına ve profesyonel alanlarda yer
					edinmesine katkı sunmaya devam edeceğiz. 🌿</p
				>

				<hr />

				<!-- English Version -->
				<p
					>It was a pleasure to support <strong>GC Elite Türkiye 2025</strong> through a
					meaningful collaboration aimed at empowering the next generation of legal
					professionals.</p
				>

				<p
					>As <strong>Petrikor Mentorship</strong>, we had the privilege of organizing and
					coordinating a team of law students who actively contributed to the event under
					the guidance of <strong>Barış Agun Business Development Agency</strong>.
					Throughout the day, our mentees assisted with key aspects of the program and
					directly engaged with general counsel and other senior legal professionals.</p
				>

				<p
					>This initiative extended beyond a single event—it was the culmination of a
					broader learning journey, reinforced by prior workshops and mentorship sessions.
					Just a few days earlier, we had conducted a training in Kayseri titled
					<strong>“Business Development Strategies and Applications”</strong>, preparing
					students to step confidently into professional settings.</p
				>

				<p
					>Seeing our mentees contribute to such a prestigious gathering reaffirmed our
					purpose: to foster access, experience, and visibility for emerging legal
					talent.</p
				>

				<p
					>We remain committed to bridging the gap between legal education and
					professional practice—through mentorship, opportunity, and shared experience.
					🌿</p
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
