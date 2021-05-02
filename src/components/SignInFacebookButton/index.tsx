import { FiFacebook } from "react-icons/fi";
import { ButtonHTMLAttributes } from "react";
import { signIn } from 'next-auth/client'
import styles from './sign_in_facebook.module.scss'

export function SignInFacebookButton({...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {

  const handleSignIn = () => {
    alert('Functionality still under development!')
  }

  return (
    <button onClick={handleSignIn} className={styles.container} {...rest}>
      <FiFacebook color="#E02041" size={24} />
    </button>
  )
}