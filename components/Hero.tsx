import Image from "next/image";
import Link from "next/link";

const trustItems = [
  { icon: "★", label: "5.0 Google Puanı" },
  { icon: "◈", label: "Yüz Yüze & Online" },
  { icon: "◉", label: "Afyonkarahisar Merkez" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ivory"
    >
      {/* Subtle background texture layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,120,91,0.08)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(143,168,155,0.10)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-12 lg:py-16 order-2 lg:order-1">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-6 self-start">
              <span className="h-px w-8 bg-clay" />
              <span className="text-clay text-xs font-semibold tracking-[0.2em] uppercase">
                Uzm. Psikolojik Danışman
              </span>
            </div>

            <h1 className="font-serif text-petrol text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight mb-6 text-balance">
              Seda İşisağ
              <br />
              <span className="text-clay">Psikolojik</span>
              <br />
              Danışmanlık
            </h1>

            <p className="text-charcoal/70 text-lg leading-relaxed mb-8 max-w-lg">
              Aile, evlilik, çift, çocuk ve ergen danışmanlığında güvenli,
              etik ve profesyonel destek. Afyonkarahisar'da yüz yüze ve
              online görüşme imkânıyla yanınızdayım.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="tel:05079126220" className="btn-primary text-base px-7 py-3.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Randevu Al
              </Link>
              <a
                href="https://maps.google.com/?q=Seda+İşisağ+Psikolojik+Danışmanlık+Merkezi+Afyonkarahisar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-7 py-3.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Yol Tarifi
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-white/70 rounded-2xl px-4 py-3 border border-stone/30 shadow-[0_2px_12px_rgba(23,59,63,0.06)]"
                >
                  <span className="text-clay text-lg leading-none">{item.icon}</span>
                  <span className="text-charcoal text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(214,199,184,0.5)_0%,_transparent_70%)] rounded-full scale-110 pointer-events-none" />

            {/* Image container */}
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Floating card decoration */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8 z-10 bg-white rounded-2xl px-5 py-4 shadow-card border border-stone/20">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <div className="text-petrol font-bold text-sm leading-none">5.0</div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(23,59,63,0.18)]">
                <Image
                  src="/images/seda2.jpg"
                  alt="Seda İşisağ Psikolojik Danışmanlık Merkezi – Terapi odası"
                  width={600}
                  height={750}
                  className="w-full h-[480px] sm:h-[560px] lg:h-[640px] object-cover"
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-petrol/20 to-transparent" />
              </div>

              {/* Second floating badge */}
              <div className="absolute top-6 -right-4 lg:-right-6 bg-sage rounded-2xl px-4 py-3 shadow-card">
                <div className="text-white text-xs font-semibold tracking-wide">Klinik Psikoloji</div>
                <div className="text-white/80 text-[10px] mt-0.5">Uzm. Danışman</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/40">
        <span className="text-xs tracking-widest uppercase">Keşfet</span>
        <div className="w-px h-8 bg-gradient-to-b from-charcoal/30 to-transparent" />
      </div>
    </section>
  );
}
