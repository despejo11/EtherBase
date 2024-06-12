import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

import { IoMenu, IoClose } from 'react-icons/io5'
import { FaTelegram } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'

import gsap from 'gsap'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const menu = useRef(null)
  const menuIcon = useRef(null)
  const closeIcon = useRef(null)

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
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
          <Link to='/'>Home</Link>
          <Link to='/market'>Market</Link>
          <Link to='/about'>About</Link>
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
