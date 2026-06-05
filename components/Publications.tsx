const articles = [
  {
    date: "04 Şubat 2026",
    dateShort: "Şub 2026",
    title: "Çift İlişkisinin Sihirli Değneği",
    excerpt:
      "Sağlıklı bir çift ilişkisinde sihirli değneğin ne olduğunu ve ilişkiyi güçlendiren temel unsurları keşfedin.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/cift-iliskisinin-sihirli-degnegi/126196",
    image: "/images/ciftdanis.jpg",
    alt: "Çift İlişkisinin Sihirli Değneği",
  },
  {
    date: "19 Aralık 2025",
    dateShort: "Ara 2025",
    title: "Çift İlişkisinde Duyulmak Ve Anlaşılmak",
    excerpt:
      "İlişkilerde gerçek anlamda duyulma ve anlaşılma ihtiyacını ve bunu sağlamanın yollarını ele alıyorum.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/cift-iliskisinde-duyulmak-ve-anlasilmak/122651",
    image: "/images/ailedanis.webp",
    alt: "Çift İlişkisinde Duyulmak Ve Anlaşılmak",
  },
  {
    date: "09 Aralık 2025",
    dateShort: "Ara 2025",
    title: "Hayat Doyumu Nasıl Sağlanır",
    excerpt:
      "Hayat doyumunu artırmak için psikolojik açıdan neler yapabileceğinizi, günlük yaşama nasıl anlam katacağınızı keşfedin.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/hayat-doyumu-nasil-saglanir/121924",
    image: "/images/bireyselterapi2.webp",
    alt: "Hayat Doyumu Nasıl Sağlanır",
  },
  {
    date: "26 Kasım 2025",
    dateShort: "Kas 2025",
    title: "Eşler Arası Tartışmaları Yönetmek: Kazanmak Mı? Anlaşmak Mı?",
    excerpt:
      "Eşler arasındaki tartışmalarda kazanmayı değil, anlaşmayı hedeflemek için pratik ve etkili stratejiler.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/esler-arasi-tartismalari-yonetmek-kazanmak-mi-anlasmak-mi/120918",
    image: "/images/terapiodasi.jpeg",
    alt: "Eşler Arası Tartışmaları Yönetmek",
  },
  {
    date: "12 Kasım 2025",
    dateShort: "Kas 2025",
    title: "Psikolojik Sağlamlık: Kırılmadan Eğilmek",
    excerpt:
      "Zorluklar karşısında kırılmadan eğilebilmenin, psikolojik dayanıklılığı geliştirmenin yollarını ele alıyorum.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/psikolojik-saglamlik-kirilmadan-egilmek/119848",
    image: "/images/terapiodasi2.jpeg",
    alt: "Psikolojik Sağlamlık: Kırılmadan Eğilmek",
  },
  {
    date: "31 Ekim 2025",
    dateShort: "Eki 2025",
    title: "Evliliklerde Ailelere Sevgiyle Sınır Koymak",
    excerpt:
      "Evli çiftlerin her iki tarafın ailesine karşı sevgiyle ve saygıyla sınır koymanın önemine dair içgörüler.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/evliliklerde-ailelere-sevgiyle-sinir-koymak/118979",
    image: "/images/oturmaodasi.jpeg",
    alt: "Evliliklerde Ailelere Sevgiyle Sınır Koymak",
  },
  {
    date: "17 Eylül 2025",
    dateShort: "Eyl 2025",
    title: "Ait Olamama Hissi: Neden Kendimizi Hep Dışarıda Hissediyoruz?",
    excerpt:
      "Ait olamama hissinin psikolojik kökenlerini ve bu durumla başa çıkma yollarını anlatan kapsamlı bir değerlendirme.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/ait-olamama-hissi-neden-kendimizi-hep-disarida-hissediyoruz/115672",
    image: "/images/ergen.jpg",
    alt: "Ait Olamama Hissi",
  },
  {
    date: "06 Eylül 2025",
    dateShort: "Eyl 2025",
    title: "Okulun İlk Günlerinde Zorlanan Çocuklara Nasıl Destek Olabilirsiniz?",
    excerpt:
      "Okul başlangıcında yaşanan uyum güçlüklerinde ebeveynlerin çocuklarına nasıl yardımcı olabileceğine dair rehberlik.",
    url: "https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag/okulun-ilk-gunlerinde-zorlanan-cocuklara-nasil-destek-olabilirsiniz/114901",
    image: "/images/cocukergenterapi.jpg",
    alt: "Okulun İlk Günlerinde Zorlanan Çocuklara Destek",
  },
];

export default function Publications() {
  return (
    <section id="yayinlar" className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-clay" />
              <span className="text-clay text-xs font-semibold tracking-[0.2em] uppercase">
                Yayınlar
              </span>
            </div>
            <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Yazılar ve
              <br />
              <span className="text-clay">Makaleler</span>
            </h2>
            <p className="text-charcoal/65 text-base leading-relaxed">
              Afyon Türkeli Gazetesi'nde yayımlanan psikoloji ve danışmanlık yazıları.
            </p>
          </div>

          <a
            href="https://www.afyonturkeligazetesi.com/yazarlar/seda-isisag"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start sm:self-auto flex-shrink-0"
          >
            Tüm Yazılar
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card group block"
            >
              {/* Article Image */}
              <div className="card-img-wrap h-[200px] sm:h-[180px] relative">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Date badge overlay */}
                <div className="absolute top-3 left-3 bg-petrol/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
                  {article.dateShort}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-5">
                <p className="text-charcoal/50 text-xs mb-2">{article.date}</p>
                <h3 className="text-petrol font-semibold text-[14px] leading-snug mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-charcoal/60 text-xs leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center text-clay text-xs font-semibold gap-1 group-hover:gap-2 transition-all duration-150">
                  Yazıyı Oku
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
