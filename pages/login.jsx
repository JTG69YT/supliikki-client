import Head from 'next/head'
import { getProviders, signIn } from "next-auth/react"
import '@material-tailwind/react/tailwind.css'

function Login({ providers }) {
  
  return (
    <main className="max-w-7xl mx-auto transition-all duration-[0.3s]">
      <Head>
        <title>Kirjaudu - Supliikki</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      
      <div className="flex flex-col justify-center items-center w-full bg-[#ec008c] min-h-screen">
        <div className="w-50 h-full space-y-5 p-12 rounded-2xl bg-white">

          {Object.values(providers).map((provider) => (
            <div className='flex justify-center items-center min-h-full' key={provider.name}>
              <button
                className="flex justify-center bg-[#ec008c] font-[Poppins] transition ease-in-out hover:opacity-40 duration-300 text-white p-5 rounded-full"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Kirjaudu palvelun {provider.name} avulla
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Login

export async function getServerSideProps(context) {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}