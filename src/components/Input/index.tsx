import { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { //extends all attributes of input (component dom)
  error?: FieldError
}

const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({error = null, name, ...rest}, ref) => {

  return (
    <div className={styles.inputContainer}>
      <input 
        className={styles.input}
        name={name}
        {...rest}
      />
      {!!error &&
        (<label htmlFor={name}>{error.message}</label>)
      }
    </div>
  )
  
}

export const Input = forwardRef(InputBase)