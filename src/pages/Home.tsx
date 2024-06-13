import HomeContent from '../ui/HomeContent/HomeContent'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.6 } }}
      exit={{ opacity: 0 }}
    >
      <HomeContent />
    </motion.div>
  )
}
