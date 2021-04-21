import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../../components/Input'
import { LabelButton } from '../../components/LabelButton'
import { RedButton } from '../../components/RedButton'
import styles from './logon.module.scss'

type SignInFormData = {
  email: string;
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function Logon() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })

  const handleSignIn:SubmitHandler<SignInFormData> = async (values, event) => {
    console.log(values)
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div>
          <img src="/images/logo.svg" alt="Logo"/>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
          <h1>Faça seu logon</h1>
          <Input placeholder="Seu Email" type="email" name="email" error={errors.email} {...register('email')} />
          <Input placeholder="Sua senha" type="password" name='password' error={errors.password} {...register('password')} />
          <div>
            <RedButton type="submit">
              Entrar
            </RedButton>
          </div>
          <LabelButton type="button" text="Não tenho conta" signup onClick={() => {console.log('modal')}} />
        </form>
      </div>

      <img src="/images/peoples.svg" alt="Avatar"/>
    </div>
  )
}