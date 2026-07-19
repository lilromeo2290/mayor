import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (db) {
      try {
        await db.contactMessage.create({
          data: {
            name: String(name),
            email: String(email),
            phone: String(phone ?? ''),
            subject: String(subject ?? 'general'),
            message: String(message),
          },
        })
      } catch (dbErr) {
        console.warn('DB write failed, continuing:', dbErr)
      }
    }

    return NextResponse.json({ ok: true, message: 'Message received' })
  } catch (e) {
    console.error('contact API error', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
