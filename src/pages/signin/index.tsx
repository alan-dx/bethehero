import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import { Input } from '../../components/Input'
import { LabelButton } from '../../components/LabelButton'
import { RedButton } from '../../components/RedButton'
import styles from './signin.module.scss'
import SignUpModal from '../../components/SignUpModal'
import { SignInGitHubButton } from '../../components/SignInGitHubButton'
import { SignInGoogleButton } from '../../components/SignInGoogleButton'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { SignInDiscordButton } from '../../components/SignInDiscordButton'
import { SignInFacebookButton } from '../../components/SignInFacebookButton'

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
    alert('Functionality still under development!')

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
              <div className={styles.buttonContainer}>
                <RedButton type="submit">
                  Entrar
                </RedButton>
              </div>
            </form>
            <div className={styles.oAuthContainer}>
              <SignInGitHubButton />
              <SignInGoogleButton />
              <SignInDiscordButton />
              <SignInFacebookButton />
            </div>
            <LabelButton text="Não tenho conta" signup onClick={handleOpenSignUpModal} />
          </main>
        </div>
        <img src="/images/peoples.svg" alt="Avatar"/>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {

  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}