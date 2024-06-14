import AboutContent from '../ui/AboutContent/AboutContent'
import Footer from '../ui/Footer/Footer'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.6 } }}
      exit={{ opacity: 0 }}
    >
      <AboutContent />
      <Footer />
    </motion.div>
  )
}
