import Head from 'next/head'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { globalStyles } from '../styles/global'
import { Header } from '../components/Header'

const queryCliente = new QueryClient()

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QueryClientProvider client={queryCliente}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>)
}
