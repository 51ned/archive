import { ModalProvider } from '@/components/modal/context'

import '@/styles/global.scss'


export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}
