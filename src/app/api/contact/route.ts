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
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0efe9;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

    <!-- Header -->
    <div style="background:#1a1a1a;padding:28px 32px;text-align:center">
      <p style="margin:0;color:#c8102e;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase">OLI • ABBRUCH</p>
      <p style="margin:6px 0 0;color:#ffffff;font-size:18px;font-weight:700">Neue Kontaktanfrage</p>
    </div>

    <!-- Red accent line -->
    <div style="height:3px;background:#c8102e"></div>

    <!-- Body -->
    <div style="padding:32px">

      <p style="margin:0 0 24px;color:#444444;font-size:14px;line-height:1.6">
        Es ist eine neue Anfrage über das Kontaktformular auf <strong>oliabbruch.de</strong> eingegangen. Details unten:
      </p>

      <!-- Contact details -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        <tr style="border-bottom:1px solid #eeeeee">
          <td style="padding:12px 0;color:#888888;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;width:110px">Name</td>
          <td style="padding:12px 0;color:#1a1a1a;font-size:14px;font-weight:600">${name}</td>
        </tr>
        <tr style="border-bottom:1px solid #eeeeee">
          <td style="padding:12px 0;color:#888888;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px">E-Mail</td>
          <td style="padding:12px 0;font-size:14px"><a href="mailto:${email}" style="color:#c8102e;text-decoration:none;font-weight:600">${email}</a></td>
        </tr>
        <tr>
          <td style="padding:12px 0;color:#888888;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px">Telefon</td>
          <td style="padding:12px 0;color:#1a1a1a;font-size:14px">${phone ? `<a href="tel:${phone}" style="color:#c8102e;text-decoration:none;font-weight:600">${phone}</a>` : '<span style="color:#aaaaaa">Nicht angegeben</span>'}</td>
        </tr>
      </table>

      <!-- Message -->
      <div style="background:#f8f7f4;border-left:4px solid #c8102e;padding:20px 20px 20px 20px;border-radius:0 4px 4px 0">
        <p style="margin:0 0 10px;color:#888888;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px">Nachricht</p>
        <p style="margin:0;color:#1a1a1a;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</p>
      </div>

      <!-- Reply CTA -->
      <div style="margin-top:28px;text-align:center">
        <a href="mailto:${email}" style="display:inline-block;background:#c8102e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 28px;border-radius:3px">
          Direkt antworten →
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f8f7f4;border-top:1px solid #eeeeee;padding:16px 32px;text-align:center">
      <p style="margin:0;color:#aaaaaa;font-size:11px">Gesendet über das Kontaktformular auf oliabbruch.de</p>
    </div>

  </div>
</body>
</html>
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
