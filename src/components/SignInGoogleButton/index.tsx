import { FaGooglePlusG } from "react-icons/fa";
import { ButtonHTMLAttributes } from "react";
import { signIn } from 'next-auth/client'
import styles from './sign_in_google.module.scss'

export function SignInGoogleButton({...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {

  const handleSignIn = () => {
    signIn('google')
  }

  return (
    <button onClick={handleSignIn} className={styles.container} {...rest}>
      <FaGooglePlusG color="#E02041" size={28} />
    </button>
  )
}