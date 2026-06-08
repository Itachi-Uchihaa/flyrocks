import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import {
  buildContactEmailHtml,
  getContactFromAddress,
  getContactRecipient,
  getResendApiKey,
  parseContactPayload,
} from "@/lib/contact";

export async function POST(request: Request) {
  const apiKey = getResendApiKey();
  const from = getContactFromAddress();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });
  }

  const parsed = parseContactPayload(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const to = getContactRecipient();

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: parsed.email,
    subject: `[${SITE.shortName}] Demande de devis — ${parsed.service} — ${parsed.firstname} ${parsed.lastname}`,
    html: buildContactEmailHtml(parsed),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessayez ou appelez-nous directement." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
