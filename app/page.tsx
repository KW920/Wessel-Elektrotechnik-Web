"use client";

import { useState } from "react";
import {
  Zap,
  House,
  Wrench,
  Sun,
  Car,
  ShieldCheck,
  BarChart3,
  MapPin,
  Handshake,
  BatteryCharging,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function Page() {
  const [name, setName] = useState("");
  const [telefon, setTelefon] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [email, setEmail] = useState("");
  const [ort, setOrt] = useState("");
  const [anliegen, setAnliegen] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white font-sans bg-transparent">

      {/* HEADER */}
      {/* HEADER */}
<header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    {/* LOGO */}
    <a href="#" className="flex items-center shrink-0">
      <img
        src="/logo-night.svg"
        alt="Wessel Elektrotechnik"
        className="h-12 md:h-14 w-auto"
      />
    </a>


    {/* DESKTOP NAVIGATION */}
    <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
      <a
        href="#leistungen"
        className="hover:text-white transition"
      >
        Leistungen
      </a>

      <a
        href="#ablauf"
        className="hover:text-white transition"
      >
        Ablauf
      </a>

      <a
        href="#projekte"
        className="hover:text-white transition"
      >
        Projekte
      </a>

      <a
        href="#kontakt"
        className="hover:text-white transition"
      >
        Kontakt
      </a>
    </nav>


    {/* DESKTOP TELEFON */}
    <a
      href="tel:+4915110195846"
      className="hidden lg:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
    >
      <Phone className="w-4 h-4 text-pink-500" />
      02571 / 123456
    </a>


    {/* DESKTOP BUTTON */}
    <a
      href="#kontakt"
      className="
        hidden md:block
        bg-blue-600
        hover:bg-blue-500
        transition-all duration-300
        px-6 py-3
        rounded-lg
        text-sm font-medium
        shadow-lg shadow-blue-900/20
      "
    >
      Projekt anfragen
    </a>


    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="
        md:hidden
        w-11 h-11
        flex items-center justify-center
        rounded-xl
        border border-white/10
        bg-white/[0.04]
        hover:bg-white/[0.08]
        transition
      "
      aria-label="Menü öffnen"
    >
      {menuOpen ? (
        <X className="w-5 h-5 text-white" />
      ) : (
        <Menu className="w-5 h-5 text-white" />
      )}
    </button>

  </div>


  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="md:hidden border-t border-white/10 bg-[#05070d]/95 backdrop-blur-xl">

      <nav className="px-6 py-6 flex flex-col gap-4 text-gray-300">

        <a
          href="#leistungen"
          onClick={() => setMenuOpen(false)}
          className="py-2 hover:text-white transition"
        >
          Leistungen
        </a>

        <a
          href="#ablauf"
          onClick={() => setMenuOpen(false)}
          className="py-2 hover:text-white transition"
        >
          Ablauf
        </a>

        <a
          href="#projekte"
          onClick={() => setMenuOpen(false)}
          className="py-2 hover:text-white transition"
        >
          Projekte
        </a>

        <a
          href="#kontakt"
          onClick={() => setMenuOpen(false)}
          className="py-2 hover:text-white transition"
        >
          Kontakt
        </a>

        <a
          href="#kontakt"
          onClick={() => setMenuOpen(false)}
          className="
            mt-2
            bg-blue-600
            hover:bg-blue-500
            text-white
            text-center
            py-3
            rounded-xl
            font-medium
            transition
          "
        >
          Projekt anfragen
        </a>

      </nav>

    </div>
  )}

</header>

      {/* HERO */}
<section className="pt-36 pb-24 px-6 relative">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div>
      <p className="text-blue-400 text-xs mb-5 uppercase tracking-wider">
        ELEKTROTECHNIK • FACHBETRIEB AUS GREVEN
      </p>

      <h1 className="text-[42px] sm:text-5xl md:text-[56px] leading-[1.12] font-bold tracking-tight">
  Elektrotechnik, Photovoltaik &
  <span className="text-blue-400"> Wallboxen</span>
  <span className="text-white"> aus einer Hand.</span>
