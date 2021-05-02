import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'

import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <Provider session={pageProps.session} >
        <Component {...pageProps} />
      </Provider>
      { process.env.NODE_ENV == 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}

export default MyApp
