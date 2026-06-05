import Image from "next/image";

const expertiseItems = [
  {
    title: "Aile Danışmanlığı",
    category: "Uygulama Alanı",
    image: "/images/ailedanis.webp",
    alt: "Aile Danışmanlığı",
  },
  {
    title: "Bilişsel Davranışçı Terapi",
    category: "Terapi Yöntemi",
    image: "/images/bdt.jpg",
    alt: "Bilişsel Davranışçı Terapi",
  },
  {
    title: "Oyun Terapisi",
    category: "Uzmanlık Eğitimi",
    image: "/images/oyunterapisi2.jpg",
    alt: "Oyun Terapisi",
  },
  {
    title: "Hipnoterapi",
    category: "Terapi Yöntemi",
    image: "/images/bireyselterapi2.webp",
    alt: "Hipnoterapi",
  },
  {
    title: "Evlilik Danışmanlığı",
    category: "Uygulama Alanı",
    image: "/images/ciftdanis.jpg",
    alt: "Evlilik Danışmanlığı",
  },
  {
    title: "Aile Terapisi",
    category: "Uygulama Alanı",
    image: "/images/Annebabaegitim.jpg",
    alt: "Aile Terapisi",
  },
  {
    title: "Moxo Dikkat Testi",
    category: "Değerlendirme Aracı",
    image: "/images/moxo.png",
    alt: "Moxo Dikkat Testi",
  },
  {
    title: "Cinsel Terapi",
    category: "Uzmanlık Alanı",
    image: "/images/terapiodasi2.jpeg",
    alt: "Cinsel Terapi – Terapi Ortamı",
  },
  {
    title: "Attentioner",
    category: "Değerlendirme Aracı",
    image: "/images/ergen.jpg",
    alt: "Attentioner – Dikkat Değerlendirme",
  },
  {
    title: "Çocuk ve Ergen Terapisi",
    category: "Uygulama Alanı",
    image: "/images/cocukergenterapi.jpg",
    alt: "Çocuk ve Ergen Terapisi",
  },
  {
    title: "Oyun Terapisi Eğitimi",
    category: "Sertifikalı Eğitim",
    image: "/images/oyunt.jpg",
    alt: "Oyun Terapisi Eğitimi",
  },
  {
    title: "Online Danışmanlık",
    category: "Hizmet Formatı",
    image: "/images/onlinedanis.png",
    alt: "Online Danışmanlık",
  },
];

export default function Expertise() {
  return (
    <section id="yetkinlikler" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-clay" />
            <span className="text-clay text-xs font-semibold tracking-[0.2em] uppercase">
              Yetkinlikler
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Yetkinlikler ve
            <br />
            <span className="text-clay">Çalışma Alanları</span>
          </h2>
          <p className="text-charcoal/65 text-lg leading-relaxed">
            Kanıta dayalı terapi yöntemleri ve uzmanlaşmış alanlarda kapsamlı hizmet.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-[20px] border border-stone/30 shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Small image header */}
              <div className="overflow-hidden h-[120px] sm:h-[140px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-clay text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                  {item.category}
                </div>
                <h3 className="text-petrol font-semibold text-sm leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom treatment areas note */}
        <div className="mt-14 p-8 bg-ivory rounded-[24px] border border-stone/30">
          <h3 className="text-petrol font-semibold text-lg mb-4">Tedavi ve Danışmanlık Alanları</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Anksiyete", "Depresyon", "Aile İçi İletişim", "Boşanma Travması",
              "Akran Zorbalığı", "Alt Islatma (Enürezis)", "Bağlanma Sorunları",
              "Bipolar Bozukluk", "Borderline Kişilik", "Alışveriş Bağımlılığı",
              "Anoreksiya", "Öfke Nöbetleri", "Agorafobi", "Alkol Bağımlılığı",
              "Anne-Baba Danışmanlığı", "Ergen Sorunları", "Çocuk Gelişimi",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-white text-charcoal/75 text-sm rounded-full border border-stone/40 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
