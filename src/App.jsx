import { useState } from 'react'
import './App.css'
import { TimeFormatProvider } from './components/TimeFormatContext'
import Header from './components/Header'
import { Outlet, } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './components/DarkModeContext'

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <div className='w-full min-h-screen align-middle font-quicksand bg- transition-colors duration-150' style={{backgroundColor : isDarkMode ? 'white' : 'rgb(22 78 99)'}}>
        <Header />
        <TimeFormatProvider>
          <Outlet />
        </TimeFormatProvider>
      </div>
    </>
  )
}

export default App
