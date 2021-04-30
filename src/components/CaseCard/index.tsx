import styles from './case_card.module.scss'
import { FiTrash2 } from 'react-icons/fi'

interface CaseProps {
  data: {
    id: string,
    title: string,
    description: string,
    price: string
  },
  deleteCase: (id?: string) => void
}

export function CaseCard({data, deleteCase}:CaseProps) {
  return (
    <div className={styles.container}>
        <button onClick={() => deleteCase(data.id)}>
          <FiTrash2 color="#A8A8B3" size={20} />
        </button>
        <div>
          <strong>CASO:</strong>
          <p>{data.title}</p>
        </div>
        <div>
          <strong>DESCRIÇÃO:</strong>
          <p>{data.description}</p>
        </div>
        <div>
          <strong>VALOR:</strong>
          <p>R$ {data.price}</p>
        </div>
    </div>
  )
}