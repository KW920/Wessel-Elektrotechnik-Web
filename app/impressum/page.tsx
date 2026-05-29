export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10 py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <p className="text-blue-500 text-sm mb-4">
            WESSEL ELEKTROTECHNIK
          </p>

          <h1 className="text-5xl font-bold">
            Impressum
          </h1>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto space-y-16 text-gray-300 leading-relaxed">

          {/* ANGABEN */}
          <div>

            <h2 className="text-2xl text-white font-semibold mb-6">
              Angaben gemäß § 5 TMG
            </h2>

            <div className="space-y-2">

              <p>
                Wessel Elektrotechnik
              </p>

              <p>
                Wolfgang Wessel
              </p>

              <p>
                Nordwalder Straße 70
              </p>

              <p>
                48268 Greven
              </p>

            </div>

          </div>

          {/* KONTAKT */}
          <div>

            <h2 className="text-2xl text-white font-semibold mb-6">
              Kontakt
            </h2>

            <div className="space-y-2">

              <p>
                Telefon: 0151 / 10195846
              </p>

              <p>
                E-Mail: info@wessel-elektrotechnik.de
              </p>

            </div>

          </div>

          {/* UMSATZSTEUER */}
          <div>

            <h2 className="text-2xl text-white font-semibold mb-6">
              Umsatzsteuer-ID
            </h2>

            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>

            <p className="mt-2">
              DE123456789
            </p>

          </div>

          {/* VERANTWORTLICHER */}
          <div>

            <h2 className="text-2xl text-white font-semibold mb-6">
              Verantwortlich für den Inhalt
            </h2>

            <p>
              Wolfgang Wessel
            </p>

          </div>

          {/* STREITSCHLICHTUNG */}
          <div>

            <h2 className="text-2xl text-white font-semibold mb-6">
              EU-Streitschlichtung
            </h2>

            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
            </p>

            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition break-all"
            >
              https://ec.europa.eu/consumers/odr/
            </a>

            <p className="mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

          </div>

          {/* VERBRAUCHERSTREITBEILEGUNG */}
          <div>

            <h2 className="text-2xl text-white font-semibold mb-6">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>

            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

          </div>

        </div>

      </section>

      {/* ZURÜCK BUTTON */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto">

          <a
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-medium shadow-lg shadow-blue-600/20"
          >
            ← Zur Startseite
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">

          <p>
            © 2026 Wessel Elektrotechnik
          </p>

          <div className="flex gap-6">

            <a
              href="/"
              className="hover:text-white transition"
            >
              Startseite
            </a>

            <a
              href="/datenschutz"
              className="hover:text-white transition"
            >
              Datenschutz
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}