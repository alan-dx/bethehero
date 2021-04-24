import { ReactNode } from 'react'
import styles from './modal.module.scss'

interface ModalBaseProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function ModalBase({ isOpen, children }: ModalBaseProps) {

  return (
    <>
      <div className={styles.container} style={isOpen ? {display: 'flex'} : {display: 'none'}} >
          <div className={styles.modalContainer}>
              {children}
          </div>
      </div>
    </>
  )
}