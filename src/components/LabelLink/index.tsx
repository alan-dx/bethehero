import Link, { LinkProps } from 'next/link'
import { FiLogIn, FiArrowLeft } from 'react-icons/fi'

import styles from './label_link.module.scss'

interface LabelLinkProps extends LinkProps {
  text?: string;
  signup?: boolean;
}

export function LabelLink({text, signup = false, ...rest}: LabelLinkProps) {
  return (
    <Link {...rest}>
      <div className={styles.container}>
          <>
          {
            signup ? <FiLogIn size={18} color="#E02041" /> : <FiArrowLeft size={18} color="#E02041" />
          }

            <strong>{text}</strong>
          </>
      </div>
    </Link>
  )
}