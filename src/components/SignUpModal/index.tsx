import ModalBase from "../ModalBase";
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../../components/Input'
import { LabelButton } from '../LabelButton'
import { RedButton } from '../../components/RedButton'
import styles from './sign_up.module.scss'

type SignUpFormData = {
  name: string;
  email: string;
  whatsapp: string;
  city_uf: string;
  password: string; 
  password_confirmation: string
}

const signUpFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  whatsapp: yup.string(),
  city_uf: yup.string().required('Endereço obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

interface SignUpModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function SignUpModal({ isOpen, handleClose }: SignUpModalProps) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpFormSchema)
  })

  const handleSignUp: SubmitHandler<SignUpFormData> = async (values, event) => {
    console.log(values)
  }

  return (
    <ModalBase isOpen={isOpen}>
      <div className={styles.container}>
        <main>
          <div className={styles.infoContainer} >
            <img src="/images/logo.svg" alt="logo"/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            <LabelButton onClick={handleClose} text="Voltar para o login" />
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <Input placeholder="Nome da ONG" type="text" name="name" error={errors.name} {...register('name')} />
              <Input placeholder="Seu Email" type="email" name="email" error={errors.email} {...register('email')} />
              <Input placeholder="Whatsapp" type="tel" name="wpp" error={errors.wpp} {...register('wpp')}/>
              <Input placeholder="Cidade, UF" type="text" name="city_uf" error={errors.city_uf} {...register('city_uf')}/>
              <Input placeholder="Senha" type="password" name="password" error={errors.password} {...register('password')}/>
              <Input placeholder="Repita a senha" type="password" name="password_confirmation" error={errors.password_confirmation} {...register('password_confirmation')}/>
              <div>
                <RedButton type="submit" >
                  Cadastrar
                </RedButton>
              </div>
            </form>
          </div>
        </main>
      </div>
    </ModalBase>
  )
}