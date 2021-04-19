import styles from './landing.module.scss'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <img src="/images/logo_white.svg" alt="Logo" />
      </div>
    </div>
  )
}
