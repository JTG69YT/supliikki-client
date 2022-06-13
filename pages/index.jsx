import Head from 'next/head'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Link from 'next/link'

import { usePromoFetch } from '../hooks/usePromoFetch'
import { useHomeFetch } from '../hooks/useHomeFetch'

const Home = () => {
  const {
    state: promoItem,
    loading: promoItemsLoading,
    error: promoItemsError,
  } = usePromoFetch()
  const {
    state: podcast,
    loading: podcastsLoading,
    error: podcastsError,
  } = useHomeFetch()

  if (promoItemsLoading && podcastsLoading) {
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
  if (promoItemsError && podcastsError) {
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
    <>
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>Supliikki - Podcasteja kellon ympäri</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />

        {!promoItemsLoading && promoItem[0] ? (
          <>
            <a href={promoItem[0].link} target="_blank">
              <div
                className={`flex cursor-pointer items-center justify-between py-32 lg:py-0 bg-[#1741ef] transition-all duration-150 ease-in-out hover:opacity-50`}
              >
                <div className="space-y-5 px-10">
                  <h1 className="max-w-xl font-[Anteb] font-extrabold text-5xl text-white">
                    {promoItem[0].name}
                  </h1>
                  <h2 className="max-w-xl font-[Poppins] font-normal text-white">
                    {promoItem[0].description}
                  </h2>
                </div>

                <img
                  className="hidden m-32 md:inline md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg shadow-2xl"
                  src={`${promoItem[0].thumbnail_url}`}
                  alt=""
                />
              </div>
            </a>
          </>
        ) : null}
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {podcast.map((podcast) => (
            <Link key={podcast.id} href={`/podcast/${podcast.id}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-md">
                <img
                  className="w-full object-contain transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={`${podcast.thumbnail_url}`}
                  alt=""
                />
                <div className="flex items-center justify-between bg-white p-5">
                  <div>
                    <h1 className="text-lg font-[Poppins] font-bold">
                      {podcast.name}
                    </h1>
                    <p className="text-xs font-[Poppins]">{podcast.author}</p>
                  </div>

                  <img
                    className="h-12 w-12 rounded-full"
                    src={`${podcast.profile_picture}`}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
