import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Skinlux Medical Beauty Studio Pinzgau",
  description:
    "Impressum und rechtliche Informationen von Skinlux Medical Beauty Studio Pinzgau, Saalfelden.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
          <Link href="/">
            <Image
              src="/images/logo/skinlux-logo.png"
              alt="Skinlux"
              width={100}
              height={28}
              className="h-5 md:h-6 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Zurück
          </Link>
        </div>
      </header>

      <div className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1
            className="text-3xl md:text-5xl mb-10 md:mb-14"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            }}
          >
            Impressum
          </h1>

          <div className="space-y-10 md:space-y-14">
            <section>
              <p className="text-sm text-gray-500 mb-6">
                Informationspflicht laut &sect;5 E-Commerce Gesetz, &sect;14
                Unternehmensgesetzbuch, &sect;63 Gewerbeordnung und
                Offenlegungspflicht laut &sect;25 Mediengesetz.
              </p>
            </section>

            <section>
              <h2
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                }}
              >
                Kontaktdaten
              </h2>
              <p className="text-gray-800 mb-1 font-medium">
                Skinlux Pinzgau
              </p>
              <p className="text-gray-700 mb-4">Fatma Suna</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                  <span>
                    Leogangerstraße 12 Top 1c
                    <br />
                    5760 Saalfelden am Steinernen Meer
                    <br />
                    Österreich
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                  <a
                    href="tel:+436644568454"
                    className="hover:text-black transition-colors"
                  >
                    0664 / 45 68 454
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0 text-gray-400" />
                  <a
                    href="mailto:pinzgau@skinlux.at"
                    className="hover:text-black transition-colors"
                  >
                    pinzgau@skinlux.at
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                }}
              >
                Unternehmensdaten
              </h2>
              <dl className="space-y-2 text-gray-700">
                <div>
                  <dt className="text-gray-500 text-sm">
                    Unternehmensgegenstand
                  </dt>
                  <dd>Kosmetik (Laserhaarentfernung)</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-sm">UID-Nr</dt>
                  <dd>ATU 67694907</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-sm">Mitglied bei</dt>
                  <dd>WKO, Landesinnung</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-sm">
                    Aufsichtsbehörde/Gewerbebehörde
                  </dt>
                  <dd>Bezirkshauptmannschaft Zell am See</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-sm">Berufsbezeichnung</dt>
                  <dd>Spezialistin für dauerhafte Haarentfernung</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-sm">Verleihungsstaat</dt>
                  <dd>Österreich</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-sm">Berufsrecht</dt>
                  <dd>
                    Gewerbeordnung:{" "}
                    <a
                      href="https://www.ris.bka.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-black transition-colors"
                    >
                      www.ris.bka.gv.at
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                }}
              >
                EU-Streitschlichtung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Gemäß Verordnung über Online-Streitbeilegung in
                  Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie
                  über die Online-Streitbeilegungsplattform (OS-Plattform)
                  informieren.
                </p>
                <p>
                  Verbraucher haben die Möglichkeit, Beschwerden an die Online
                  Streitbeilegungsplattform der Europäischen Kommission unter{" "}
                  <a
                    href="http://ec.europa.eu/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors"
                  >
                    http://ec.europa.eu/odr
                  </a>{" "}
                  zu richten.
                </p>
                <p>
                  Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit
                  oder verpflichtet sind, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                }}
              >
                Haftung für Inhalte
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir entwickeln die Inhalte dieser Webseite ständig weiter und
                bemühen uns korrekte und aktuelle Informationen bereitzustellen.
                Leider können wir keine Haftung für die Korrektheit aller
                Inhalte auf dieser Webseite übernehmen, speziell für jene die
                seitens Dritter bereitgestellt wurden. Sollten Ihnen
                problematische oder rechtswidrige Inhalte auffallen, bitten wir
                Sie uns umgehend zu kontaktieren.
              </p>
            </section>

            <section>
              <h2
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                }}
              >
                Urheberrecht
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
                unterliegen dem Urheberrecht. Falls notwendig, werden wir die
                unerlaubte Nutzung von Teilen der Inhalte unserer Seite
                rechtlich verfolgen.
              </p>
            </section>

            <div className="pt-6 border-t border-gray-100">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
