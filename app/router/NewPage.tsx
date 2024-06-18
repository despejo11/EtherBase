import Error from '../../src/pages/Error'
import Home from '../../src/pages/Home'
import About from '../../src/pages/About'
import Market from '../../src/pages/Market'

import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

export default function NewPage() {
  const [shouldResetScroll, setShouldResetScroll] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (shouldResetScroll) {
      window.scrollTo(0, 0)
      setShouldResetScroll(false)
      document.documentElement.style.overflow = 'auto'
    }
  }, [shouldResetScroll])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const location = useLocation()

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (window.scrollY === scrollPosition) {
          setShouldResetScroll(true)
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/market' element={<Market />} />
      </Routes>
    </AnimatePresence>
  )
}
