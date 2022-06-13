import Head from 'next/head'
import Header from '../../components/Header'
import Spinner from '../../components/Spinner'
import { useRouter } from 'next/router'

import { useGetHostByIdFetch } from '../../hooks/useGetHostByIdFetch'

function PodcastPage() {
  const {
    query: { hostId },
  } = useRouter()
  const { state: hosts, loading, error } = useGetHostByIdFetch(hostId)

  if (loading) {
    return (
      <>
        <Head>
          <title>Ladataan...</title>
        </Head>

        <Header />

        <Spinner />
      </>
    )
  }
  if (error) {
    return (
      <>
        <Head>
          <title>Jokin meni vikaan</title>
        </Head>
        <Header />
        <div>Jokin meni vikaan...</div>
      </>
    )
  }

  return (
    <main className="max-w-7xl mx-auto transition-all duration-[0.3s]">
      {hosts.map((host) => (
        <>
          <Head>
            <title>{host.name} - Supliikki</title>
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>

          <Header />
          <div className='bg-[#ec008c] bg-cover bg-center px-[40px] py-[20px] transition-all duration-[0.3s] ease-in-out'>
            <div className='flex justify-center items-center max-w-[1366px] mx-auto'>
              <div className='w-full px-[20px] py-[40px] text-white overflow-hidden m-0'>
                <h1 className='font-[Anteb] font-bold text-4xl'>{host.name}</h1>
                <p className='font-[Poppins] text-sm'>{host.description}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </main>
  )
}

export default PodcastPage
