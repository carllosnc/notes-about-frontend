import '../styles/variables.scss'
import '../styles/reset.scss'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { CONTENT } from '../content'

i18n.use(initReactI18next).init(CONTENT)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
