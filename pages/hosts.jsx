import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

function Hosts() {
  return (
    <main className="max-w-7xl mx-auto transition-all duration-[0.3s]">
      <Head>
        <title>Juontajat - Supliikki</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Header />

      <a
        href={'https://jesunmaailma.ml/wp-content/uploads/2022/06/logo.png'}
        target="_blank"
      >
        <div
          className={`flex cursor-pointer items-center justify-between py-32 lg:py-0 bg-[#1741ef] transition-all duration-150 ease-in-out hover:opacity-50`}
        >
          <div className="space-y-5 px-10">
            <h1 className="max-w-xl font-[Anteb] font-extrabold text-5xl text-white">
              Moi!
            </h1>
            <h2 className="max-w-xl font-[Poppins] font-normal text-white">
              Tämä on testi.
            </h2>
          </div>

          <img
            className="hidden m-32 md:inline md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg shadow-2xl"
            src={`https://jesunmaailma.ml/wp-content/uploads/2022/06/logo.png`}
            alt=""
          />
        </div>
      </a>

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        <Link href={`/host/1`} target="_blank">
          <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-md">
            <img
              className="w-full object-contain transition-transform duration-200 ease-in-out group-hover:scale-105"
              src={`https://jesunmaailma.ml/wp-content/uploads/2022/06/logo.png`}
              alt=""
            />
            <div className="flex items-center justify-between bg-white p-5">
              <div>
                <h1 className="text-lg font-[Poppins] font-bold">Moi!</h1>
                <p className="text-xs font-[Poppins]">Tämä on testi</p>
              </div>

              <img
                className="h-12 w-12 rounded-full"
                src={`https://jesunmaailma.ml/wp-content/uploads/2022/06/logo.png`}
                alt=""
              />
            </div>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Hosts
