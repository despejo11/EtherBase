import AppRouter from '../app/router/AppRouter'

export default function App() {
  return (
    <>
      <div className='screenWidthWarning'>
        <p>Only for devices wider than 320px!</p>
        <img src='/images/other/logo.png' alt='Logo' />
      </div>

      <div className='screenContent'>
        <AppRouter />
      </div>
    </>
  )
}
