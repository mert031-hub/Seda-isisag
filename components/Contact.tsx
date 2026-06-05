const contactCards = [
  {
    title: "Randevu & WhatsApp",
    value: "0507 912 62 20",
    sub: "Hafta içi ve hafta sonu görüşme",
    image: "/images/terapiodasi.jpeg",
    alt: "Randevu Al – Seda İşisağ",
    href: "https://wa.me/905079126220?text=Merhaba%20Seda%20Han%C4%B1m%2C%20web%20siteniz%20%C3%BCzerinden%20ula%C5%9F%C4%B1yorum.%20Randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
    cta: "WhatsApp'ta Yaz",
  },
  {
    title: "Konum",
    value: "Afyonkarahisar Merkez",
    sub: "Selçuklu Mah. 1455 Sok. Ophelia Suit No:2",
    image: "/images/beklemeodasi.jpeg",
    alt: "Konum – Seda İşisağ Merkezi",
    href: "https://maps.google.com/?q=Seda+İşisağ+Psikolojik+Danışmanlık+Merkezi+Afyonkarahisar",
    cta: "Yol Tarifi Al",
  },
  {
    title: "Online Görüşme",
    value: "Güvenli Platform",
    sub: "Türkiye'nin her yerinden erişim",
    image: "/images/onlinedanis.png",
    alt: "Online Danışmanlık",
    href: "tel:05079126220",
    cta: "Bilgi Al",
  },
  {
    title: "Instagram",
    value: "@sedaisisag",
    sub: "221 gönderi · 11.1K takipçi",
    image: "/images/oturmaodasi.jpeg",
    alt: "Seda İşisağ Instagram",
    href: "https://www.instagram.com/sedaisisag",
    cta: "Profili Ziyaret Et",
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-clay" />
            <span className="text-clay text-xs font-semibold tracking-[0.2em] uppercase">
              İletişim
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Bize Ulaşın,
            <br />
            <span className="text-clay">Randevu Alın</span>
          </h2>
          <p className="text-charcoal/65 text-lg leading-relaxed">
            Yüz yüze veya online görüşme için iletişime geçin. En kısa sürede size dönüş yapılacaktır.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="premium-card group block"
            >
              <div className="card-img-wrap h-[160px] relative">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-petrol/50" />
              </div>
              <div className="p-5">
                <div className="text-clay text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                  {card.title}
                </div>
                <div className="text-petrol font-semibold text-[15px] mb-1">{card.value}</div>
                <div className="text-charcoal/60 text-xs mb-4">{card.sub}</div>
                <span className="inline-flex items-center text-clay text-xs font-semibold gap-1 group-hover:gap-2 transition-all duration-150">
                  {card.cta}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Full address + map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Address panel */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-8 border border-stone/30 shadow-card flex flex-col gap-6">
            <h3 className="text-petrol font-semibold text-lg font-serif">Adres Bilgileri</h3>

            <div className="flex gap-4">
              <span className="text-clay mt-0.5 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <div className="text-petrol font-semibold text-sm mb-1">Adres</div>
                <address className="text-charcoal/65 text-sm not-italic leading-relaxed">
                  Selçuklu Mahallesi 1455 Sokak<br />
                  Ophelia Suit No:2 İç Kapı No:8<br />
                  Uydukent, 03030<br />
                  Afyonkarahisar Merkez / Afyonkarahisar
                </address>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-clay mt-0.5 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <div className="text-petrol font-semibold text-sm mb-1">Telefon / WhatsApp</div>
                <a href="tel:05079126220" className="text-charcoal/65 text-sm hover:text-clay transition-colors">
                  0507 912 62 20
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-clay mt-0.5 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <div className="text-petrol font-semibold text-sm mb-1">Çalışma Saatleri</div>
                <div className="text-charcoal/65 text-sm">Pazartesi – Cumartesi</div>
                <div className="text-charcoal/65 text-sm">09:00 – 22:00</div>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-clay mt-0.5 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </span>
              <div>
                <div className="text-petrol font-semibold text-sm mb-1">Blog</div>
                <a
                  href="https://psikolojikdanismansedaisisag.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal/65 text-sm hover:text-clay transition-colors break-all"
                >
                  psikolojikdanismansedaisisag.blogspot.com
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/905079126220?text=Merhaba%20Seda%20Han%C4%B1m%2C%20web%20siteniz%20%C3%BCzerinden%20ula%C5%9F%C4%B1yorum.%20Randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clay mt-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile Randevu Al
            </a>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-3 overflow-hidden rounded-[24px] shadow-card border border-stone/30 h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.3357965432897!2d30.517922400000003!3d38.7789357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf17bd4b4c9d05%3A0x7081415fc98134b2!2zU2VkYSDEsMWfaXNhxJ8gUHNpa29sb2ppayBEYW7EscWfbWFubMSxayBNZXJrZXppLUFmeW9uIEFpbGUgdmUgRXZsaWxpayBEYW7EscWfbWFubMSxxJ_EsS3Dh29jdWsgdmUgRXJnZW4gRGFuxLHFn21hbmzEscSfxLEtw4dpZnQgRGFuxLHFn21hbmzEscSfxLEtw4dpZnQgRGFuxLHFn21hbmzEscSfxLE!5e0!3m2!1str!2str!4v1780648636647!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seda İşisağ Psikolojik Danışmanlık Merkezi – Google Haritalar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
