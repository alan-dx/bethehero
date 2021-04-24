import { ButtonHTMLAttributes } from 'react'
import { FiLogIn, FiArrowLeft } from 'react-icons/fi'

import styles from './label_button.module.scss'

interface LabelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  signup?: boolean;
}

export function LabelButton({text, signup = false, ...rest}: LabelButtonProps) {
  return (
    <button className={styles.container} {...rest}>
      <>
        {
          signup ? <FiLogIn size={18} color="#E02041" /> : <FiArrowLeft size={18} color="#E02041" />
        }

        <strong>{text}</strong>
      </>
    </button>
  )
}