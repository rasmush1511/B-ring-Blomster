import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { navn, email, besked } = body;

  if (!navn || !email || !besked) {
    return NextResponse.json({ error: "Manglende felter" }, { status: 400 });
  }

  // TODO: integrer Resend, SendGrid eller lignende email-service her
  // Eksempel med Resend:
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'kontakt@baaringblomster.dk',
  //   to: 'info@baaringblomster.dk',
  //   subject: `Ny besked fra ${navn}`,
  //   html: `<p><strong>Fra:</strong> ${navn} (${email})</p><p>${besked}</p>`,
  // });

  console.log("Ny kontaktbesked:", { navn, email, besked });

  return NextResponse.json({ success: true }, { status: 200 });
}
