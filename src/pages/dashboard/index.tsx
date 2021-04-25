import { GetServerSideProps } from 'next'
import { signOut, getSession } from 'next-auth/client'
import { useEffect } from 'react'

export default function Dashboard() {

  //Verifique a sessão no getServerSideProps, para evitar q o usuário
  //consiga ver a tela ou desabilite o JS pra tentar burlar

  return (
    <h1>
      DASHBOARD
      <button onClick={() => signOut()} >
        SignOut
      </button>
    </h1>
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