"use client";

import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [telefon, setTelefon] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [email, setEmail] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="text-white font-sans bg-transparent">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <div className="flex items-center gap-4">
            <img src="/wessel_logo_dark-Photoroom.png"	className="h-14" />
            
          </div>

          <nav className="hidden md:flex gap-10 text-sm text-gray-300">
            <a href="#leistungen">Leistungen</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#projekte">Projekte</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
            <a
              href="tel:+492571123456"
              className="hidden lg:block text-sm text-gray-300"
              >
             📞 02571 / 123456
            </a>
          <a href="#kontakt" className="bg-blue-600 px-6 py-2 rounded-md text-sm">
            Projekt anfragen
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-blue-400 text-xs mb-6">
              ELEKTROTECHNIK • MEISTERBETRIEB AUS GREVEN
            </p>

            <h1 className="text-5xl md:text-[56px] leading-tight font-bold">
              Elektrotechnik auf höchstem <span className="text-blue-500">Niveau.</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
  Planung, Installation und Wartung – modern, zuverlässig und zukunftssicher.
</p>

<div className="mt-8 flex items-center gap-4">
  <img
    src="/meisterlogo.png"
    alt="Elektromeister"
    className="h-12 md:h-14"
  />

  <div>
    <p className="text-sm font-medium text-white">
      Meisterbetrieb für Elektrotechnik
    </p>
    <p className="text-xs text-gray-400">
      Fachgerechte Ausführung nach Meisterstandard
    </p>
  </div>
</div>

<div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="bg-blue-600 px-7 py-3 rounded-md">
                Projekt anfragen
              </a>

              <a href="#leistungen" className="border border-white/20 px-7 py-3 rounded-md">
                Unsere Leistungen
              </a>
            </div>
          </div>

          
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl mb-12">Unsere Leistungen</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Elektroinstallation - ob Alt- oder Neubau, wir sind der richtige Ansprechpartner",
              "Smart Home",
              "Kundendienst",
              "Photovoltaik",
              "E-Mobilität",
              "E-Check"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#0b1220] rounded-xl border border-white/10">
                <img src="/wessel_icon_dark-Photoroom.png" className="w-20	mb-4" />
                <h3>{item}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>
{/* ABLAUF */}
      <section id="ablauf" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl mb-12">So läuft Ihr Projekt ab</h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-400">

            {[
              ["01", "Beratung", "Wir besprechen Ihr Projekt und finden die beste Lösung."],
              ["02", "Umsetzung", "Fachgerechte Installation durch unseren Meisterbetrieb."],
              ["03", "Service", "Auch danach stehen wir Ihnen jederzeit zur Verfügung."]
            ].map((step, i) => (
              <div key={i}>
                <div className="text-blue-500 text-xl mb-2">{step[0]}</div>
                <h3 className="text-white font-semibold mb-2">{step[1]}</h3>
                <p className="text-sm">{step[2]}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROJEKTE */}
<section id="projekte" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl mb-12">Unsere Projekte</h2>

    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          image: "/project1.jpg",
          title: "Neubau Einfamilienhaus"
        },
        {
          image: "/project2.jpg",
          title: "Smart Home Installation"
        },
        {
          image: "/project3.jpg",
          title: "Photovoltaik Anlage"
        },
        {
          image: "/project4.jpg",
          title: "Industrieverkabelung"
        },
        {
          image: "/project5.jpg",
          title: "Wallbox Installation"
        },
        {
          image: "/project6.jpg",
          title: "Modernes Beleuchtungskonzept"
        },
      ].map((project, i) => (
        <div
          key={i}
          className="group rounded-xl overflow-hidden border border-white/10 bg-[#0b1220]"
        >

          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              onClick={() => {
  const image = document.getElementById(
    "lightbox-image"
  ) as HTMLImageElement | null;

  const title = document.getElementById(
    "lightbox-title"
  ) as HTMLElement | null;

  const lightbox = document.getElementById(
    "lightbox"
  ) as HTMLElement | null;

  if (image && title && lightbox) {
    (image as HTMLImageElement).src = project.image;
    title.innerText = project.title;
    lightbox.classList.remove("hidden");
  }
}}
              className="h-48 w-full object-cover cursor-pointer transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-300 font-medium">
              {project.title}
            </p>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>

{/* LIGHTBOX */}
<div
  id="lightbox"
  className="hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
  onClick={() => {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.classList.add("hidden");
  }
}}
>

  <div className="relative max-w-6xl w-full flex flex-col items-center">

    <img
      id="lightbox-image"
      className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
    />

    <p
      id="lightbox-title"
      className="mt-6 text-white text-lg"
    ></p>

    {/* CLOSE BUTTON */}
    <button
      className="absolute -top-4 right-0 text-white text-5xl"
      onClick={() => {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.classList.add("hidden");
  }
}}
    >
      ×
    </button>

  </div>

</div>
      {/* KONTAKT */}
<section id="kontakt" className="py-24 px-6">
  <div className="text-center mb-8">
  <a href="tel:+4915110195846">
    📞 0151 10195846
  </a>

  <br />

  <a href="mailto:info@wessel-elektrotechnik.de">
    ✉️ info@wessel-elektrotechnik.de
  </a>
</div>
    
      <div className="max-w-xl mx-auto">

    <h2 className="text-3xl mb-6 text-center">
      Kontakt
    </h2>

    <form
      className="grid gap-4"
      onSubmit={async (e) => {
        e.preventDefault();

        setLoading(true);

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            telefon,
            email,
            nachricht,
          }),
        });

        setLoading(false);

        if (response.ok) {
          setSuccess(true);

          setName("");
          setTelefon("");
          setNachricht("");
        }
      }}
    >

      <input
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Name"
  required
  className="p-4 bg-[#0b1220] rounded"
/>

<input
  value={telefon}
  onChange={(e) => setTelefon(e.target.value)}
  placeholder="Telefon"
  required
  className="p-4 bg-[#0b1220] rounded"
/>

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  type="email"
  placeholder="E-Mail"
  required
  className="p-4 bg-[#0b1220] rounded"
/>

      <textarea
        value={nachricht}
        onChange={(e) => setNachricht(e.target.value)}
        placeholder="Nachricht"
        required
        className="p-4 bg-[#0b1220] rounded h-32"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 py-3 rounded hover:bg-blue-500 transition"
      >
        {loading ? "Wird gesendet..." : "Anfrage senden"}
      </button>

      {success && (
        <p className="text-green-500 text-center">
          Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.
        </p>
      )}

    </form>

  </div>
</section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">

  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-sm text-gray-500">

    <p>
      © 2026 Wessel Elektrotechnik
    </p>

    <div className="flex flex-col items-center gap-2">

      <a
        href="tel:+4915110195846"
        className="hover:text-white transition"
      >
        📞 0151 10195846
      </a>

      <a
        href="mailto:info@wessel-elektrotechnik.de"
        className="hover:text-white transition"
      >
        ✉️ info@wessel-elektrotechnik.de
      </a>

    </div>

    <div className="flex gap-6">

      <a
        href="/impressum"
        className="hover:text-white transition"
      >
        Impressum
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

    </div>
  );
}