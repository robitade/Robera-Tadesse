import { ArrowUpRight, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Top Row: Email, Phone & WhatsApp Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a
            href="mailto:robbietade@gmail.com"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.02] px-7 py-3.5 text-sm md:text-base text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium group"
          >
            <span>robbietade@gmail.com</span>
            <ArrowUpRight size={16} className="text-white/70 group-hover:text-black transition-colors" />
          </a>

          <a
            href="tel:+251984810443"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.02] px-7 py-3.5 text-sm md:text-base text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium group"
          >
            <Phone size={16} className="text-white/80 group-hover:text-black transition-colors" />
            <span>+251984810443</span>
          </a>

          <a
            href="https://wa.me/251984810443"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.02] px-7 py-3.5 text-sm md:text-base text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium group"
          >
            <MessageSquare size={16} className="text-white/80 group-hover:text-black transition-colors" />
            <span>WhatsApp</span>
            <ArrowUpRight size={16} className="text-white/70 group-hover:text-black transition-colors" />
          </a>
        </div>

        {/* Middle Row: Social Icon Circles */}
        <div className="flex items-center justify-center gap-3.5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/251984810443"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/robbietade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/robera-tadesse-r242721/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/robbie_Designui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 font-semibold text-sm group"
          >
            X
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/robitade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/robitade1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        {/* Bottom Row: Logo & Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="#hero"
            className="text-xl font-bold text-white hover:text-white/80 transition-colors"
          >
            robbie<span className="text-white">.</span>
          </a>

          <div className="flex items-center gap-4">
            <p className="text-xs md:text-sm text-white/50 font-light">
              © 2026 robbie. Designed &amp; built with care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
