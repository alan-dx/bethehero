import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './o_auth_button.module.scss'

interface OAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function OAuthButton({ children, ...rest }: OAuthButtonProps) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  )
}