</h1>

      <p className="mt-6 text-gray-300 text-lg leading-relaxed">
        Ihr Fachbetrieb für moderne Elektrotechnik im Münsterland –
        mit 23 Jahren Berufserfahrung in Elektroinstallation,
        Photovoltaik, E-Mobilität und intelligenter Gebäudetechnik.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200">
        <div>✓ 23 Jahre Berufserfahrung</div>
        <div>✓ Eingetragener Fachbetrieb</div>
        <div>✓ Regional im Münsterland</div>
        <div>✓ Persönlicher Ansprechpartner</div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#kontakt"
          className="bg-blue-600 hover:bg-blue-500 transition-all duration-300
           px-7 py-3 rounded-lg text-center font-medium
           shadow-lg shadow-blue-900/20"
        >
          Projekt anfragen
        </a>

        <a
          href="#leistungen"
          className="border border-white/20 hover:border-blue-400 hover:bg-white/5
           transition-all duration-300 px-7 py-3 rounded-lg text-center"
        >
          Unsere Leistungen
        </a>
      </div>
    </div>

    <img
      src="/TransitHero.png"
      alt="Wessel Elektrotechnik Fahrzeug"
      className="hidden md:block w-full max-w-xl rounded-3xl shadow-2xl border border-white/10 bg-black/20
           drop-shadow-[0_0_35px_rgba(37,99,235,0.18)]"
    />
  </div>
</section>
      {/* LEISTUNGEN */}
<section id="leistungen" className="py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl mb-12">Unsere Leistungen</h2>

    <div className="grid md:grid-cols-3 gap-6">

      {[
  {
    title: "Elektroinstallation",
    text: "Elektroinstallationen für Neu- und Altbauten, Modernisierungen sowie Erweiterungen bestehender Anlagen.",
    icon: Zap,
  },
  {
    title: "Photovoltaik",
    text: "Planung, Installation und Anschluss moderner Photovoltaikanlagen für maximale Energieunabhängigkeit.",
    icon: Sun,
  },
  {
    title: "E-Mobilität",
    text: "Wallboxen und intelligente Ladelösungen für private und gewerbliche Elektrofahrzeuge.",
    icon: Car,
  },
  {
    title: "Energiemanagement",
    text: "Intelligente Steuerung von Photovoltaik, Speicher, Wallbox und Hausverbrauch für maximale Effizienz.",
    icon: BarChart3,
  },
  {
    title: "Smart Home",
    text: "Moderne Gebäudeautomation für Licht, Heizung, Beschattung und Energiemanagement.",
    icon: House,
  },
  {
    title: "Kundendienst & Service",
    text: "Schnelle Hilfe bei Störungen, Reparaturen, Wartungen und elektrischen Prüfungen.",
    icon: Wrench,
  },
].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="
  group
  p-6
  rounded-2xl
  border border-white/10
  bg-gradient-to-br from-white/[0.05] to-white/[0.015]
  backdrop-blur-sm
  transition-all duration-300
  hover:-translate-y-1
  hover:border-blue-400/40
  hover:shadow-[0_18px_45px_rgba(0,90,255,0.12)]
"
          >
            <div className="
  w-12 h-12
  mb-5
  rounded-xl
  border border-blue-400/20
  bg-blue-500/10
  flex items-center justify-center
  transition-all duration-300
  group-hover:bg-blue-500/15
  group-hover:border-blue-400/40
">
  <Icon className="w-6 h-6 text-blue-400" />
</div>

            <h3 className="text-xl font-semibold mb-3 tracking-tight">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {item.text}
            </p>
          </div>
          
        );
            })}

    </div>

    
  </div>
