import Head from 'next/head'
import Header from '../../components/Header'
import Spinner from '../../components/Spinner'
import PodcastPlayer from '../../components/PodcastPlayer'
import { useRouter } from 'next/router'

import { useGetPodcastByIdFetch } from '../../hooks/useGetPodcastByIdFetch'

function PodcastPage() {
  const {
    query: { podcastId },
  } = useRouter()
  const { state: podcast, loading, error } = useGetPodcastByIdFetch(podcastId)

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
      {podcast.map((podcast) => (
        <>
          <Head>
            <title>{podcast.name} - Supliikki</title>
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>

          <Header />
          {!loading && <PodcastPlayer podcastUrl={podcast.podcast_url} />}
          <div className='bg-[#ec008c] bg-cover bg-center px-[40px] py-[20px] transition-all duration-[0.3s] ease-in-out'>
            <div className='flex justify-center items-center max-w-[1366px] mx-auto'>
              <div className='w-full px-[20px] py-[40px] text-white overflow-hidden m-0'>
                <h1 className='font-[Anteb] font-bold text-4xl'>{podcast.name}</h1>
                <p className='font-[Poppins] text-sm'>{podcast.description}</p>
                <p className='font-[Poppins]'>
                  {podcast.author} &bull; {podcast.publish_date}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </main>
  )
}

export default PodcastPage
