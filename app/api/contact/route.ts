import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, telefon, mail, nachricht } = await req.json();

    const data = await resend.emails.send({
      from: "Wessel Elektrotechnik <kontakt@wessel-elektrotechnik.de>",
      to: "info@wessel-elektrotechnik.de",
      replyTo: mail,
      subject: "Neue Kontaktanfrage",
      html: `
        <h2>Neue Kontaktanfrage</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>E-Mail:</strong> ${mail}</p>

        <p><strong>Nachricht:</strong></p>
        <p>${nachricht}</p>
      `,
    });

    console.log("RESEND RESPONSE:", data);

    return Response.json(data);
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return Response.json(
      { error: "Fehler beim Versand" },
      { status: 500 }
    );
  }
}