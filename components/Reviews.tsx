const reviews = [
  {
    name: "Berat Ş.",
    time: "5 ay önce",
    text: "Danışanlarının kapıda karşılaşmamasını dahi düşünebilen bir insan… Tüm süreç boyunca nezaketle bana eşlik ettiniz. Çok ama çok teşekkür ederim Seda hanım.",
    theme: "Danışan Mahremiyeti",
    image: "/images/beklemeodasi.jpeg",
  },
  {
    name: "Muhammet M. A.",
    time: "8 ay önce",
    text: "Bilgisi ve deneyimiyle gerçekten çok yol göstericiydi. Etik değerlere çok dikkat ediyor, hassasiyeti için çok teşekkür ederim. İyi ki varsınız.",
    theme: "Etik Değerler",
    image: "/images/ailedanis.webp",
  },
  {
    name: "Özlem Ç.",
    time: "2 yıl önce",
    text: "Seda hanıma başvurmadan önce depresyonun en zor zamanlarında idim. Şimdi hayata sayesinde bambaşka bakabiliyorum. İyiki yollarımız kesişmiş.",
    theme: "Bireysel Danışmanlık",
    image: "/images/oturmaodasi.jpeg",
  },
  {
    name: "Saadet B. B.",
    time: "2 yıl önce",
    text: "Seda hanıma çift terapisi için başvurmuştuk. Her ikimize de çok büyük farkındalıklar kazandırdı. Kendisine çok teşekkür ediyoruz.",
    theme: "Çift Terapisi",
    image: "/images/ciftdanis.jpg",
  },
  {
    name: "Kübra S.",
    time: "2 yıl önce",
    text: "Online terapiyle başladık, çok fayda gördüm. Daha sonra yüz yüze görüşme sağladık. Tatlı, sevecen ve en önemlisi empati yaparak beni anladığını hissettirdi.",
    theme: "Online Danışmanlık",
    image: "/images/onlinedanis.png",
  },
  {
    name: "R.",
    time: "3 yıl önce",
    text: "Oyun terapisi alanında ismini zaten birkaç kişiden duymuştum. Afyon'da olması büyük şans. Çok teşekkür ederiz.",
    theme: "Oyun Terapisi",
    image: "/images/oyunterapisi.jpg",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="yorumlar" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-clay" />
              <span className="text-clay text-xs font-semibold tracking-[0.2em] uppercase">
                Yorumlar
              </span>
            </div>
            <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Danışanlar
              <br />
              <span className="text-clay">Ne Diyor?</span>
            </h2>
          </div>

          {/* Google rating summary */}
          <div className="flex items-center gap-6 bg-ivory rounded-[20px] px-8 py-5 border border-stone/30 self-start lg:self-auto">
            <div className="text-center">
              <div className="text-petrol font-bold text-5xl leading-none font-serif">5.0</div>
              <div className="mt-2"><StarRating /></div>
              <div className="text-charcoal/60 text-xs mt-1 font-medium">32 Yorum</div>
            </div>
            <div className="h-12 w-px bg-stone/50" />
            <div className="flex flex-col gap-1">
              {[5, 4, 3, 2, 1].map((n) => (
                <div key={n} className="flex items-center gap-2">
                  <span className="text-xs text-charcoal/50 w-2">{n}</span>
                  <div className="w-20 h-1.5 bg-stone/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: n === 5 ? "100%" : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="premium-card group">
              {/* Image Header */}
              <div className="card-img-wrap h-[160px] relative">
                <img
                  src={review.image}
                  alt={`${review.theme} – Seda İşisağ Psikolojik Danışmanlık`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-petrol/30 to-petrol/60" />
                {/* Theme badge */}
                <div className="absolute bottom-3 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-petrol text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {review.theme}
                  </span>
                </div>
              </div>

              {/* Review Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-petrol font-semibold text-sm">{review.name}</div>
                    <div className="text-charcoal/50 text-xs">{review.time}</div>
                  </div>
                  <StarRating />
                </div>

                <p className="text-charcoal/70 text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps / CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://g.co/kgs/Seda-Isisag"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            Google'da Tüm Yorumları Gör
          </a>
        </div>
      </div>
    </section>
  );
}
