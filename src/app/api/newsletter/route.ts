import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body || {}

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (db) {
      try {
        await db.newsletter.upsert({
          where: { email: String(email) },
          create: { email: String(email) },
          update: { email: String(email) },
        })
      } catch (dbErr) {
        console.warn('DB write failed, continuing:', dbErr)
      }
    }

    return NextResponse.json({ ok: true, message: 'Subscribed' })
  } catch (e) {
    console.error('newsletter API error', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
