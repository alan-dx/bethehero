import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { CaseCard } from '../../components/CaseCard'
import { Header } from '../../components/Header'

import styles from './dashboard.module.scss'

export default function Dashboard() {

  //Verifique a sessão no getServerSideProps, para evitar q o usuário
  //consiga ver a tela ou desabilite o JS pra tentar burlar

  return (
    <>
      <Header />
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