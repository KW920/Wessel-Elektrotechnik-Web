"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceContent } from "./service-content";
import {
  Search, Wrench, CircuitBoard, Settings2, MapPin, Handshake,
  Phone, Mail, Menu, X, Check,
} from "lucide-react";

const serviceIcons = { search: Search, wrench: Wrench, circuit: CircuitBoard, settings: Settings2 };

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
  const [error, setError] = useState("");

  return (
    <div className="text-white font-sans bg-transparent">

      {/* HEADER */}
<header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    {/* LOGO */}
    <a href="#" className="flex items-center shrink-0">
      <Image
        width={1535}
        height={346}
        unoptimized
        src="/Wessel_Elektrotechnik_night.svg"
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
        href="#anlagenservice"
        className="hover:text-white transition"
      >
        Anlagenservice
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
      0151 / 10195846
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
      Service anfragen
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
      aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
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

      <nav id="mobile-navigation" className="px-6 py-6 flex flex-col gap-4 text-gray-300">

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
          href="#anlagenservice"
          onClick={() => setMenuOpen(false)}
          className="py-2 hover:text-white transition"
        >
          Anlagenservice
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
          Service anfragen
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
        ANLAGENSERVICE • GREVEN
      </p>

      <h1 className="text-[30px] min-[390px]:text-[34px] sm:text-5xl md:text-[30px] lg:text-[42px] xl:text-[50px] leading-[1.12] font-bold tracking-tight hyphens-auto break-words">
  Service für
  <span className="block text-blue-400">TEWE &amp; TELL</span>
  <span className="block text-white">Fütterungsanlagen.</span>
</h1>

      <p className="mt-6 text-gray-300 text-lg leading-relaxed">
        Fehlersuche, Reparatur und Instandhaltung an bestehenden Anlagen.
        Als eigenständiges Unternehmen bin ich Ihr direkter Ansprechpartner –
        von der Anfrage bis zur Abrechnung.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200">
        {serviceContent.benefits.map((benefit) => <div key={benefit}>✓ {benefit}</div>)}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#kontakt"
          className="bg-blue-600 hover:bg-blue-500 transition-all duration-300
           px-7 py-3 rounded-lg text-center font-medium
           shadow-lg shadow-blue-900/20"
        >
          Service anfragen
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

    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-black/30 p-7 md:p-10 shadow-2xl">
      <div className="flex items-center justify-between gap-4 mb-10">
        <p className="text-blue-400 text-xs uppercase tracking-[0.2em]">Bestehende Anlagen</p>
        <CircuitBoard className="w-8 h-8 text-blue-400" aria-hidden="true" />
      </div>
      <p className="text-3xl md:text-4xl font-semibold tracking-tight">Technik verstehen.<br />Störungen beheben.</p>
      <div className="mt-8 space-y-0">
        {serviceContent.services.map((service, index) => (
          <div key={service.id} className="flex items-center gap-4 border-t border-white/10 py-4">
            <span className="text-xs text-blue-400 font-mono">0{index + 1}</span>
            <span className="text-sm text-gray-200">{service.shortTitle}</span>
            <Check className="ml-auto h-4 w-4 text-blue-400 shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-400">TEWE- &amp; TELL-Fütterungsanlagen</p>
    </div>
  </div>
</section>
      {/* LEISTUNGEN */}
<section id="leistungen" className="py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl mb-12">Unsere Leistungen</h2>

    <div className="grid sm:grid-cols-2 gap-6">

      {serviceContent.services.map((item) => {
        const Icon = serviceIcons[item.icon];

        return (
          <div
            key={item.id}
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

    <h2 className="text-3xl mb-4">So läuft Ihr Serviceauftrag ab</h2>

    <p className="text-gray-400 mb-12 max-w-2xl">
      Direkter Kontakt, klare Abstimmung und eine Rechnung von Wessel Elektrotechnik.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-gray-400">

      {serviceContent.steps.map((step, i) => (
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
      <section id="anlagenservice" className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="mb-12">
      <p className="text-blue-400 text-xs uppercase tracking-[0.2em] mb-4">Anlagenservice</p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">Ein direkter Ansprechpartner.<br />Für Ihre bestehende Anlage.</h2>
      <p className="text-gray-400 max-w-3xl text-base md:text-lg leading-relaxed">
        Mein Angebot richtet sich an Betreiber bestehender TEWE- und TELL-Fütterungsanlagen.
        Im Mittelpunkt stehen die Fehlersuche, die Instandhaltung und die Wiederinbetriebnahme nach einer Reparatur.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {serviceContent.focus.map((item) => (
        <div key={item.title} className="p-7 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] backdrop-blur-sm">
          <CircuitBoard className="w-8 h-8 text-blue-400 mb-6" aria-hidden="true" />
          <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
          <div className="w-12 h-[2px] bg-blue-500 mb-5" />
          <p className="text-gray-400 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
    <p className="mt-8 text-sm text-gray-400 max-w-3xl leading-relaxed">
      Ich arbeite als eigenständiges Unternehmen. Auftrag und Abrechnung erfolgen direkt zwischen Ihnen und Wessel Elektrotechnik.
    </p>
  </div>
</section>
{/* WARUM WESSEL ELEKTROTECHNIK */}
<section className="py-20 px-6 border-t border-white/10">
  <div className="grid md:grid-cols-4 gap-6">

  {[
    {
      title: "Bestehende Anlagen",
      text: "Service mit Fokus auf TEWE- und TELL-Fütterungsanlagen.",
      icon: CircuitBoard,
    },
    {
      title: "Regional vor Ort",
      text: "Ihr Ansprechpartner aus Greven. Den Einsatzort und die Anfahrt stimmen wir persönlich ab.",
      icon: MapPin,
    },
    {
      title: "Persönliche Betreuung",
      text: "Von der ersten Anfrage bis zum Abschluss Ihres Serviceauftrags haben Sie einen festen Ansprechpartner.",
      icon: Handshake,
    },
    {
      title: "Direkte Abrechnung",
      text: "Sie beauftragen Wessel Elektrotechnik und erhalten Ihre Rechnung direkt von mir.",
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

    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">

      {/* LINKE SEITE */}
      <div className="lg:sticky lg:top-32">

        <p className="text-blue-400 text-xs uppercase tracking-wider mb-4">
          Kontakt
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
          Service anfragen
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-md">
          Sie benötigen Unterstützung an Ihrer bestehenden TEWE- oder TELL-Fütterungsanlage?
          Nennen Sie mir den Anlagentyp, Ihren Standort und das Anliegen.
          Ich melde mich persönlich zur weiteren Abstimmung.
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

            if (loading) return;
            setLoading(true);
            setSuccess(false);
            setError("");
            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, telefon, email, ort, anliegen, nachricht }),
              });
              if (!response.ok) throw new Error("Versand fehlgeschlagen");
              setSuccess(true);
              setName(""); setTelefon(""); setEmail(""); setOrt(""); setAnliegen(""); setNachricht("");
            } catch {
              setError("Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich telefonisch.");
            } finally {
              setLoading(false);
            }
          }}
        >

          {/* NAME + TELEFON */}
          <div className="grid md:grid-cols-2 gap-4">

            <input
              aria-label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
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
              aria-label="Telefon"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              type="tel"
              autoComplete="tel"
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
              aria-label="E-Mail"
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
              aria-label="Ort / Einsatzort"
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
            aria-label="Anliegen"
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

            {serviceContent.services.map((service) => (
              <option key={service.id} value={service.title}>{service.title}</option>
            ))}
            <option value="Sonstige Anfrage zur bestehenden Anlage">Sonstige Anfrage zur bestehenden Anlage</option>
          </select>


          {/* NACHRICHT */}
          <textarea
            aria-label="Anlagentyp und Anliegen"
              value={nachricht}
            onChange={(e) => setNachricht(e.target.value)}
            placeholder="Anlagentyp, Fehlerbild und Anliegen – bitte keine Passwörter oder Zugangsdaten angeben."
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


          <p className="text-xs text-gray-400 leading-relaxed">
            Ihre Angaben verwende ich zur Bearbeitung Ihrer Anfrage. Weitere Informationen finden Sie in der <Link href="/datenschutz" className="text-blue-400 underline underline-offset-4">Datenschutzerklärung</Link>.
          </p>
          {error && <p role="alert" className="text-red-300 text-sm p-4 rounded-xl border border-red-400/20 bg-red-400/5">{error}</p>}
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
              role="status"
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

        <Image
          width={1535}
          height={346}
          unoptimized
          src="/Wessel_Elektrotechnik_night.svg"
          alt="Wessel Elektrotechnik"
          className="h-12 w-auto"
        />

        <p className="text-sm text-gray-500 text-center md:text-left max-w-md leading-relaxed">
          Ihr eigenständiger Ansprechpartner aus Greven für Service,
          Reparatur und Instandhaltung bestehender TEWE- und TELL-Fütterungsanlagen.
        </p>

      </div>


      {/* LINKS */}
      <div className="flex flex-col items-center md:items-end gap-4">

        <div className="flex gap-6 text-sm text-gray-400">

          <Link
            href="/impressum"
            className="hover:text-blue-400 transition-colors"
          >
            Impressum
          </Link>

          <Link
            href="/datenschutz"
            className="hover:text-blue-400 transition-colors"
          >
            Datenschutz
          </Link>

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