import Head from 'next/head'
import Header from '../components/Header'

function Login() {
  return (
    <main className="max-w-7xl mx-auto transition-all duration-[0.3s]">
      <Head>
        <title>Kirjaudu - Supliikki</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Header />
    </main>
  )
}

export default Login
