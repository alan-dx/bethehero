import { ForwardRefRenderFunction, forwardRef, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import styles from './textarea.module.scss'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { //extends all attributes of input (component dom)
  error?: FieldError
}

const TextareaBase:ForwardRefRenderFunction<HTMLTextAreaElement, InputProps> = ({error = null, name, ...rest}, ref) => {

  return (
    <div className={styles.inputContainer}>
      <textarea
        className={styles.input}
        name={name}
        {...rest}
      />
      {!!error 
        ?
        <label htmlFor={name}>Opa! {error.message}</label>
        :
        <label htmlFor={name} style={{visibility: 'hidden'}}>a</label>
      }
    </div>
  )
  
}

export const Textarea = forwardRef(TextareaBase)