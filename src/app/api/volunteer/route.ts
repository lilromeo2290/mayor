import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, region, constituency, availability, skills, interests, message } = body || {}

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (db) {
      try {
        await db.volunteer.create({
          data: {
            name: String(name),
            phone: String(phone),
            email: String(email),
            region: String(region ?? ''),
            constituency: String(constituency ?? ''),
            availability: String(availability ?? ''),
            skills: Array.isArray(skills) ? skills.join(', ') : String(skills ?? ''),
            interests: Array.isArray(interests) ? interests.join(', ') : String(interests ?? ''),
            message: String(message ?? ''),
          },
        })
      } catch (dbErr) {
        console.warn('DB write failed, continuing:', dbErr)
      }
    }

    return NextResponse.json({ ok: true, message: 'Volunteer application received' })
  } catch (e) {
    console.error('volunteer API error', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
