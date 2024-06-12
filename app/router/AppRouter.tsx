import NewPage from './NewPage'
import Home from '../../src/pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <NewPage />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
