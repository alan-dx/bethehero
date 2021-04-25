import styles from './case_card.module.scss'
import { FiTrash2 } from 'react-icons/fi'

export function CaseCard() {
  return (
    <div className={styles.container}>
        <button>
          <FiTrash2 color="#A8A8B3" size={20} />
        </button>
        <div>
          <strong>CASO:</strong>
          <p>Cadelinha atropelada</p>
        </div>
        <div>
          <strong>DESCRIÇÃO:</strong>
          <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</p>
        </div>
        <div>
          <strong>VALOR:</strong>
          <p>R$ 120,00 reais</p>
        </div>
    </div>
  )
}