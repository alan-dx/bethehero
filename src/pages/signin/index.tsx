import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import { Input } from '../../components/Input'
import { LabelButton } from '../../components/LabelButton'
import { RedButton } from '../../components/RedButton'
import styles from './signin.module.scss'
import SignUpModal from '../../components/SignUpModal'
import { OAuthButton } from '../../components/OAuthButton'
import { FaGithub, FaGooglePlusG } from 'react-icons/fa'

type SignInFormData = {
  email: string;
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })

  const handleSignIn:SubmitHandler<SignInFormData> = async (values, event) => {
    console.log(values)

  }

  const handleOpenSignUpModal = () => {
    setIsSignUpModalOpen(true)
  }

  const handleCloseSignUpModal = () => {
    setIsSignUpModalOpen(false)
  }

  return (
    <>
      <SignUpModal isOpen={isSignUpModalOpen} handleClose={handleCloseSignUpModal} />
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
            <div className={styles.oAuthContainer}>
              <OAuthButton onClick={() => console.log('github')} >
                <FaGithub color="#E02041" size={22} />
              </OAuthButton>
              <OAuthButton>
                <FaGooglePlusG color="#E02041" size={28} />
              </OAuthButton>
            </div>
            <LabelButton text="Não tenho conta" signup onClick={handleOpenSignUpModal} />
          </main>
        </div>
        <img src="/images/peoples.svg" alt="Avatar"/>
      </div>
    </>
  )
}