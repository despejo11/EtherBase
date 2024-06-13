import Header from '../../src/ui/Header/Header'
import NewPage from './NewPage'

import { BrowserRouter as Router } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <NewPage />
    </Router>
  )
}
