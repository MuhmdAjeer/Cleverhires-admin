import '../styles/globals.scss'
import { QueryClient,QueryClientProvider } from 'react-query'
import Toaster from '../components/sidebar/Toaster'

const queryClient = new QueryClient({})

function MyApp({ Component, pageProps }) {
  return(
    <>
    <QueryClientProvider client={queryClient} >
      <Toaster/>
      <Component {...pageProps} />
    </QueryClientProvider>
    </>
  )
}

export default MyApp
