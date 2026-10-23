import { Resend } from "resend";
import { serviceContent } from "../../service-content";

const allowedTopics: ReadonlySet<string> = new Set([
  ...serviceContent.services.map((service) => service.title),
  "Sonstige Anfrage zur bestehenden Anlage",
]);

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }
  const fields = body as Record<string, unknown>;
  const limits = { name: 150, telefon: 80, email: 254, ort: 200, anliegen: 150, nachricht: 6000 };
  const values: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = fields[key];
    if ((key !== "ort" || value !== undefined) && typeof value !== "string") {
      return Response.json({ error: "Bitte prüfen Sie Ihre Angaben" }, { status: 400 });
    }
    values[key] = typeof value === "string" ? value.trim() : "";
    if (values[key].length > limit || (key !== "ort" && !values[key])) {
      return Response.json({ error: "Bitte prüfen Sie Ihre Angaben" }, { status: 400 });
    }
  }
  const { name, telefon, email, ort, anliegen, nachricht } = values;
  if (!allowedTopics.has(anliegen) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(name + email + anliegen)) {
    return Response.json({ error: "Bitte prüfen Sie Ihre Angaben" }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Versand derzeit nicht verfügbar" }, { status: 503 });
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Wessel Elektrotechnik <kontakt@wessel-elektrotechnik.de>",
      to: "info@wessel-elektrotechnik.de",
      replyTo: email,
      subject: `Serviceanfrage: ${anliegen} - ${name}`,
      html: `<h2>Neue Serviceanfrage</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Einsatzort:</strong> ${escapeHtml(ort)}</p>
        <p><strong>Anliegen:</strong> ${escapeHtml(anliegen)}</p>
        <p><strong>Anlagentyp und Nachricht:</strong></p>
        <p>${escapeHtml(nachricht).replace(/\r?\n/g, "<br />")}</p>`,
    });
    if (error) {
      return Response.json({ error: "Fehler beim Versand" }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Fehler beim Versand" }, { status: 500 });
  }
}
