import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './cancel_button.module.scss'

interface CancelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const CancelButton = ({children, ...rest}:CancelButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}