import '../styles/globals.css'
import '../components/PodcastPlayer/PodcastPlayer.styles.css'
import '../public/nprogress.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { GlobalStyle } from '../GlobalStyle'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyle />
      </SessionProvider>
    </>
  )
}

export default MyApp
