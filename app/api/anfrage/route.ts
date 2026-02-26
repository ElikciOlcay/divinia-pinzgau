import { NextResponse } from "next/server";

const LOOPS_API_KEY = process.env.LOOPS_API_KEY || "";
const LOOPS_TRANSACTIONAL_ID = process.env.LOOPS_TRANSACTIONAL_ID || "";
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "pinzgau@skinlux.at";

interface AnfrageBody {
  name: string;
  email: string;
  phone: string;
  message?: string;
  interesse?: string;
}

export async function POST(request: Request) {
  try {
    const body: AnfrageBody = await request.json();

    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Name, E-Mail und Telefonnummer sind erforderlich." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse an." },
        { status: 400 }
      );
    }

    const response = await fetch("https://app.loops.so/api/v1/transactional", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOOPS_API_KEY}`,
      },
      body: JSON.stringify({
        transactionalId: LOOPS_TRANSACTIONAL_ID,
        email: NOTIFICATION_EMAIL,
        dataVariables: {
          kundenName: body.name,
          kundenEmail: body.email,
          kundenTelefon: body.phone,
          kundenNachricht: body.message || "Keine Nachricht angegeben",
          kundenInteresse: body.interesse || "Body Shaping Beratung",
          datum: new Date().toLocaleDateString("de-AT", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Fehler beim Senden der Anfrage. Bitte versuche es erneut." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
