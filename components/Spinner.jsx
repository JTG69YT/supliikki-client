import { DotPulse } from '@uiball/loaders'

function Spinner() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <DotPulse
        size={76}
        speed={1.4}
        color="#ec008c"
      />
    </div>
  )
}

export default Spinner
