import { FaGithub } from "react-icons/fa";
import { ButtonHTMLAttributes } from "react";
import { signIn } from 'next-auth/client'

import styles from './sign_in_github.module.scss'

export function SignInGitHubButton({...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {

  const handleSignIn = () => {
    signIn('github')
  }

  return (
    <button onClick={handleSignIn} className={styles.container} {...rest}>
      <FaGithub color="#E02041" size={22} />
    </button>
  )
}