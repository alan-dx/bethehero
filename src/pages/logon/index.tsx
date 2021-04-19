import { Input } from '../../components/Input'
import { LabelButton } from '../../components/LabelButton'
import { RedButton } from '../../components/RedButton'
import styles from './logon.module.scss'

export default function Logon() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div>
          <img src="/images/logo.svg" alt="Logo"/>
        </div>

        <form className={styles.form} onSubmit={() => console.log('submit')}>
          <h1>Faça seu logon</h1>
          <Input placeholder="Sua ID" type="email" name="email" />
          <Input placeholder="Sua senha" type="password" />
          <div>
            <RedButton type="submit">
              Entrar
            </RedButton>
          </div>
          {/* Bug: Ta chamando o submit */}
          <LabelButton type="button" text="Não tenho conta" signup onClick={() => {console.log('modal')}} />
        </form>
      </div>

      <img src="/images/peoples.svg" alt="Avatar"/>
    </div>
  )
}