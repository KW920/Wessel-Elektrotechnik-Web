export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10 py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <p className="text-blue-500 text-sm mb-4">
            WESSEL ELEKTROTECHNIK
          </p>

          <h1 className="text-5xl font-bold">
            Datenschutzerklärung
          </h1>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto space-y-16 text-gray-300 leading-relaxed">

          {/* ALLGEMEIN */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4">
              1. Datenschutz auf einen Blick
            </h2>

            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
              informieren wir Sie darüber, welche Daten beim Besuch dieser
              Website erfasst und wie diese verwendet werden.
            </p>
          </section>

          {/* VERANTWORTLICHER */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4">
              2. Verantwortliche Stelle
            </h2>

            <p>
              Wessel Elektrotechnik<br />
              Wolfgang Wessel<br />
              Nordwalder Straße 70<br />
              48268 Greven
            </p>

            <p className="mt-4">
              E-Mail: info@wessel-elektrotechnik.de
            </p>
          </section>

          {/* SERVER LOGS */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4">
              3. Server-Log-Dateien
            </h2>

            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch übermittelt.
            </p>
          </section>

          {/* KONTAKTFORMULAR */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4">
              4. Kontaktformular
            </h2>

            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.
            </p>
          </section>

          {/* RECHTE */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4">
              5. Ihre Rechte
            </h2>

            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            </p>
          </section>

          {/* SSL */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4">
              6. SSL- bzw. TLS-Verschlüsselung
            </h2>

            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung.
            </p>
          </section>

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
              href="/impressum"
              className="hover:text-white transition"
            >
              Impressum
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}