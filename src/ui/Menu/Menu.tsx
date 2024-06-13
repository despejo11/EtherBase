import styles from './Menu.module.scss'

import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

import { IoMenu, IoClose } from 'react-icons/io5'
import { FaTelegram } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

export default function Menu() {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  const menu = useRef(null)
  const menuIcon = useRef(null)
  const closeIcon = useRef(null)

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleLinkClick = (path: string) => {
    setIsOpen(false)
    setTimeout(() => {
      navigate(path)
    }, 500)
  }

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menu.current, { opacity: 1, duration: 0.5, display: 'block' })
      gsap.to(menuIcon.current, { opacity: 0, scale: 1.4, duration: 1 })
      gsap.to(closeIcon.current, { opacity: 1, scale: 1.4, duration: 1 })
      document.documentElement.style.overflow = 'hidden'
    } else {
      gsap.to(menu.current, { opacity: 0, duration: 0.5, display: 'none' })
      gsap.to(menuIcon.current, { opacity: 1, scale: 1, duration: 1 })
      gsap.to(closeIcon.current, { opacity: 0, scale: 1, duration: 1 })
      document.documentElement.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <button onClick={handleToggle} className={styles.icon}>
        <span ref={menuIcon} style={{ display: isOpen ? 'none' : 'block' }}>
          <IoMenu />
        </span>
        <span ref={closeIcon} style={{ display: isOpen ? 'block' : 'none' }}>
          <IoClose />
        </span>
      </button>

      <div ref={menu} className={styles.menu}>
        <div className={styles.links}>
          <span>M</span>
          <button onClick={() => handleLinkClick('/')} className={styles.link}>
            Home
          </button>
          <button
            onClick={() => handleLinkClick('/market')}
            className={styles.link}
          >
            Market
          </button>
          <button
            onClick={() => handleLinkClick('/about')}
            className={styles.link}
          >
            About
          </button>
        </div>

        <div className={styles.contact}>
          <span>C</span>
          <a href='' className={styles.contact__icon}>
            <FaTelegram />
          </a>
          <a href='' className={styles.contact__icon}>
            <BsTwitterX />
          </a>
        </div>
      </div>
    </>
  )
}
