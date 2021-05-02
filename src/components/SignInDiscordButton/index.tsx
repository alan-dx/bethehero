import { FaDiscord } from "react-icons/fa";
import { ButtonHTMLAttributes } from "react";
import { signIn } from 'next-auth/client'
import styles from './sign_in_discord.module.scss'

export function SignInDiscordButton({...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {

  const handleSignIn = () => {
    alert('Functionality still under development!')
  }

  return (
    <button onClick={handleSignIn} className={styles.container} {...rest}>
      <FaDiscord color="#E02041" size={24} />
    </button>
  )
}