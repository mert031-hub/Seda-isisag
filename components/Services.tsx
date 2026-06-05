import Link from "next/link";

const services = [
  {
    title: "Aile ve Evlilik Danışmanlığı",
    desc: "Aile içi iletişim güçlükleri, evlilik krizleri ve yeniden bağlanma süreçlerinde profesyonel rehberlik.",
    image: "/images/ailedanis.webp",
    alt: "Aile ve Evlilik Danışmanlığı",
  },
  {
    title: "Çift Danışmanlığı",
    desc: "İlişki dinamiklerini anlamak, çatışmaları çözmek ve derin bir bağ kurmak için çift odaklı terapi.",
    image: "/images/ciftdanis.jpg",
    alt: "Çift Danışmanlığı",
  },
  {
    title: "Çocuk ve Ergen Danışmanlığı",
    desc: "Davranış sorunları, okul stresi, sosyal uyum ve gelişim süreçlerinde çocuk ve ergen odaklı destek.",
    image: "/images/cocukergenterapi.jpg",
    alt: "Çocuk ve Ergen Danışmanlığı",
  },
  {
    title: "Bireysel Psikolojik Danışmanlık",
    desc: "Kaygı, depresyon, öfke yönetimi ve kişisel gelişim konularında bireysel, güvenli ve sırdaş bir alan.",
    image: "/images/bireyselterapi2.webp",
    alt: "Bireysel Psikolojik Danışmanlık",
  },
  {
    title: "Oyun Terapisi",
    desc: "Çocukların duygu ve düşüncelerini oyun yoluyla ifade etmelerine imkân tanıyan kanıta dayalı terapi yöntemi.",
    image: "/images/oyunterapisi.jpg",
    alt: "Oyun Terapisi",
  },
  {
    title: "Anne-Baba Eğitimi ve Danışmanlığı",
    desc: "Ebeveynlik becerilerini güçlendiren, sağlıklı anne-baba-çocuk ilişkisi kurmaya destek olan rehberlik programı.",
    image: "/images/Annebabaegitim.jpg",
    alt: "Anne-Baba Eğitimi ve Danışmanlığı",
  },
  {
    title: "Online Danışmanlık",
    desc: "Bulunduğunuz yerden bağımsız olarak güvenli ve gizli bir ortamda online görüşme imkânı.",
    image: "/images/onlinedanis.png",
    alt: "Online Danışmanlık",
  },
  {
    title: "Dikkat ve Değerlendirme Testleri",
    desc: "Moxo Dikkat Testi ve Attentioner gibi psikometrik araçlarla kapsamlı psikolojik ölçüm ve raporlama.",
    image: "/images/moxo.png",
    alt: "Dikkat ve Değerlendirme Testleri – Moxo",
  },
  {
    title: "Bilişsel Davranışçı Terapi",
    desc: "Olumsuz düşünce kalıplarını fark edip dönüştürmeye odaklanan, bilimsel temelli etkili bir terapi yöntemi.",
    image: "/images/bdt.jpg",
    alt: "Bilişsel Davranışçı Terapi",
  },
  {
    title: "Hipnoterapi",
    desc: "Bilinçaltı düzeyde çalışarak istenmeyen alışkanlıkları, korkuları ve blokajları çözmeye yönelik terapi.",
    image: "/images/terapiodasi2.jpeg",
    alt: "Hipnoterapi",
  },
  {
    title: "Cinsel Terapi",
    desc: "Cinsel işlev bozuklukları ve çift uyumu konularında güvenli, etik ve uzman destekli danışmanlık.",
    image: "/images/terapiodasi.jpeg",
    alt: "Cinsel Terapi",
  },
  {
    title: "Aile Terapisi",
    desc: "Aile sistemini bir bütün olarak ele alarak iletişim örüntülerini iyileştirmeye yönelik terapötik yaklaşım.",
    image: "/images/hol.jpeg",
    alt: "Aile Terapisi",
  },
];

const treatmentAreas = [
  "Anksiyete",
  "Depresyon",
  "Aile İçi İletişim Sorunları",
  "Boşanma Travması",
  "Akran Zorbalığı",
  "Alt Islatma (Enürezis)",
  "Bağlanma Sorunları",
  "Bipolar Bozukluk",
  "Borderline Kişilik Bozukluğu",
  "Alışveriş Bağımlılığı",
  "Anoreksiya",
  "Ağlama ve Öfke Nöbetleri",
  "Agorafobi",
  "Alkol Bağımlılığı",
  "Anne-Baba Danışmanlığı",
  "Ergen Sorunları",
  "Çocuk Gelişimi",
  "Okul Uyum Sorunları",
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-clay" />
            <span className="text-clay text-xs font-semibold tracking-[0.2em] uppercase">
              Hizmetler
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Size Özel Danışmanlık
            <br />
            <span className="text-clay">Hizmetleri</span>
          </h2>
          <p className="text-charcoal/65 text-lg leading-relaxed">
            Her bireyin, çiftin ve ailenin ihtiyacına yönelik uzman ve etik danışmanlık hizmetleri sunulmaktadır.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service) => (
            <div key={service.title} className="premium-card group">
              {/* Card Image */}
              <div className="card-img-wrap h-[220px] sm:h-[200px] lg:h-[200px]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-petrol font-semibold text-[15px] leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal/65 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <Link
                  href="#iletisim"
                  className="inline-flex items-center text-clay text-sm font-semibold gap-1 hover:gap-2 transition-all duration-150"
                >
                  Detaylı Bilgi
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Areas */}
        <div className="mt-16 bg-white rounded-[24px] border border-stone/30 shadow-card overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left label */}
            <div className="lg:w-56 xl:w-64 flex-shrink-0 bg-petrol p-8 flex flex-col justify-center">
              <div className="text-white/50 text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
                Çalışma Alanları
              </div>
              <h3 className="text-white font-serif text-xl font-semibold leading-snug mb-3">
                Tedavi ve Danışmanlık Alanları
              </h3>
              <p className="text-white/60 text-xs leading-relaxed">
                Danışmanlık verilen başlıca konu ve sorunlar.
              </p>
            </div>

            {/* Right tags */}
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                {treatmentAreas.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 px-3 py-2.5 bg-ivory rounded-xl border border-stone/40 group hover:border-clay/40 hover:bg-clay/5 transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-clay flex-shrink-0" />
                    <span className="text-charcoal/75 text-sm font-medium leading-tight">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
