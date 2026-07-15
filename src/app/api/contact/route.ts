import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Kontaktformular <no-reply@oliabbruch.de>",
      to: "info@oliabbruch.de",
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#c8102e;border-bottom:2px solid #c8102e;padding-bottom:8px">Neue Kontaktanfrage</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px"><strong>Name:</strong></td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>E-Mail:</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Telefon:</strong></td><td style="padding:8px 0">${phone || "—"}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f5f4f0;border-left:4px solid #c8102e">
            <strong style="color:#2c2c2c">Nachricht:</strong>
            <p style="margin-top:8px;color:#2c2c2c;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:24px;color:#999;font-size:12px">Gesendet über das Kontaktformular auf oliabbruch.de</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}
