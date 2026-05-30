import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, telefon, nachricht } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@wessel-elektrotechnik.de",
      subject: "Neue Kontaktanfrage",
      html: `
        <h2>Neue Kontaktanfrage</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>

        <p><strong>Nachricht:</strong></p>
        <p>${nachricht}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Fehler beim Versand" },
      { status: 500 }
    );
  }
}