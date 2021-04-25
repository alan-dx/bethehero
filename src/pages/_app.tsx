import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session} >
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
