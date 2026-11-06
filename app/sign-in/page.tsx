'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from '@/lib/auth-client'
import styles from './sign-in.module.css'

export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setError('')
    const form = new FormData(event.currentTarget)
    const result = await signIn.email({
      email: String(form.get('email')),
      password: String(form.get('password')),
    })
    if (result.error) {
      setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
      setPending(false)
      return
    }
    router.push('/')
    router.refresh()
  }

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="login-title">
        <div className={styles.logo}>T</div>
        <p className={styles.eyebrow}>TANAIR WORKSPACE</p>
        <h1 id="login-title">เข้าสู่ระบบ</h1>
        <p className={styles.subtitle}>จัดการงานของทีมช่างได้จากที่เดียว</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>อีเมล<input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
          <label>รหัสผ่าน<input name="password" type="password" autoComplete="current-password" required placeholder="••••••••" /></label>
          {error && <p className={styles.error} role="alert">{error}</p>}
          <button type="submit" disabled={pending}>{pending ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}</button>
        </form>
      </section>
    </main>
  )
}
