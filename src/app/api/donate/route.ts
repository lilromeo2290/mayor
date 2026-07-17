import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { amount, method, recurring } = body || {}

    if (!amount || amount < 1) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }

    // In a real deployment we would call the payment provider here.
    // For this demo we acknowledge and pretend the charge succeeded.
    const methods = ['card', 'momo', 'bank', 'paypal']
    if (!methods.includes(method)) {
      return NextResponse.json({ error: 'Invalid payment method' }, { status: 400 })
    }

    const txnId = 'TXN-' + Math.random().toString(36).slice(2, 10).toUpperCase()

    return NextResponse.json({
      ok: true,
      txnId,
      amount,
      method,
      recurring: Boolean(recurring),
      message: 'Donation processed successfully',
    })
  } catch (e) {
    console.error('donate API error', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
