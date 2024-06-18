import MarketContent from '../ui/MarketContent/MarketContent'
import Footer from '../ui/Footer/Footer'

import { motion } from 'framer-motion'

export default function Market() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.6 } }}
      exit={{ opacity: 0 }}
    >
      <MarketContent />
      <Footer />
    </motion.div>
  )
}
