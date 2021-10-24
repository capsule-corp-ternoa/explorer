import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import intlConfig from './intl'


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <IntlProvider {...intlConfig}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default App
