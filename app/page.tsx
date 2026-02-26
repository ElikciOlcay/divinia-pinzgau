"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Star,
  Award,
  Zap,
  Waves,
  Radio,
  Cpu,
  Fingerprint,
  ChevronDown,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const BOOKING_URL =
  "https://connect.shore.com/bookings/skinlux-pinzgau/services?locale=de";
const PHONE = "+436644568454";
const PHONE_DISPLAY = "+43 664 456 8454";

const behandlungen = [
  { title: "Fettreduktion", emoji: "01" },
  { title: "Hautstraffung", emoji: "02" },
  { title: "Muskelaufbau", emoji: "03" },
  { title: "Cellulite-Behandlung", emoji: "04" },
  { title: "Lymphdrainage", emoji: "05" },
];

const technologien = [
  { icon: Cpu, name: "Chip-Technologie" },
  { icon: Radio, name: "Radiofrequenz" },
  { icon: Zap, name: "Elektroporation" },
  { icon: Waves, name: "Kavitation" },
  { icon: Fingerprint, name: "EMS" },
  { icon: Sparkles, name: "LED-Therapie" },
  { icon: Shield, name: "Vakuum" },
];

const bewertungen = [
  {
    name: "Sabrina M.",
    text: "Nach nur 3 Sitzungen sehe ich einen deutlichen Unterschied. Absolut schmerzfrei!",
  },
  {
    name: "Michaela K.",
    text: "Endlich eine Behandlung die wirklich wirkt. Meine Oberschenkel sind sichtbar straffer.",
  },
  {
    name: "Lisa T.",
    text: "Super professionell, die Ergebnisse sprechen fuer sich. Kann ich nur empfehlen!",
  },
];

const faq = [
  {
    frage: "Wie schnell sehe ich Ergebnisse beim Abnehmen?",
    antwort:
      "Bereits nach der ersten Body-Shaping-Sitzung mit der DIVINIA Eclibs sind messbare Veraenderungen moeglich. Viele Kunden berichten von sofort spuerbarer Hautstraffung. Optimale Ergebnisse bei der Fettreduktion zeigen sich nach 6-8 Sitzungen im Abstand von 3-5 Tagen.",
  },
  {
    frage: "Ist Abnehmen ohne OP schmerzhaft?",
    antwort:
      "Nein, die DIVINIA Eclibs Behandlung ist komplett schmerzfrei. Die meisten Kunden empfinden die Sitzung als angenehm warm und entspannend -- aehnlich wie eine Massage. Es werden keine Nadeln, kein Skalpell und keine Betaeubung benoetigt.",
  },
  {
    frage: "Wie lange dauert eine Body-Shaping-Sitzung?",
    antwort:
      "Eine Sitzung dauert ca. 30-45 Minuten. Es gibt keinerlei Ausfallzeit -- du kannst direkt danach wieder deinem Alltag nachgehen, Sport treiben oder arbeiten.",
  },
  {
    frage: "Fuer wen ist Body Shaping mit DIVINIA Eclibs geeignet?",
    antwort:
      "Die Behandlung eignet sich fuer alle, die gezielt Fett reduzieren, Haut straffen oder Muskeln aufbauen moechten -- unabhaengig von Alter oder Geschlecht. In der kostenlosen Erstberatung bei Skinlux Saalfelden pruefen wir deine individuelle Eignung und erstellen einen persoenlichen Behandlungsplan.",
  },
  {
    frage: "Wie viele Behandlungen brauche ich zum Abnehmen?",
    antwort:
      "Das besprechen wir individuell in deiner kostenlosen Erstberatung. Fuer nachhaltige Fettreduktion empfehlen wir 6-10 Sitzungen. Jede Sitzung baut auf der vorherigen auf -- die 7 Technologien der DIVINIA Eclibs arbeiten dabei synergistisch fuer optimale Ergebnisse.",
  },
  {
    frage: "Was kostet Body Shaping bei Skinlux?",
    antwort:
      "Die Erstberatung ist komplett kostenlos und unverbindlich. Die Behandlungspreise besprechen wir persoenlich, da sie vom individuellen Plan abhaengen. Buche einfach deinen Beratungstermin -- wir nehmen uns Zeit fuer dich.",
  },
  {
    frage: "Wo finde ich Body Shaping im Pinzgau?",
    antwort:
      "Skinlux Medical Beauty Studio befindet sich in der Leogangerstrasse 12/Top 1c in 5760 Saalfelden am Steinernen Meer. Wir sind gut erreichbar fuer Kunden aus Zell am See, Leogang, Mittersill, Lofer und dem gesamten Pinzgau und Salzburg.",
  },
];

function StickyCtaButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-[11px] md:text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 hover:bg-gray-900 w-full sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function FAQItem({ frage, antwort, index }: { frage: string; antwort: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="text-lg md:text-xl font-normal pr-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
          {frage}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-300 shrink-0 transition-transform duration-300 group-hover:text-black ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 font-light text-base leading-relaxed pb-6">
              {antwort}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CountUpNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, triggered]);

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
      {count}{suffix}
    </div>
  );
}

export default function DiviniaLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
          <Image
            src="/images/logo/skinlux-logo.png"
            alt="Skinlux"
            width={100}
            height={28}
            className="h-5 md:h-6 w-auto"
          />
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex items-center gap-2 text-xs text-gray-500 font-light hover:text-black transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-light hover:bg-gray-900 transition-colors"
            >
              Termin sichern
            </a>
          </div>
        </div>
      </header>

      {/* HERO -- Fullscreen, emotional, conversion-focused */}
      <section ref={heroRef} className="relative min-h-svh flex items-end overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/divinia/behandlung.jpg"
            alt="Abnehmen ohne OP - DIVINIA Eclibs Body Shaping Behandlung bei Skinlux Saalfelden Pinzgau"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/80" />
        </motion.div>

        <div className="relative z-10 w-full pb-12 md:pb-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 md:mb-8 bg-white/10 backdrop-blur-sm px-4 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-[11px] text-white/90 tracking-[0.2em] uppercase font-light">
                  Body Shaping Weltneuheit im Pinzgau
                </span>
              </div>

              <h1 className="text-[2.5rem] md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 leading-[1.05] max-w-3xl">
                Dein Koerper.
                <br />
                <span className="text-white/60">Neu definiert.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-light mb-10 md:mb-12 max-w-lg leading-relaxed">
                Abnehmen ohne OP. 5 Behandlungen in einer Sitzung.
                7 Technologien. 0 Ausfallzeit. Jetzt in Saalfelden.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-4.5 text-[11px] tracking-[0.2em] uppercase font-light hover:bg-gray-100 transition-all w-full sm:w-auto"
                >
                  Kostenlose Beratung sichern
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4.5 text-white/80 border border-white/20 text-[11px] tracking-[0.2em] uppercase font-light hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  Direkt anrufen
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/50 text-xs font-light">
                  5.0 &bull; ueber 150 zufriedene Kunden
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR -- Zahlen die ueberzeugen */}
      <section className="bg-black py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: 30, suffix: "%", label: "Fettreduktion" },
              { num: 7, suffix: "", label: "Technologien" },
              { num: 30, suffix: " Min", label: "pro Sitzung" },
              { num: 0, suffix: "", label: "Tage Ausfallzeit" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <CountUpNumber target={stat.num} suffix={stat.suffix} />
                <div className="text-xs md:text-sm text-gray-300 tracking-[0.1em] uppercase font-light mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM/AGITATION -- Warum du das brauchst */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
                5 Behandlungen.
                <br />
                1 Sitzung.
                <br />
                <span className="text-gray-300">0 Kompromisse.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Vergiss Diaeten und einzelne Behandlungen. Die DIVINIA Eclibs
                vereint Fettreduktion, Straffung, Muskelaufbau, Cellulite- und Lymphbehandlung.
              </p>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-0">
              {behandlungen.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-5 py-5 md:py-6 border-b border-gray-100 group hover:border-gray-300 transition-colors"
                >
                  <span className="text-xs text-gray-300 font-light w-6">{b.emoji}</span>
                  <h3 className="text-xl md:text-2xl font-normal flex-1" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    {b.title}
                  </h3>
                  <Check className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 md:mt-14 text-center"
            >
              <StickyCtaButton>
                Jetzt Beratungstermin sichern
                <ArrowRight className="w-4 h-4" />
              </StickyCtaButton>
              <p className="text-xs text-gray-400 font-light mt-3">
                Kostenlos &amp; unverbindlich
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE + TECH SECTION */}
      <section className="bg-gray-50">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src="/images/divinia/geraet.jpg"
              alt="DIVINIA Eclibs Body Shaping Technologie - 7 Technologien fuer Abnehmen ohne OP in Saalfelden"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="py-16 md:py-24 px-6 md:px-12 lg:px-20 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gray-400 font-light mb-4 block">
                Schweizer Praezision
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10">
                7 Technologien.
                <br />
                <span className="text-gray-300">Ein Geraet.</span>
              </h2>

              <div className="space-y-4 mb-10">
                {technologien.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-4"
                  >
                    <t.icon className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <span className="text-base md:text-lg font-light text-black">
                      {t.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESULTS -- Emotionaler Block */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gray-400 font-light mb-4 block">
                Deine Verwandlung
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
                Ergebnisse die
                <br />
                <span className="text-gray-300">du siehst und spuerst.</span>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  "Bis zu 30% Fettreduktion im Behandlungsareal",
                  "Sofort spuerbare Hautstraffung",
                  "Kein Skalpell, keine Nadeln, keine Ausfallzeit",
                  "Schmerzfrei und entspannend",
                  "Langanhaltende Resultate",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 bg-black shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-base md:text-lg text-gray-600 font-light">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <StickyCtaButton>
                Jetzt Platz sichern
                <ArrowRight className="w-4 h-4" />
              </StickyCtaButton>
            </motion.div>

            <div className="relative aspect-4/5 md:aspect-3/4 overflow-hidden order-1 md:order-2">
              <Image
                src="/images/divinia/ergebnis.jpg"
                alt="Body Shaping Ergebnisse - Abnehmen und Hautstraffung mit DIVINIA Eclibs bei Skinlux Pinzgau"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF -- Bewertungen */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl">
              Das sagen unsere Kunden
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {bewertungen.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 relative"
              >
                <div className="text-6xl text-gray-100 absolute top-4 left-6 font-serif leading-none">&ldquo;</div>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-6 relative z-10 pt-6">
                  {b.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-light">
                    {b.name.charAt(0)}
                  </div>
                  <span className="text-sm font-light text-black">{b.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY + SCARCITY CTA */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 text-[10px] tracking-[0.2em] uppercase">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Limitierte Plaetze verfuegbar
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6">
              Deine Beratung ist
              <br />
              <span className="text-white/50">kostenlos.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg mx-auto mb-10">
              Unverbindlich. Persoenlich. Dein individueller
              Body-Shaping-Plan fuer sichtbare Ergebnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-light hover:bg-gray-100 transition-all w-full sm:w-auto"
              >
                Beratungstermin sichern
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-5 text-white/80 border border-white/20 text-[11px] tracking-[0.2em] uppercase font-light hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl">
                Haeufige Fragen
              </h2>
            </motion.div>

            {faq.map((item, i) => (
              <FAQItem key={i} frage={item.frage} antwort={item.antwort} index={i} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 md:mt-14 text-center"
            >
              <p className="text-gray-400 font-light mb-4">
                Noch Fragen? Wir beraten dich gerne persoenlich.
              </p>
              <StickyCtaButton>
                Kostenlose Beratung
                <ArrowRight className="w-4 h-4" />
              </StickyCtaButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA -- Letzter Conversion-Push */}
      <section className="py-24 md:py-36 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Award className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-6 text-gray-300" strokeWidth={1} />
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6">
              Bereit fuer dein
              <br />
              neues Koerpergefuehl?
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-md mx-auto mb-10">
              Der erste Schritt ist der einfachste: Buche deine
              kostenlose Erstberatung.
            </p>
            <StickyCtaButton className="text-sm! py-5! px-12!">
              Jetzt starten
              <ArrowRight className="w-4 h-4" />
            </StickyCtaButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-14 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-10">
            <div>
              <Image
                src="/images/logo/skinlux-logo-white.png"
                alt="Skinlux"
                width={120}
                height={34}
                className="h-6 w-auto mb-4"
              />
              <p className="text-sm text-gray-600 font-light">
                Medical Beauty Studio
                <br />
                Pinzgau / Saalfelden
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-light text-white/50 mb-4 tracking-[0.2em] uppercase">
                Kontakt
              </h4>
              <div className="space-y-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-sm text-gray-400 font-light hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-400 font-light">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Leogangerstrasse 12/Top 1c
                    <br />
                    5760 Saalfelden
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-light text-white/50 mb-4 tracking-[0.2em] uppercase">
                Oeffnungszeiten
              </h4>
              <div className="flex items-start gap-3 text-sm text-gray-400 font-light">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Nach Vereinbarung</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-700 font-light">
              &copy; {new Date().getFullYear()} Skinlux Medical Beauty Studio
            </p>
            <div className="flex gap-6">
              <a href="https://www.skinlux.at/pinzgau/impressum" className="text-xs text-gray-700 font-light hover:text-gray-400 transition-colors">
                Impressum
              </a>
              <a href="https://www.skinlux.at/pinzgau/datenschutz" className="text-xs text-gray-700 font-light hover:text-gray-400 transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 safe-area-bottom">
        <div className="flex gap-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-black text-white text-center py-4 text-[11px] tracking-[0.2em] uppercase font-light flex items-center justify-center gap-2"
          >
            Termin sichern
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-black px-5 flex items-center justify-center border-l border-gray-100"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
}
