
import { NextResponse } from 'next/server'

/**
 * Contact Form API Route
 *
 * Option 1: Formspree (recommended for launch — no backend needed)
 * Option 2: Resend (if you want full control)
 * Option 3: Nodemailer with SMTP
 *
 * Currently configured for Formspree.
 * Replace FORMSPREE_FORM_ID with your actual form ID from formspree.io
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID' // Replace with your Formspree form ID

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, concern, ageGroup, message, howFound } = body

    // Validate required fields
    if (!name || !email || !concern) {
      return NextResponse.json(
        { error: 'Name, email, and concern are required' },
        { status: 400 }
      )
    }

    // ─── Option 1: Formspree (simplest — recommended for launch) ───
    // Sign up at formspree.io, create a form pointing to care@bioheal.co.in
    // Replace YOUR_FORM_ID above with your actual form ID

    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'Not provided',
        concern,
        ageGroup: ageGroup || 'Not specified',
        message: message || 'No additional message',
        howFound: howFound || 'Not specified',
        _subject: `New BioHeal Inquiry: ${concern}`,
        _replyto: email,
      }),
    })

    if (!formspreeResponse.ok) {
      throw new Error('Formspree submission failed')
    }

    return NextResponse.json({ success: true })

    // ─── Option 2: Resend (more control, needs API key) ───────────
    // npm install resend
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    //
    // await resend.emails.send({
    //   from: 'BioHeal Website <noreply@bioheal.co.in>',
    //   to: 'care@bioheal.co.in',
    //   replyTo: email,
    //   subject: `New Inquiry: ${concern} — ${name}`,
    //   html: `
    //     <h2>New BioHeal Inquiry</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>For:</strong> ${ageGroup || 'Not specified'}</p>
    //     <p><strong>Concern:</strong> ${concern}</p>
    //     <p><strong>Message:</strong> ${message || 'None'}</p>
    //     <p><strong>Found via:</strong> ${howFound || 'Not specified'}</p>
    //   `,
    // })

    // ─── Option 3: Nodemailer (SMTP — most flexible) ──────────────
    // npm install nodemailer
    //
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    //
    // await transporter.sendMail({
    //   from: '"BioHeal Website" <noreply@bioheal.co.in>',
    //   to: 'care@bioheal.co.in',
    //   replyTo: email,
    //   subject: `New Inquiry: ${concern} — ${name}`,
    //   html: `...`,
    // })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

