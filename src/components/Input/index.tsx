import { InputHTMLAttributes } from 'react'
import styles from './input.module.scss'


export const Input = ({name ,...rest}:InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.inputContainer}>
      {/* <label htmlFor={name}>{name}</label> */}
      <input 
        className={styles.input} 
        {...rest} 
      />
    </div>
  )
}