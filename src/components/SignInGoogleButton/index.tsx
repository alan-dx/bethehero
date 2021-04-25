import { FaGooglePlusG } from "react-icons/fa";
import { ButtonHTMLAttributes } from "react";
import styles from './sign_in_google.module.scss'

export function SignInGoogleButton({...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.container} {...rest}>
      <FaGooglePlusG color="#E02041" size={28} />
    </button>
  )
}