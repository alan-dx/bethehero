import styles from './landing.module.scss'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Landing() {

  const router = useRouter()
  const [session] = useSession()
 
  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    } else if (!session) {
      router.push('/signin')
    }
  }, [session])

  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <img src="/images/logo_white.svg" alt="Logo" />
      </div>
    </div>
  )
}