</section>
{/* ABLAUF */}
<section id="ablauf" className="py-20 px-6 border-t border-white/10">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl mb-4">So läuft Ihr Projekt ab</h2>

    <p className="text-gray-400 mb-12 max-w-2xl">
      Transparent, persönlich und zuverlässig – von der ersten Anfrage bis zur fertigen Umsetzung.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-gray-400">

      {[
        [
          "01",
          "Unverbindliche Anfrage",
          "Kontaktieren Sie uns telefonisch oder über das Kontaktformular für eine erste Beratung."
        ],
        [
          "02",
          "Individuelle Umsetzung",
          "Wir planen und realisieren Ihr Projekt zuverlässig, sauber und termingerecht."
        ],
        [
          "03",
          "Langfristiger Service",
          "Auch nach der Fertigstellung bleiben wir Ihr Ansprechpartner für Wartung, Service und Erweiterungen."
        ]
      ].map((step, i) => (
        <div
          key={i}
          className="
  group
  relative
  p-7
  rounded-2xl
  border border-white/10
  bg-gradient-to-br from-white/[0.05] to-white/[0.015]
  backdrop-blur-sm
  transition-all duration-300
  hover:-translate-y-1
  hover:border-blue-400/40
  hover:shadow-[0_18px_45px_rgba(0,90,255,0.10)]
"
        >
          <div className="
  w-11 h-11
  mb-5
  rounded-xl
  border border-blue-400/20
  bg-blue-500/10
  flex items-center justify-center
  text-blue-400
  text-sm font-bold
">
  {step[0]}
</div>

          <h3 className="text-white font-semibold mb-3">
            {step[1]}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            {step[2]}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
      {/* PROJEKTE / LEISTUNGSBEREICHE */}
<section id="projekte" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl mb-4">Leistungsbereiche</h2>

    <p className="text-gray-400 mb-12 max-w-2xl">
      Moderne Elektrotechnik aus einer Hand – von der klassischen Installation
      bis zu Photovoltaik, Wallboxen und intelligentem Energiemanagement.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          image: "/TransitHero.png",
          title: "Elektroinstallation",
          text: "Saubere Elektroarbeiten für Neubau, Altbau, Modernisierung und Erweiterung."
        },
        {
          image: "/TransitHero.png",
          title: "Photovoltaik & Speicher",
          text: "Installation und Anschluss moderner Energielösungen für mehr Unabhängigkeit."
        },
        {
          image: "/TransitHero.png",
          title: "Wallboxen & E-Mobilität",
          text: "Fachgerechte Installation von Ladelösungen für Zuhause und Gewerbe."
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
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-5">
            <p className="text-sm text-blue-400 mb-2">
              Wessel Elektrotechnik
            </p>

            <h3 className="text-lg text-white font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {project.text}
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
{/* WARUM WESSEL ELEKTROTECHNIK */}
<section className="py-20 px-6 border-t border-white/10">
  <div className="grid md:grid-cols-4 gap-6">

  {[
    {
      title: "23 Jahre Erfahrung",
      text: "Langjährige Erfahrung in Elektroinstallation und moderner Gebäudetechnik.",
      icon: Zap,
    },
    {
      title: "Regional vor Ort",
      text: "Ihr Ansprechpartner im Münsterland mit kurzen Wegen und persönlichem Kontakt.",
      icon: MapPin,
    },
    {
      title: "Persönliche Betreuung",
      text: "Von der ersten Beratung bis zur Fertigstellung haben Sie einen festen Ansprechpartner.",
      icon: Handshake,
    },
    {
      title: "Moderne Energielösungen",
      text: "Photovoltaik, Speicher, Wallboxen und intelligentes Energiemanagement aus einer Hand.",
      icon: BatteryCharging,
    },
  ].map((item, i) => {
    const Icon = item.icon;

    return (
      <div
        key={i}
        className="
          group
          p-6
          rounded-2xl
          border border-white/10
          bg-gradient-to-br from-white/[0.05] to-white/[0.015]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-400/40
          hover:shadow-[0_18px_45px_rgba(0,90,255,0.10)]
        "
      >
        <div
          className="
            w-11 h-11
            mb-5
            rounded-xl
            border border-blue-400/20
            bg-blue-500/10
            flex items-center justify-center
            transition-all duration-300
            group-hover:bg-blue-500/15
            group-hover:border-blue-400/40
          "
        >
          <Icon className="w-5 h-5 text-blue-400" />
        </div>

        <h3 className="font-semibold mb-3 tracking-tight">
          {item.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {item.text}
        </p>
      </div>
    );
  })}

</div>
</section>
      {/* KONTAKT */}
<section
  id="kontakt"
  className="py-24 px-6 border-t border-white/10"
>
  <div className="max-w-6xl mx-auto">

    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">

      {/* LINKE SEITE */}
      <div className="lg:sticky lg:top-32">

        <p className="text-blue-400 text-xs uppercase tracking-wider mb-4">
          Kontakt
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
          Projekt anfragen
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-md">
          Sie planen ein Projekt rund um Elektrotechnik, Photovoltaik,
          Wallboxen oder Smart Home? Beschreiben Sie mir kurz Ihr Vorhaben –
          ich melde mich persönlich bei Ihnen zurück.
        </p>

        <div className="mt-10 flex flex-col gap-4">

          <a
            href="tel:+4915110195846"
            className="
              group
              flex items-center gap-4
              p-4
              rounded-xl
              border border-white/10
              bg-white/[0.025]
              transition-all duration-300
              hover:border-blue-400/30
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                w-11 h-11
                rounded-xl
                border border-blue-400/20
                bg-blue-500/10
                flex items-center justify-center
              "
            >
              <Phone className="w-5 h-5 text-blue-400" />
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">
                Telefon
              </p>

              <p className="text-sm text-white">
                0151 10195846
              </p>
            </div>
          </a>

          <a
            href="mailto:info@wessel-elektrotechnik.de"
            className="
              group
              flex items-center gap-4
              p-4
              rounded-xl
              border border-white/10
              bg-white/[0.025]
              transition-all duration-300
              hover:border-blue-400/30
              hover:bg-white/[0.04]
            "
          >
            <div
              className="
                w-11 h-11
                rounded-xl
                border border-blue-400/20
                bg-blue-500/10
                flex items-center justify-center
              "
            >
              <Mail className="w-5 h-5 text-blue-400" />
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">
                E-Mail
              </p>

              <p className="text-sm text-white">
                info@wessel-elektrotechnik.de
              </p>
            </div>
          </a>

        </div>
      </div>


      {/* FORMULAR */}
      <div
        className="
          rounded-2xl
          border border-white/10
          bg-gradient-to-br from-white/[0.05] to-white/[0.015]
          backdrop-blur-md
          p-6 md:p-8
          shadow-[0_25px_70px_rgba(0,0,0,0.25)]
        "
      >

        <form
          className="grid gap-5"
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
                ort,
                anliegen,
                nachricht,
              }),
            });

            setLoading(false);

            if (response.ok) {
              setSuccess(true);

              setName("");
              setTelefon("");
              setEmail("");
              setOrt("");
              setAnliegen("");
              setNachricht("");
            }
          }}
        >

          {/* NAME + TELEFON */}
          <div className="grid md:grid-cols-2 gap-4">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                transition
                focus:border-blue-400/50
                focus:bg-black/30
              "
            />

            <input
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              placeholder="Telefon"
              required
              className="
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                transition
                focus:border-blue-400/50
                focus:bg-black/30
              "
            />

          </div>


          {/* EMAIL + ORT */}
          <div className="grid md:grid-cols-2 gap-4">

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-Mail"
              required
              className="
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                transition
                focus:border-blue-400/50
                focus:bg-black/30
              "
            />

            <input
              value={ort}
              onChange={(e) => setOrt(e.target.value)}
              placeholder="Ort / Einsatzort"
              className="
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                transition
                focus:border-blue-400/50
                focus:bg-black/30
              "
            />

          </div>


          {/* ANLIEGEN */}
          <select
            value={anliegen}
            onChange={(e) => setAnliegen(e.target.value)}
            required
            className="
              p-4
              rounded-xl
              bg-black/20
              border border-white/10
              text-gray-300
              outline-none
              transition
              focus:border-blue-400/50
              focus:bg-black/30
            "
          >
            <option value="">
              Anliegen auswählen
            </option>

            <option value="Elektroinstallation">
              Elektroinstallation
            </option>

            <option value="Photovoltaik">
              Photovoltaik
            </option>

            <option value="Wallbox">
              Wallbox
            </option>

            <option value="Smart Home">
              Smart Home
            </option>

            <option value="Energiemanagement">
              Energiemanagement
            </option>

            <option value="Kundendienst">
              Kundendienst
            </option>

            <option value="Sonstiges">
              Sonstiges
            </option>
          </select>


          {/* NACHRICHT */}
          <textarea
            value={nachricht}
            onChange={(e) => setNachricht(e.target.value)}
            placeholder="Beschreiben Sie kurz Ihr Projekt oder Anliegen..."
            required
            className="
              p-4
              min-h-40
              rounded-xl
              bg-black/20
              border border-white/10
              text-white
              placeholder:text-gray-500
              outline-none
              resize-y
              transition
              focus:border-blue-400/50
              focus:bg-black/30
            "
          />


          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-2
              bg-blue-600
              hover:bg-blue-500
              disabled:opacity-60
              disabled:cursor-not-allowed
              py-4
              px-6
              rounded-xl
              font-medium
              transition-all duration-300
              shadow-lg shadow-blue-900/20
            "
          >
            {loading ? "Wird gesendet..." : "Anfrage senden"}
          </button>


          {/* ERFOLG */}
          {success && (
            <p
              className="
                text-green-400
                text-sm
                text-center
                p-4
                rounded-xl
                border border-green-500/20
                bg-green-500/5
              "
            >
              Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.
            </p>
          )}

        </form>

      </div>

    </div>

  </div>
</section>

      {/* FOOTER */}
<footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* LOGO + BESCHREIBUNG */}
      <div className="flex flex-col items-center md:items-start gap-4">

        <img
          src="/logo-night.svg"
          alt="Wessel Elektrotechnik"
          className="h-12 w-auto"
        />

        <p className="text-sm text-gray-500 text-center md:text-left max-w-md leading-relaxed">
          Ihr Fachbetrieb aus Greven für Elektrotechnik, Photovoltaik,
          Wallboxen und moderne Gebäudetechnik im Münsterland.
        </p>

      </div>


      {/* LINKS */}
      <div className="flex flex-col items-center md:items-end gap-4">

        <div className="flex gap-6 text-sm text-gray-400">

          <a
            href="/impressum"
            className="hover:text-blue-400 transition-colors"
          >
            Impressum
          </a>

          <a
            href="/datenschutz"
            className="hover:text-blue-400 transition-colors"
          >
            Datenschutz
          </a>

        </div>

        <p className="text-xs text-gray-600">
          © 2026 Wessel Elektrotechnik
        </p>

      </div>

    </div>

  </div>
</footer>

    </div>
  );
}