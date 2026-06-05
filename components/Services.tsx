import Image from "next/image";
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
    desc: "Moxo Dikkat Testi ve diğer psikometrik değerlendirmelerle kapsamlı psikolojik ölçüm ve raporlama.",
    image: "/images/moxo.png",
    alt: "Dikkat ve Değerlendirme Testleri – Moxo",
  },
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
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={240}
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
      </div>
    </section>
  );
}
