import { FiPower } from "react-icons/fi";
import { ButtonHTMLAttributes } from "react";
import { signOut } from 'next-auth/client'

import styles from './logout_button.module.scss'

export function LogoutButton({...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {

  const handleSignIn = () => {
    signOut()
  }

  return (
    <button onClick={handleSignIn} className={styles.container} {...rest}>
      <FiPower color="#E02041" size={24} />
    </button>
  )
}