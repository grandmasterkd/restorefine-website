import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    const emailContent = `
      New Contact Form Submission for Resto-Enquire

      Selected Service: ${data.service}
      Service Type: ${data.serviceType}
      Budget Range: ${data.budget}
      Timeline: ${data.timeline}

      Contact Information:
      -------------------
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      State: ${data.state}

      Message:
      ${data.message}
    `

    const { data: emailData, error } = await resend.emails.send({
      from: 'Resto-Enquire <onboarding@resend.dev>',
      to: 'thewqmps@gmail.com',
      subject: 'New Contact Form Submission - Resto-Enquire',
      text: emailContent,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data: emailData })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

