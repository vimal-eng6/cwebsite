import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!company || !company.trim()) {
      return NextResponse.json({ error: "Company name is required." }, { status: 400 });
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long." }, { status: 400 });
    }

    // Simulate database write / network email delay (800ms)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Logging the submission on the server
    console.log("----------------------------------------");
    console.log("NEW CALDIM LEAD GENERATION SUBMISSION:");
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Message: ${message}`);
    console.log("----------------------------------------");

    /* 
      ==================================================================
      HOW TO CONNECT TO REAL EMAIL SERVICES (RESEND OR SENDGRID)
      ==================================================================
      
      1. Install the SDK:
         npm install resend
         
      2. Import and initialize with your API Key:
         import { Resend } from 'resend';
         const resend = new Resend(process.env.RESEND_API_KEY);
         
      3. Replace the simulated delay with the send call:
         await resend.emails.send({
           from: 'Caldim Portal <leads@caldim.com>',
           to: 'info@caldim.com',
           subject: `New Lead from ${company} - ${name}`,
           html: `
             <h3>New Contact Request</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company:</strong> ${company}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>
           `
         });
    */

    return NextResponse.json({ success: true, message: "Lead submitted successfully." }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
  }
}
