import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './red_button.module.scss'

interface RedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const RedButton = ({children, ...rest}:RedButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}