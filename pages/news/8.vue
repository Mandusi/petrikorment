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
					David Goulthorpe ile Erciyes Üniversitesi'nde İlham Verici Bir Buluşma
					Gerçekleştirdik!
				</h1>
				<div class="flex gap-6 text-slate-400">
					<span>12 Haziran 2025</span>
					<span>2 dakika okuma</span>
				</div>
			</div>

			<ImageSlider
				:images="['/new-8_1.jpeg', '/new-8_2.jpeg', '/new-8_3.jpeg']"
				:interval-ms="4000"
			/>

			<div class="flex w-full max-w-[700px] flex-col gap-5 font-mega font-light">
				<p
					>Geçtiğimiz günlerde Erciyes Üniversitesi'nde, uluslararası hukuk camiasının
					deneyimli isimlerinden <strong>David Goulthorpe</strong> ile anlamlı bir buluşma
					gerçekleştirdik.</p
				>

				<p
					>Bu özel etkinlik, yalnızca bir konferanstan ibaret değildi; aynı zamanda genç
					hukukçuların vizyonunu genişleten, profesyonel dünyaya dair güçlü bir temas
					noktasıydı. Öğrencilerimizin gösterdiği ilgi ve ortaya koydukları entelektüel
					merak, geleceğe umutla bakmamıza vesile oldu.</p
				>

				<p
					>Bu süreçte bizlere ilham veren ve mentorluk çalışmalarımızda ilk adımı atmamıza
					katkı sunan <strong>Barış Agun</strong>’a içtenlikle teşekkür ederiz.
					Fakültedeki organizasyona verdikleri destek için
					<strong>Nizam ve Adalet Kulübü</strong>’ne ve
					<strong
						>Erciyes Üniversitesi Hukuk Fakültesi Dekanı Prof. Dr. Burak Adıgüzel</strong
					>’e de ayrıca şükranlarımızı sunarız.</p
				>

				<p
					>Sayın Goulthorpe’un alanındaki derin tecrübesi, vizyoner yaklaşımı ve
					alçakgönüllü desteği, yalnızca bir konuşmadan çok daha fazlasını sundu: bir
					ilham, bir yön, bir güç. Onunla aynı masada bulunmak ve fikir alışverişinde
					bulunmak bizler için büyük bir onurdu.</p
				>

				<p
					>Bu karşılaşmanın yalnızca bugüne değil, geleceğe de yön verecek bir başlangıç
					olduğuna inanıyoruz. Yolumuz uzun, hedefimiz büyük; birlikte büyümeye devam
					edeceğiz.</p
				>

				<p>🌱 “Yeşeren bilgi, büyüyen deneyim.”</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
