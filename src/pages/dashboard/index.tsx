import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { CaseCard } from '../../components/CaseCard'
import { Header } from '../../components/Header'
import AddCaseModal from '../../components/AddCaseModal'

import styles from './dashboard.module.scss'
import { useState } from 'react'
import { useCases } from '../../services/hooks/useCases'
import { api } from '../../services/api'
import { useMutation } from 'react-query'
import { queryClient } from '../../services/queryClient'

interface Case {
  id: string,
  title: string,
  description: string,
  price: string
}

export default function Dashboard() {

  const { isLoading, data } = useCases()

  const [isAddCaseModal, setIsAddCaseModal] = useState(false)

  const deleteCase = useMutation(async (id: string) => {
    await api.delete("cases", {
      data: {
        id: id
      }
    })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('cases')
    }
  })

  const handleOpenAddCaseModal = () => {
    setIsAddCaseModal(true)
  }

  const handleCloseAddCaseModal = () => {
    setIsAddCaseModal(false)
  }

  const handleDeleteCase = async (id: string) => {
    await deleteCase.mutateAsync(id)
  }

  return (
    <>
      <AddCaseModal isOpen={isAddCaseModal} handleClose={handleCloseAddCaseModal} />
      <Header handleOpenAddCaseModal={handleOpenAddCaseModal} />
      <main className={styles.container}>
        <h1>Casos cadastrados</h1>
        <div className={styles.casesContainer}>
          {!isLoading && data.cases.map((caseItem: Case) => {
            return (
              <CaseCard key={caseItem.id} data={caseItem} deleteCase={handleDeleteCase} />
            )
          })}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

  const session = await getSession({ req })

  if (!session) {

    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}