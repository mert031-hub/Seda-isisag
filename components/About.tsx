import Image from "next/image";

const qualities = [
  { label: "Etik Değerlere Bağlılık", desc: "Her danışan için tam gizlilik ve etik ilkelere sıkı bağlılık." },
  { label: "Danışan Mahremiyeti", desc: "Randevular özenle planlanır; danışanların mahremiyeti her şeyden önce gelir." },
  { label: "Bütünleşik Yaklaşım", desc: "BDT, Hipnoterapi ve Oyun Terapisi gibi kanıta dayalı yöntemlerin uyumlu kullanımı." },
  { label: "Yüz Yüze & Online", desc: "Afyonkarahisar merkezi veya güvenli online platform üzerinden görüşme seçeneği." },
];

export default function About() {
  return (
    <section id="hakkinda" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Images */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[24px] shadow-card-hover">
              <Image
                src="/images/oturmaodasi.jpeg"
                alt="Seda İşisağ Psikolojik Danışmanlık – Oturma odası"
                width={600}
                height={500}
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
            </div>

            {/* Inset second image */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-44 lg:w-56 overflow-hidden rounded-[20px] shadow-card-hover border-4 border-white">
              <Image
                src="/images/hol.jpeg"
                alt="Seda İşisağ – Bekleme alanı"
                width={250}
                height={220}
                className="w-full h-36 lg:h-44 object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute top-6 -left-4 lg:-left-8 bg-petrol text-white rounded-2xl px-5 py-4 shadow-float">
              <div className="text-2xl font-bold leading-none">10+</div>
              <div className="text-white/80 text-xs mt-1 font-medium">Yıllık Deneyim</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-4">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-clay" />
              <span className="text-clay text-xs font-semibold tracking-[0.2em] uppercase">
                Hakkımda
              </span>
            </div>

            <h2 className="section-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight mb-6">
              Güvenli bir alan,
              <br />
              <span className="text-clay">gerçek bir destek.</span>
            </h2>

            <div className="space-y-5 text-charcoal/75 leading-relaxed mb-8">
              <p>
                Ben Seda İşisağ; Uzman Psikolojik Danışman olarak Klinik Psikoloji
                alanında yüksek lisans eğitimimi tamamladım. Afyonkarahisar'da
                kurduğum merkezde aile, evlilik, çift, çocuk, ergen ve bireysel
                danışmanlık hizmetleri sunuyorum.
              </p>
              <p>
                Her bireyin kendine özgü bir hikâyesi olduğuna inanıyorum.
                Danışmanlık sürecinde etik değerlere, gizliliğe ve her danışanın
                onuruna saygıya büyük özen gösteriyorum. Amacım; sizi yargılamadan
                dinlemek ve size en uygun destek yolunu birlikte bulmak.
              </p>
              <p>
                Bilişsel Davranışçı Terapi, Hipnoterapi, Oyun Terapisi ve Moxo
                Dikkat Testi gibi kanıta dayalı yöntemlerle çalışıyorum.
                Yüz yüze görüşmenin yanı sıra güvenli online platformlar üzerinden
                de hizmet vermekteyim.
              </p>
            </div>

            {/* Qualities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {qualities.map((q) => (
                <div
                  key={q.label}
                  className="flex gap-3 p-4 bg-ivory rounded-2xl border border-stone/30"
                >
                  <span className="text-clay mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-petrol text-sm font-semibold mb-1">{q.label}</div>
                    <div className="text-charcoal/65 text-xs leading-relaxed">{q.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="tel:05079126220" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Görüşme Ayarla
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
