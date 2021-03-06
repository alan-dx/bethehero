import ModalBase from "../ModalBase";
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'

import { Input } from '../Input'
import { LabelButton } from '../LabelButton'
import { Textarea } from "../Textarea";
import { RedButton } from '../RedButton'
import { CancelButton } from '../CancelButton'
import styles from './add_case.module.scss'
import { api } from "../../services/api";
import { useSession } from "next-auth/client";
import { queryClient } from "../../services/queryClient";

type CaseFormData = {
  title: string;
  description: string;
  price: string;
}

const caseFormSchema = yup.object().shape({
  title: yup.string().required('Título obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  price: yup.string().required('Valor obrigatório'),
})

interface CaseModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function AddCaseModal({ isOpen, handleClose }: CaseModalProps) {


  const [ session ] = useSession()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(caseFormSchema)
  })

  const createCase = useMutation(async (data: CaseFormData) => {

    const response = await api.post('cases', {
      user_email: session?.user.email,
      case: {...data}
    })
  }, {
    onSuccess: () => {
      handleClose()
      queryClient.invalidateQueries('cases')
    },
    onError: () => {
      alert("Ops! Tivemos um problema ao criar este caso, tente novamente!")
    }
  })

  const handleAddCase: SubmitHandler<CaseFormData> = async (values, event) => {
    await createCase.mutateAsync(values)
  }

  return (
    <ModalBase isOpen={isOpen}>
      <div className={styles.container}>
        <main>
          <div className={styles.infoContainer} >
            <img src="/images/logo.svg" alt="logo"/>
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            <LabelButton onClick={handleClose} text="Voltar para home" />
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(handleAddCase)}>
              <Input placeholder="Título do caso" type="text" name="title" error={errors.title} {...register('title')} />
              <Textarea placeholder="Descrição" name="description" error={errors.description} {...register('description')} />
              <Input placeholder="Valor em reais" type="text" name="price" error={errors.price} {...register('price')}/>
              <div className={styles.buttonsContainer}>
                <CancelButton onClick={handleClose} type="button" >
                  Cancelar
                </CancelButton>
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