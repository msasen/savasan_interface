/* eslint-disable import/no-unresolved */
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@store/index'
import '../styles/index.less'

function MyApp({ Component, pageProps }: AppProps) {
  // const defaultLocale = navigator.language

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
