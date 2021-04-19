import { ButtonHTMLAttributes } from 'react'
import { FiLogIn, FiArrowLeft } from 'react-icons/fi'

import styles from './label_button.module.scss'

interface LabelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text?: string;
  signup?: boolean;
  onClick: () => void;
}

export function LabelButton({text, signup = false, onClick, ...rest}: LabelButtonProps) {
  return (
    <button className={styles.container} onClick={onClick}>
        <>
        {
          signup ? <FiLogIn size={18} color="#E02041" /> : <FiArrowLeft size={18} color="#E02041" />
        }

          <strong>{text}</strong>
        </>
    </button>
  )
}