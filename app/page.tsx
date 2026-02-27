"use client";

import { motion, AnimatePresence } from "framer-motion";
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
import { useRef, useState, useEffect, FormEvent } from "react";

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
    text: "Endlich eine Behandlung, die wirklich wirkt. Meine Oberschenkel sind sichtbar straffer.",
  },
  {
    name: "Lisa T.",
    text: "Super professionell, die Ergebnisse sprechen für sich. Kann ich nur empfehlen!",
  },
];

const faq = [
  {
    frage: "Wie schnell sehe ich Ergebnisse beim Abnehmen?",
    antwort:
      "Bereits nach der ersten Body-Shaping-Sitzung mit der DIVINIA Eclibs sind messbare Veränderungen möglich. Viele Kunden berichten von sofort spürbarer Hautstraffung. Optimale Ergebnisse bei der Fettreduktion zeigen sich nach 6-8 Sitzungen im Abstand von 3-5 Tagen.",
  },
  {
    frage: "Ist Abnehmen ohne OP schmerzhaft?",
    antwort:
      "Nein, die DIVINIA Eclibs Behandlung ist komplett schmerzfrei. Die meisten Kunden empfinden die Sitzung als angenehm warm und entspannend -- ähnlich wie eine Massage. Es werden keine Nadeln, kein Skalpell und keine Betäubung benötigt.",
  },
  {
    frage: "Wie lange dauert eine Body-Shaping-Sitzung?",
    antwort:
      "Eine Sitzung dauert ca. 30-45 Minuten. Es gibt keinerlei Ausfallzeit -- du kannst direkt danach wieder deinem Alltag nachgehen, Sport treiben oder arbeiten.",
  },
  {
    frage: "Für wen ist Body Shaping mit DIVINIA Eclibs geeignet?",
    antwort:
      "Die Behandlung eignet sich für alle, die gezielt Fett reduzieren, Haut straffen oder Muskeln aufbauen möchten -- unabhängig von Alter oder Geschlecht. In der kostenlosen Erstberatung bei Skinlux Saalfelden prüfen wir deine individuelle Eignung und erstellen einen persönlichen Behandlungsplan.",
  },
  {
    frage: "Wie viele Behandlungen brauche ich zum Abnehmen?",
    antwort:
      "Das besprechen wir individuell in deiner kostenlosen Erstberatung. Für nachhaltige Fettreduktion empfehlen wir 6-10 Sitzungen. Jede Sitzung baut auf der vorherigen auf -- die 7 Technologien der DIVINIA Eclibs arbeiten dabei synergistisch für optimale Ergebnisse.",
  },
  {
    frage: "Was kostet Body Shaping bei Skinlux?",
    antwort:
      "Die Probebehandlung inkl. Lymphdrainage kostet 79 €, nur Lymphdrainage 39 €. Eine reguläre Einzelbehandlung inkl. Lymphdrainage 179 €, nur Lymphdrainage 79 €. Für nachhaltige Ergebnisse empfehlen wir unsere Blöcke: 10x inkl. Lymph ab 1.399 €, 20x ab 1.999 €. Als Eröffnungsangebot gibt es beim 10er Block 1 Behandlung gratis, beim 20er Block 2 Behandlungen gratis. Die Erstberatung ist immer kostenlos.",
  },
  {
    frage: "Wo finde ich Body Shaping im Pinzgau?",
    antwort:
      "Skinlux Medical Beauty Studio befindet sich in der Leogangerstraße 12/Top 1c in 5760 Saalfelden am Steinernen Meer. Wir sind gut erreichbar für Kunden aus Zell am See, Leogang, Mittersill, Lofer und dem gesamten Pinzgau und Salzburg.",
  },
];

function scrollToForm() {
  document.getElementById("anfrage")?.scrollIntoView({ behavior: "smooth" });
}

function StickyCtaButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      onClick={scrollToForm}
      className={`inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-[11px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-900 w-full sm:w-auto cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

function AnfrageFormular() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interesse: "Body Shaping Beratung",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Fehler beim Senden.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", interesse: "Body Shaping Beratung", message: "" });
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte versuche es erneut.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3
          className="text-2xl md:text-3xl mb-3"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          Anfrage erhalten!
        </h3>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Vielen Dank für dein Interesse. Wir melden uns innerhalb von 24 Stunden bei dir, um deinen persönlichen Beratungstermin zu vereinbaren.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-gray-400 hover:text-black transition-colors tracking-[0.15em] uppercase cursor-pointer"
        >
          Weitere Anfrage senden
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors"
            placeholder="Dein vollständiger Name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-2">
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors"
            placeholder="+43 664 ..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-2">
          E-Mail *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors"
          placeholder="deine@email.at"
        />
      </div>
      <div>
        <label htmlFor="interesse" className="block text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-2">
          Interesse
        </label>
        <select
          id="interesse"
          value={formData.interesse}
          onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors appearance-none"
        >
          <option>Body Shaping Beratung</option>
          <option>Einzelbehandlung</option>
          <option>10er Paket</option>
          <option>Allgemeine Frage</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-2">
          Nachricht (optional)
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors resize-none"
          placeholder="Erzähl uns von deinen Wünschen..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-black text-white py-4.5 text-[11px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          "Wird gesendet..."
        ) : (
          <>
            Kostenlose Beratung anfragen
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-[11px] text-gray-400 text-center">
        Kostenlos &amp; unverbindlich. Wir melden uns innerhalb von 24h.
      </p>
    </form>
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
            <p className="text-gray-600 text-base leading-relaxed pb-6">
              {antwort}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const quizQuestions = [
  {
    question: "Was ist dein Hauptziel?",
    options: [
      { text: "Fett an bestimmten Stellen reduzieren", points: 3 },
      { text: "Haut straffen und Cellulite reduzieren", points: 3 },
      { text: "Muskeln aufbauen und Körper definieren", points: 3 },
      { text: "Allgemein wohler fühlen", points: 2 },
    ],
  },
  {
    question: "Hast du bereits andere Methoden ausprobiert?",
    options: [
      { text: "Ja, Diäten -- ohne dauerhaften Erfolg", points: 3 },
      { text: "Ja, Sport -- aber nicht an den richtigen Stellen", points: 3 },
      { text: "Ja, Cremes und Behandlungen", points: 2 },
      { text: "Nein, das ist mein erster Versuch", points: 2 },
    ],
  },
  {
    question: "Wie viel Zeit hast du pro Woche?",
    options: [
      { text: "Weniger als 1 Stunde", points: 3 },
      { text: "1-2 Stunden", points: 3 },
      { text: "Mehr als 2 Stunden", points: 2 },
    ],
  },
  {
    question: "Was ist dir bei einer Behandlung am wichtigsten?",
    options: [
      { text: "Keine Schmerzen", points: 3 },
      { text: "Keine Ausfallzeit", points: 3 },
      { text: "Schnelle, sichtbare Ergebnisse", points: 3 },
      { text: "Professionelle Betreuung", points: 2 },
    ],
  },
  {
    question: "Wann möchtest du starten?",
    options: [
      { text: "So schnell wie möglich", points: 3 },
      { text: "In den nächsten Wochen", points: 2 },
      { text: "Ich möchte mich erst beraten lassen", points: 2 },
    ],
  },
];

function EignungsCheck() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalQuestions = quizQuestions.length;
  const isStarted = currentStep >= 0;
  const isFinished = currentStep >= totalQuestions;

  const totalPoints = answers.reduce((sum, p) => sum + p, 0);
  const maxPoints = totalQuestions * 3;
  const percentage = Math.round((totalPoints / maxPoints) * 100);

  const handleSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const points = quizQuestions[currentStep].options[selectedOption].points;
    setAnswers([...answers, points]);
    setSelectedOption(null);
    setCurrentStep(currentStep + 1);
  };

  const handleStart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption(null);
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setAnswers([]);
    setSelectedOption(null);
  };

  const getResult = () => {
    if (percentage >= 80) {
      return {
        title: "Perfekter Match!",
        text: "DIVINIA Eclibs Body Shaping ist wie für dich gemacht. Du wirst begeistert sein, was in wenigen Sitzungen möglich ist.",
        cta: "Jetzt Beratungstermin sichern",
      };
    }
    if (percentage >= 60) {
      return {
        title: "Sehr gut geeignet!",
        text: "Body Shaping mit DIVINIA Eclibs passt hervorragend zu deinen Zielen. In der kostenlosen Beratung erstellen wir deinen individuellen Plan.",
        cta: "Kostenlose Beratung buchen",
      };
    }
    return {
      title: "Gute Voraussetzungen!",
      text: "Lass uns in einem persönlichen Gespräch herausfinden, wie wir dir am besten helfen können. Die Erstberatung ist kostenlos.",
      cta: "Unverbindlich beraten lassen",
    };
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isStarted && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4 block">
                  Interaktiver Check
                </span>
                <h2
                  className="text-3xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Ist Body Shaping
                  <br />
                  <span className="text-gray-300">für dich geeignet?</span>
                </h2>
                <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
                  Beantworte 5 kurze Fragen und finde heraus, ob die DIVINIA Eclibs
                  Behandlung zu dir passt.
                </p>
                <button
                  onClick={handleStart}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-4.5 text-[11px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-all"
                >
                  Jetzt Check starten
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-400 mt-4">
                  Dauert nur 30 Sekunden
                </p>
              </motion.div>
            )}

            {isStarted && !isFinished && (
              <motion.div
                key={`q-${currentStep}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs text-gray-400 tracking-widest uppercase">
                    Frage {currentStep + 1} von {totalQuestions}
                  </span>
                  <div className="flex gap-1.5">
                    {quizQuestions.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-8 transition-colors duration-300 ${
                          i <= currentStep ? "bg-black" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-4xl mb-8 md:mb-10"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {quizQuestions[currentStep].question}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[currentStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={`w-full text-left px-6 py-4 md:py-5 border transition-all duration-200 flex items-center gap-4 group ${
                        selectedOption === i
                          ? "border-black bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 border shrink-0 flex items-center justify-center transition-all ${
                          selectedOption === i
                            ? "border-black bg-black"
                            : "border-gray-300 group-hover:border-gray-500"
                        }`}
                      >
                        {selectedOption === i && (
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        )}
                      </span>
                      <span className="text-base md:text-lg text-gray-800">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className={`inline-flex items-center gap-2 px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-all ${
                      selectedOption !== null
                        ? "bg-black text-white hover:bg-gray-900"
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {currentStep < totalQuestions - 1 ? "Weiter" : "Ergebnis anzeigen"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {isFinished && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-8">
                  <div
                    className="text-7xl md:text-9xl font-bold text-black mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {percentage}%
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 mb-6 overflow-hidden">
                    <motion.div
                      className="h-full bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>

                <h3
                  className="text-3xl md:text-5xl mb-4"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {getResult().title}
                </h3>
                <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
                  {getResult().text}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-4.5 text-[11px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-all w-full sm:w-auto cursor-pointer"
                  >
                    {getResult().cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4.5 text-gray-500 border border-gray-200 text-[11px] tracking-[0.2em] uppercase hover:bg-gray-50 transition-all w-full sm:w-auto"
                  >
                    Nochmal starten
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
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

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
          <Image
            src="/images/logo/skinlux-logo.png"
            alt="Skinlux"
            width={160}
            height={44}
            className="h-8 md:h-9 w-auto"
          />
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex items-center gap-2 text-xs text-gray-500 hover:text-black transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE_DISPLAY}
            </a>
            <button
              onClick={scrollToForm}
              className="bg-black text-white px-5 py-2 text-[10px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors cursor-pointer"
            >
              Anfrage senden
            </button>
          </div>
        </div>
      </header>

      {/* HERO -- Split Layout, hell und clean */}
      <section ref={heroRef} className="pt-14 md:pt-16 min-h-svh flex items-stretch">
        <div className="grid md:grid-cols-2 w-full">
          {/* Text-Seite */}
          <div className="flex items-center px-6 sm:px-10 md:px-14 lg:px-20 py-16 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 mb-6 md:mb-8 bg-gray-50 px-4 py-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-[11px] text-gray-500 tracking-[0.2em] uppercase">
                  Body Shaping Weltneuheit im Pinzgau
                </span>
              </div>

              <h1 className="text-[2.5rem] md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-[1.05]">
                Dein Körper.
                <br />
                <span className="text-gray-300">Neu definiert.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 mb-10 md:mb-12 max-w-md leading-relaxed">
                Abnehmen ohne OP. 5 Behandlungen in einer Sitzung.
                7 Technologien. 0 Ausfallzeit. Jetzt in Saalfelden.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-4.5 text-[11px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-all w-full sm:w-auto cursor-pointer"
                >
                  Kostenlose Beratung sichern
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4.5 text-gray-600 border border-gray-200 text-[11px] tracking-[0.2em] uppercase hover:bg-gray-50 transition-all w-full sm:w-auto"
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
                <span className="text-gray-400 text-xs">
                  5.0 &bull; über 150 zufriedene Kunden
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bild-Seite */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative min-h-[50vh] md:min-h-0"
          >
            <Image
              src="/images/divinia/behandlung.jpg"
              alt="Abnehmen ohne OP - DIVINIA Eclibs Body Shaping Behandlung bei Skinlux Saalfelden Pinzgau"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR -- Zahlen die überzeugen */}
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
                <div className="text-xs md:text-sm text-gray-300 tracking-widest uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPATHIE -- Problem emotional ansprechen */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-10">
                Du hast schon
                <br />
                alles versucht.
              </h2>
            </motion.div>

            <div className="space-y-6 md:space-y-8 max-w-xl mx-auto mb-12 md:mb-16">
              {[
                "Diäten, die nichts gebracht haben.",
                "Sport, der nie an den richtigen Stellen wirkt.",
                "Cremes, die nur Geld kosten.",
                "Das Gefühl, dass sich einfach nichts ändert.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl md:text-2xl text-gray-500"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Was wäre, wenn es
                <br />
                <span className="text-black">einen besseren Weg gibt?</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOESUNG -- 5-in-1 */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4 block">
                Die Lösung
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
                5 Behandlungen.
                <br />
                1 Sitzung.
                <br />
                <span className="text-gray-300">0 Kompromisse.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Die DIVINIA Eclibs vereint alles was dein Körper braucht --
                in einer einzigen Behandlung.
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
                  className="flex items-center gap-5 py-5 md:py-6 border-b border-gray-200 group hover:border-gray-400 transition-colors"
                >
                  <span className="text-xs text-gray-300 w-6">{b.emoji}</span>
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
              <p className="text-xs text-gray-500 mt-3">
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
              alt="DIVINIA Eclibs Body Shaping Technologie - 7 Technologien für Abnehmen ohne OP in Saalfelden"
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
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4 block">
                Schweizer Präzision
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10">
                7 Technologien.
                <br />
                <span className="text-gray-300">Ein Gerät.</span>
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
                    <span className="text-base md:text-lg text-black">
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
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4 block">
                Deine Verwandlung
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
                Ergebnisse die
                <br />
                <span className="text-gray-300">du siehst und spürst.</span>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  "Bis zu 30% Fettreduktion im Behandlungsareal",
                  "Sofort spürbare Hautstraffung",
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
                    <span className="text-base md:text-lg text-gray-700">
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
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 relative z-10 pt-6">
                  {b.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">
                    {b.name.charAt(0)}
                  </div>
                  <span className="text-sm text-black">{b.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EIGNUNGS-CHECK -- Interaktives Quiz */}
      <EignungsCheck />

      {/* ABLAUF -- So einfach geht's */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4">
              3 Schritte zu deinem
              <br />
              <span className="text-gray-300">neuen Ich.</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "01",
                title: "Beratung",
                desc: "Du erzählst uns von deinen Wünschen. Wir erstellen deinen persönlichen Behandlungsplan -- kostenlos und unverbindlich.",
              },
              {
                step: "02",
                title: "Behandlung",
                desc: "30 Minuten zurücklehnen und entspannen. 7 Technologien arbeiten gleichzeitig an deinem Körper. Schmerzfrei.",
              },
              {
                step: "03",
                title: "Ergebnis",
                desc: "Bereits nach der ersten Sitzung spürst du den Unterschied. Mit jeder weiteren Behandlung wird er sichtbarer.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center md:text-left"
              >
                <div
                  className="text-6xl md:text-7xl font-bold text-gray-100 mb-4"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {s.step}
                </div>
                <h3
                  className="text-xl md:text-2xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="preise" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4 block">
              Investition in dich
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4">
              Transparente
              <br />
              <span className="text-gray-300">Preise.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-lg mx-auto">
              Alle Preise auf einen Blick &ndash; inkl. MwSt. und ohne versteckte Kosten.
            </p>
          </motion.div>

          {/* Probebehandlung + Pro Behandlung */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-6">
            {/* Probebehandlung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 border border-gray-200"
            >
              <div className="mb-6">
                <h3
                  className="text-2xl md:text-3xl mb-2"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Probebehandlung
                </h3>
                <p className="text-gray-500 text-sm">Ideal zum Kennenlernen</p>
              </div>
              <div className="space-y-0">
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">inkl. Lymphdrainage</span>
                  <div className="text-right">
                    <span
                      className="text-3xl md:text-4xl"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      79
                    </span>
                    <span className="text-base text-gray-400 ml-1">&euro;</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-gray-600 text-sm">nur Lymphdrainage</span>
                  <div className="text-right">
                    <span
                      className="text-3xl md:text-4xl"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      39
                    </span>
                    <span className="text-base text-gray-400 ml-1">&euro;</span>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="block w-full text-center mt-6 py-4 border border-black text-black text-[11px] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                Termin buchen
              </button>
            </motion.div>

            {/* Pro Behandlung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-10 border border-gray-200"
            >
              <div className="mb-6">
                <h3
                  className="text-2xl md:text-3xl mb-2"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Pro Behandlung
                </h3>
                <p className="text-gray-500 text-sm">Einzelsitzung</p>
              </div>
              <div className="space-y-0">
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">inkl. Lymphdrainage</span>
                  <div className="text-right">
                    <span
                      className="text-3xl md:text-4xl"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      179
                    </span>
                    <span className="text-base text-gray-400 ml-1">&euro;</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-gray-600 text-sm">nur Lymphdrainage</span>
                  <div className="text-right">
                    <span
                      className="text-3xl md:text-4xl"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      79
                    </span>
                    <span className="text-base text-gray-400 ml-1">&euro;</span>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="block w-full text-center mt-6 py-4 border border-black text-black text-[11px] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                Termin buchen
              </button>
            </motion.div>
          </div>

          {/* Blöcke */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-4xl mx-auto bg-black text-white p-8 md:p-10 mb-6"
          >
            <div className="mb-8">
              <h3
                className="text-2xl md:text-3xl mb-2"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Blöcke
              </h3>
              <p className="text-gray-400 text-sm">Für nachhaltige Ergebnisse &ndash; zum besten Preis</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-5">
                  inkl. Lymphdrainage
                </p>
                <div className="space-y-0">
                  {[
                    { label: "10x", price: "1.399" },
                    { label: "20x", price: "1.999" },
                    { label: "Jahresabo", price: "4.999" },
                  ].map((item, i, arr) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between py-4 ${i < arr.length - 1 ? "border-b border-gray-700" : ""}`}
                    >
                      <span className="text-gray-300">{item.label}</span>
                      <div>
                        <span
                          className="text-2xl text-white"
                          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                        >
                          {item.price}
                        </span>
                        <span className="text-gray-400 ml-1">&euro;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-5">
                  nur Lymphdrainage
                </p>
                <div className="space-y-0">
                  {[
                    { label: "10x", price: "599" },
                    { label: "20x", price: "999" },
                  ].map((item, i, arr) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between py-4 ${i < arr.length - 1 ? "border-b border-gray-700" : ""}`}
                    >
                      <span className="text-gray-300">{item.label}</span>
                      <div>
                        <span
                          className="text-2xl text-white"
                          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                        >
                          {item.price}
                        </span>
                        <span className="text-gray-400 ml-1">&euro;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-gray-100 transition-all cursor-pointer"
              >
                Paket anfragen
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Eröffnungsangebot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto border-2 border-black bg-white p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-black text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                Eröffnungsangebot
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl mb-2"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Jetzt Bonus sichern
            </h3>
            <p className="text-gray-500 text-sm mb-8">Exklusiv für die Eröffnungsphase</p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-black shrink-0 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-gray-800">10er Block</p>
                  <p className="text-sm text-gray-500">+ 1 Behandlung gratis</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-black shrink-0 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-gray-800">20er Block</p>
                  <p className="text-sm text-gray-500">+ 2 Behandlungen gratis</p>
                </div>
              </div>
            </div>
            <button
              onClick={scrollToForm}
              className="block w-full text-center mt-8 py-4 bg-black text-white text-[11px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-all cursor-pointer"
            >
              Angebot sichern
              <ArrowRight className="w-3.5 h-3.5 inline ml-2" />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 mt-8 max-w-lg mx-auto"
          >
            Alle Preise inkl. MwSt. Die Erstberatung ist immer kostenlos und unverbindlich.
          </motion.p>
        </div>
      </section>

      {/* VERSPRECHEN -- Emotionaler Vertrauens-Block */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-10">
                Unser Versprechen
                <br />
                <span className="text-gray-300">an dich.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12">
              {[
                {
                  title: "Ehrliche Beratung",
                  desc: "Wir sagen dir offen, was möglich ist -- und was nicht. Keine leeren Versprechen.",
                },
                {
                  title: "Dein Tempo",
                  desc: "Kein Druck. Kein Upselling. Du entscheidest, wann und wie oft du kommst.",
                },
                {
                  title: "Sichtbare Ergebnisse",
                  desc: "Wir messen deinen Fortschritt bei jeder Sitzung. Du siehst schwarz auf weiß, was sich verändert.",
                },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <h3
                    className="text-xl md:text-2xl mb-3"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANFRAGE-FORMULAR */}
      <section id="anfrage" className="py-16 md:py-24 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Kostenlos &amp; unverbindlich
              </span>
              <h2
                className="text-3xl md:text-5xl mb-6"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Deine kostenlose
                <br />
                <span className="text-gray-300">Beratung wartet.</span>
              </h2>
              <p className="text-lg text-gray-500 mb-8 max-w-md leading-relaxed">
                Schick uns deine Anfrage und wir melden uns persönlich bei dir,
                um deinen individuellen Body-Shaping-Plan zu besprechen.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "100% kostenlos und unverbindlich" },
                  { icon: Clock, text: "Antwort innerhalb von 24 Stunden" },
                  { icon: Phone, text: "Oder ruf uns direkt an" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <item.icon className="w-4 h-4 text-black shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 mt-6 text-sm text-black hover:text-gray-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-10 shadow-sm"
            >
              <AnfrageFormular />
            </motion.div>
          </div>
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
                Häufige Fragen
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
              <p className="text-gray-500 mb-4">
                Noch Fragen? Wir beraten dich gerne persönlich.
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
              Bereit für dein
              <br />
              neues Körpergefühl?
            </h2>
            <p className="text-lg text-gray-500 max-w-md mx-auto mb-10">
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
      <footer className="pt-10 md:pt-14 pb-24 md:pb-14 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-10">
            <div>
              <Image
                src="/images/logo/skinlux-logo-white.png"
                alt="Skinlux"
                width={140}
                height={40}
                className="h-7 w-auto mb-4"
              />
              <p className="text-sm text-gray-300">
                Medical Beauty Studio
                <br />
                Pinzgau / Saalfelden
              </p>
            </div>
            <div>
              <h4 className="text-[11px] text-white/70 mb-4 tracking-[0.2em] uppercase">
                Kontakt
              </h4>
              <div className="space-y-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Leogangerstraße 12/Top 1c
                    <br />
                    5760 Saalfelden
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] text-white/70 mb-4 tracking-[0.2em] uppercase">
                Öffnungszeiten
              </h4>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Nach Vereinbarung</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Skinlux Medical Beauty Studio
            </p>
            <div className="flex gap-6">
              <a href="/impressum" className="text-xs text-gray-400 hover:text-white transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="text-xs text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 safe-area-bottom">
        <div className="flex gap-0">
          <button
            onClick={scrollToForm}
            className="flex-1 bg-black text-white text-center py-4 text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer"
          >
            Anfrage senden
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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
