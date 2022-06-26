import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Icon from '@material-tailwind/react/Icon'

function Header() {
  const { data: session } = useSession()

  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto shadow-lg">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://jesunmaailma.ml/images/supliikki.svg"
            alt=""
          />
        </Link>

        <div className="hidden items-center space-x-5 md:inline-flex">
          <Link href="/hosts">
            <h3 className="font-[Poppins] cursor-pointer">Juontajat</h3>
          </Link>
        </div>
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="border rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-700 px-4 py-2 flex items-center space-x-3 hover:text-white cursor-pointer font-[Poppins]"
        >
          <img className='w-7 h-7 rounded-full' src={session.user.image} />
          <p className='text-sm font-thin'>{session?.user?.name}</p>
        </div>
      ) : (
        <Link href="/login">
          <div
            className="border rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-700 px-4 py-2 flex items-center space-x-2 hover:text-white cursor-pointer font-[Poppins]"
          >
            <Icon name="account_circle" size="3xl" />
            <p className='text-sm font-thin'>Kirjaudu</p>
          </div>
        </Link>
      )}
    </header>
  )
}

export default Header
