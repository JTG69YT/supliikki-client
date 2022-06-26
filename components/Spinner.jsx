import { DotSpinner } from '@uiball/loaders'

function Spinner() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <DotSpinner
        size={76}
        speed={0.85}
        color="#ec008c"
      />
    </div>
  )
}

export default Spinner
