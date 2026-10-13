import { NextResponse } from "next/server";

const emailValide = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ erreur: "Requête invalide." }, { status: 400 });
  }

  const { nom = "", email = "", message = "" } = body;

  if (!nom.trim() || !message.trim()) {
    return NextResponse.json({ erreur: "Merci de renseigner votre nom et votre projet." }, { status: 400 });
  }
  if (!emailValide(email)) {
    return NextResponse.json({ erreur: "L'adresse e-mail semble invalide." }, { status: 400 });
  }

  // TODO : brancher ici l'envoi réel (Resend, Nodemailer, CRM…).
  console.log("Nouvelle demande de devis :", body);

  return NextResponse.json({
    message: `Merci ${nom.split(" ")[0]} ! Votre demande a bien été reçue, un conseiller vous répond sous 48 h.`,
  });
}
