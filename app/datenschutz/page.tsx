import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutz | Skinlux Medical Beauty Studio Pinzgau",
  description:
    "Datenschutzerklärung von Skinlux Medical Beauty Studio Pinzgau, Saalfelden.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
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
            Datenschutz &amp; Privatsphäre
          </h1>

          <div className="space-y-10 md:space-y-14">
            <section>
              <h2
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
                }}
              >
                Datenschutzerklärung
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir haben diese Datenschutzerklärung (Fassung 01.12.2024)
                verfasst, um Ihnen gemäß der Vorgaben der
                Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche
                Informationen wir sammeln und wie wir Daten verwenden.
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
                Verantwortliche Stelle
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
                    5760 Saalfelden am Steinernen Meer, Österreich
                  </span>
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
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                  <a
                    href="tel:+436644568454"
                    className="hover:text-black transition-colors"
                  >
                    0664 / 45 68 454
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
                Automatische Datenspeicherung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Wenn Sie unsere Website besuchen, werden automatisch
                  Informationen allgemeiner Natur erfasst. Diese Informationen
                  (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das
                  verwendete Betriebssystem, den Domainnamen Ihres
                  Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
                </p>
                <p>
                  Diese werden insbesondere zu folgenden Zwecken verarbeitet:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Gewährleistung eines problemlosen Verbindungsaufbaus der
                    Website
                  </li>
                  <li>
                    Gewährleistung einer reibungslosen Nutzung unserer Website
                  </li>
                  <li>Auswertung der Systemsicherheit und -stabilität</li>
                  <li>Zur Optimierung unserer Website</li>
                </ul>
                <p>
                  Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre
                  Person zu ziehen. Informationen dieser Art werden von uns
                  statistisch ausgewertet, um unseren Internetauftritt und die
                  dahinterstehende Technik zu optimieren.
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
                Cookies
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Unsere Website verwendet Cookies. Das sind kleine
                  Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.
                  Cookies helfen uns dabei, unser Angebot nutzerfreundlicher,
                  effektiver und sicherer zu machen.
                </p>
                <p>
                  Einige Cookies sind &bdquo;Session-Cookies.&ldquo; Solche
                  Cookies werden nach Ende Ihrer Browser-Sitzung von selbst
                  gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät
                  bestehen, bis Sie diese selbst löschen.
                </p>
                <p>
                  Mit einem modernen Webbrowser können Sie das Setzen von
                  Cookies überwachen, einschränken oder unterbinden.
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
                Kontaktformular &amp; Terminbuchung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Treten Sie bzgl. Fragen jeder Art per E-Mail oder
                  Kontaktformular mit uns in Kontakt, erteilen Sie uns zum
                  Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung.
                </p>
                <p>
                  Für die Terminbuchung erheben wir folgende personenbezogenen
                  Daten:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Vor- und Nachname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Gewünschte Behandlung</li>
                  <li>Wunschtermin</li>
                </ul>
                <p>
                  Diese Daten werden ausschließlich zur Terminkoordination und
                  Durchführung der Behandlung verwendet. Eine Weitergabe an
                  Dritte erfolgt nicht.
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
                Ihre Rechte
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten
                  grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
                  Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch
                  zu.
                </p>
                <p>
                  Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
                  Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
                  Ansprüche sonst in einer Weise verletzt worden sind, können
                  Sie sich bei uns (
                  <a
                    href="mailto:pinzgau@skinlux.at"
                    className="underline hover:text-black transition-colors"
                  >
                    pinzgau@skinlux.at
                  </a>
                  ) oder der Datenschutzbehörde beschweren.
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
                SSL-Verschlüsselung
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und
                an dem Schloss-Symbol in Ihrer Browserzeile.
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
                Speicherdauer
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Wir speichern personenbezogene Daten nur so lange, wie dies
                  zur Erfüllung der verfolgten Zwecke erforderlich ist oder
                  sofern gesetzliche Aufbewahrungsfristen bestehen.
                </p>
                <p>
                  Kontaktdaten aus dem Kontaktformular werden nach Bearbeitung
                  Ihrer Anfrage gelöscht, sofern keine gesetzlichen
                  Aufbewahrungsfristen bestehen.
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
                Änderungen
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                damit sie stets den aktuellen rechtlichen Anforderungen
                entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt
                dann die neue Datenschutzerklärung.
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
