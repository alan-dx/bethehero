import { LogoutButton } from '../LogoutButton'
import { RedButton } from '../RedButton'
import { useSession } from 'next-auth/client'
import styles from './header.module.scss'

interface HeaderProps {
  handleOpenAddCaseModal: () => void
}

export function Header({handleOpenAddCaseModal}: HeaderProps) {

  const [session] = useSession();
 
  return (
    <header className={styles.container}>
    <div className={styles.infoContainer}>
      <img src="/images/logo.svg" alt="Logo"/>

      <strong>Bem vindo(a), {session?.user.name}</strong>
    </div>
      
    <div className={styles.buttonsContainer} >
      <div>
        <RedButton onClick={handleOpenAddCaseModal} >
          Cadastrar novo caso
        </RedButton>
      </div>
      <LogoutButton />
    </div>
    </header>
  )
}