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
					🌍 İklim Kanunu ve Sürdürülebilirlik Webinarımızı Gerçekleştirdik!
				</h1>
				<div class="flex gap-6 text-slate-400">
					<span>14 Temmuz 2025</span>
					<span>3 dakika okuma</span>
				</div>
			</div>

			<ImageSlider
				:images="['/new-6_1.jpeg', '/new-6_2.jpeg', '/new-6_3.jpeg']"
				:interval-ms="4000"
			/>

			<div class="flex w-full max-w-[700px] flex-col gap-5 font-mega font-light">
				<p>
					İklim odaklı politikaların yatırım ortamı, hukuk sistemi ve eğitim alanları
					üzerindeki etkilerini değerlendirdiğimiz “İklim Kanunu ve Sürdürülebilirlik”
					başlıklı webinarımızı başarıyla tamamladık.
				</p>
				<p>🎤 Programımızda yer alan kıymetli konuşmacılar: </p>
				<p
					>🟢 Burcu Yavuz Tiftikçigil – İstanbul Kültür Üniversitesi Rektör Yardımcısı
					<br />
					📌 Sürdürülebilir kalkınma stratejilerinde üniversitelerin rolü, iklim
					okuryazarlığı ve eğitimin stratejik önemi üzerine kapsamlı bir perspektif sundu.
				</p>
				<p
					>⚖️ Av. Emel Ü. – İklim Değişikliği Başkanlığı 1. Hukuk Müşaviri<br />
					📌 İklim Kanunu’nun içeriği, AB Yeşil Mutabakatı ile uyumu, karbon piyasaları ve
					Türkiye’nin hukuki dönüşüm süreci üzerine detaylı değerlendirmelerde bulundu.
				</p>
				<p
					>🌐 Fatih Özdemir – YASED Hukuk ve Regülasyon Direktörü<br />
					📌 Yatırımcı gözünden iklim regülasyonları, çok uluslu şirketlerin yeşil dönüşüm
					stratejileri ve sürdürülebilir yatırım ortamı başlıklarında uluslararası bir
					perspektif sundu.
				</p>
				<p
					>💬 Etkinliğimizin her bölümünde değerli katılımcılarımızın soruları ile
					zenginleşen, interaktif bir atmosfer oluşturduk.
				</p>
				<p>
					🌱 İklim değişikliği ile mücadelede çok paydaşlı düşünmenin, politika, hukuk ve
					araştırma alanlarını birlikte konuşmanın önemine yürekten inanıyoruz.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
