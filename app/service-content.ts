// Aktuell freigegebene Leistungsinhalte. Künftige Angebote erst nach separater Freigabe ergänzen.
export const serviceContent = {
  benefits: ["Bestehende Anlagen", "TEWE & TELL", "Direkte Beauftragung", "Persönlicher Ansprechpartner"],
  services: [
    { id: "fehlersuche", title: "Fehlersuche & Störungsbeseitigung", shortTitle: "Fehlersuche & Störungsbeseitigung", text: "Analyse und Behebung von Störungen an bestehenden Industrieanlagen – mit Fokus auf TEWE- und TELL-Fütterungsanlagen.", icon: "search" },
    { id: "wartung", title: "Wartung & Instandhaltung", shortTitle: "Wartung & Instandhaltung", text: "Wartungs- und Instandhaltungsarbeiten an Ihren bestehenden Anlagen. Umfang und Termin stimmen wir individuell ab.", icon: "wrench" },
    { id: "komponenten", title: "Austausch defekter Komponenten", shortTitle: "Elektrische & elektronische Komponenten", text: "Austausch defekter Schütze, Relais, Netzteile, Frequenzumrichter und Steuerungscomputer an bestehenden Anlagen.", icon: "circuit" },
    { id: "steuerung", title: "Programmierung & Wiederinbetriebnahme", shortTitle: "Programmierung & Wiederinbetriebnahme", text: "Parametrierung, Programmierung und Wiederinbetriebnahme der bestehenden Anlage nach erfolgter Reparatur.", icon: "settings" },
  ],
  steps: [
    ["01", "Anlage und Anliegen beschreiben", "Nennen Sie mir Ihren Anlagentyp, den Einsatzort und das Fehlerbild – telefonisch oder über das Kontaktformular."],
    ["02", "Serviceumfang abstimmen", "Wir klären das Anliegen, den möglichen Leistungsumfang und einen passenden Termin. Sie beauftragen mich direkt."],
    ["03", "Service und Abrechnung", "Ich führe die vereinbarten Arbeiten durch und stimme die weiteren Schritte mit Ihnen ab. Die Rechnung erhalten Sie direkt von Wessel Elektrotechnik."],
  ],
  focus: [
    { title: "Anlage & Fehlerbild", text: "Eine genaue Beschreibung des Fehlerbilds und vorhandener Meldungen hilft dabei, den Serviceeinsatz vorzubereiten." },
    { title: "Komponenten & Steuerung", text: "Von Schützen und Relais bis zu Frequenzumrichtern und Steuerungscomputern: Im Fokus steht die bestehende Anlagentechnik." },
    { title: "Nach der Reparatur", text: "Erforderliche Parametrierung, Programmierung und Wiederinbetriebnahme werden im Rahmen des vereinbarten Reparaturauftrags durchgeführt." },
  ],
} as const;
