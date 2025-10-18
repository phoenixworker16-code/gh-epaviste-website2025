export type RecaptchaVerifyResult = {
  success: boolean
  score?: number
  action?: string
  hostname?: string
  challenge_ts?: string
  [key: string]: unknown
}

export async function verifyRecaptchaToken(token: string): Promise<{ ok: boolean; score?: number; raw?: RecaptchaVerifyResult }> {
  const secret = process.env.RECAPTCHA_SECRET
  if (!secret || !token) {
    return { ok: false }
  }

  const params = new URLSearchParams()
  params.append('secret', secret)
  params.append('response', token)

  try {
    const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
    const data = (await resp.json()) as RecaptchaVerifyResult
    const ok = !!data.success
    const score = typeof data.score === 'number' ? data.score : undefined
    return { ok, score, raw: data }
  } catch (e) {
    console.error('Erreur vérification reCAPTCHA:', e)
    return { ok: false }
  }
}