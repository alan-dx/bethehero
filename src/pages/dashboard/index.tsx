import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { CaseCard } from '../../components/CaseCard'
import { Header } from '../../components/Header'
import AddCaseModal from '../../components/AddCaseModal'

import styles from './dashboard.module.scss'
import { useState } from 'react'

export default function Dashboard() {

  const [isAddCaseModal, setIsAddCaseModal] = useState(false)

  const handleOpenAddCaseModal = () => {
    setIsAddCaseModal(true)
  }

  const handleCloseAddCaseModal = () => {
    setIsAddCaseModal(false)
  }

  return (
    <>
      <AddCaseModal isOpen={isAddCaseModal} handleClose={handleCloseAddCaseModal} />
      <Header handleOpenAddCaseModal={handleOpenAddCaseModal} />
      <main className={styles.container} >
        <h1>Casos cadastrados</h1>
        <div className={styles.casesContainer}>
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
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