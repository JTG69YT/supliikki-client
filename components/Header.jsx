import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto shadow-lg">
      <div className='flex items-center space-x-5'>
        <Link href="/">
          <img
            className='w-44 cursor-pointer object-contain'
            src="https://jesunmaailma.ml/images/supliikki.svg"
            alt="" />
        </Link>

        <div className='hidden items-center space-x-5 md:inline-flex'>
          <Link href="/hosts">
            <h3 className='font-[Poppins] cursor-pointer'>Juontajat</h3>
          </Link>
        </div>
      </div>

      <div className='flex items-center space-x-5'>
        <Link href="/login">
            <h3 className='font-[Poppins] border px-5 py-2 rounded-full cursor-pointer transition-opacity duration-200 ease-in-out bg-[#ec008c] text-white hover:opacity-50'>Kirjaudu</h3>
        </Link>
      </div>
    </header>
  )
}

export default Header
