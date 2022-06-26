import Head from 'next/head'
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

          <div
            className={`flex items-center justify-between h-screen w-full py-32 lg:py-0 bg-[#1741ef]`}
          >
            <div className="space-y-5 px-10">
              <h1 className="max-w-xl font-[Anteb] font-extrabold text-5xl text-white">
                {hosts[0].name}
              </h1>
              <h2 className="max-w-xl whitespace-pre-wrap font-[Poppins] font-normal text-white">
                {hosts[0].description}
              </h2>
            </div>

            <img
              className="hidden m-32 md:inline md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg shadow-2xl"
              src={hosts[0].host_image}
              alt=""
            />
          </div>
        </>
      ))}
    </main>
  )
}

export default PodcastPage
