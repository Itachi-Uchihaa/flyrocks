import { SITE } from "./site";

export type ContactPayload = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function parseContactPayload(body: unknown): ContactPayload | { error: string } {
  if (!body || typeof body !== "object") {
    return { error: "Données invalides." };
  }

  const data = body as Record<string, unknown>;

  const firstname = trimField(data.firstname, 80);
  const lastname = trimField(data.lastname, 80);
  const email = trimField(data.email, 254);
  const phone = trimField(data.phone, 30);
  const service = trimField(data.service, 80);
  const message = trimField(data.message, 5000);

  if (!firstname || !lastname || !email || !phone) {
    return { error: "Veuillez remplir tous les champs obligatoires." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Adresse email invalide." };
  }

  return { firstname, lastname, email, phone, service: service || "Non précisé", message };
}

function trimField(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function buildContactEmailHtml(payload: ContactPayload): string {
  const rows = [
    ["Prénom", payload.firstname],
    ["Nom", payload.lastname],
    ["Email", payload.email],
    ["Téléphone", payload.phone],
    ["Prestation", payload.service],
    ["Message", payload.message || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e8e4de;font-weight:600;color:#4a4642;vertical-align:top;width:140px">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e8e4de;color:#141414">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;color:#141414">
      <p style="margin:0 0 16px;font-size:16px">Nouvelle demande de contact via <strong>${SITE.shortName}</strong>.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e8e4de;border-radius:8px;overflow:hidden">${tableRows}</table>
      <p style="margin:16px 0 0;font-size:13px;color:#4a4642">Répondez directement à cet email pour contacter le client.</p>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Configuration Resend — modifier ici si besoin */
export const CONTACT_CONFIG = {
  resendApiKey: "re_RuGu9XWY_HveUXx2Aq8Wi8SYCmTibWyYZ",
  /** Expéditeur : onboarding@resend.dev en test, contact@flyrocks.fr une fois le domaine vérifié */
  from: "FLYROCKS <onboarding@resend.dev>",
  /** Destinataire des demandes du formulaire */
  to: "patrickzola39@yahoo.fr",
} as const;

export function getContactRecipient(): string {
  return CONTACT_CONFIG.to;
}

export function getContactFromAddress(): string {
  return CONTACT_CONFIG.from;
}

export function getResendApiKey(): string {
  return CONTACT_CONFIG.resendApiKey;
}
