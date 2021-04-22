import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../../components/Input'
import { LabelLink } from '../../components/LabelLink'
import { RedButton } from '../../components/RedButton'
import styles from './signin.module.scss'

type SignInFormData = {
  email: string;
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })

  const handleSignIn:SubmitHandler<SignInFormData> = async (values, event) => {
    console.log(values)
    console.log('awsq')
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div>
          <img src="/images/logo.svg" alt="Logo"/>
        </div>

        <main className={styles.formContainer} id="main">
          <h1>Faça seu login</h1>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input placeholder="Seu Email" type="email" name="email" error={errors.email} {...register('email')} />
            <Input placeholder="Sua senha" type="password" name='password' error={errors.password} {...register('password')} />
            <div>
              <RedButton type="submit">
                Entrar
              </RedButton>
            </div>
          </form>
          <LabelLink text="Não tenho conta" signup href="signup" />
        </main>
      </div>
      <img src="/images/peoples.svg" alt="Avatar"/>
    </div>
  )
}