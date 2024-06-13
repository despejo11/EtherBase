import styles from './Header.module.scss'
import Menu from '../Menu/Menu'

import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { FaTelegram } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

type TLinksRef = Array<HTMLAnchorElement | null>

export default function Header() {
  const linksRef = useRef<TLinksRef>([])

  useGSAP(() => {
    linksRef.current.forEach((link) => {
      if (link) {
        const text =
          link.textContent
            ?.split('')
            .map((char) => `<span>${char}</span>`)
            .join('') ?? ''
        link.innerHTML = text
      }
    })

    linksRef.current.forEach((link) => {
      if (link) {
        const chars = link.querySelectorAll('span')

        link.addEventListener('mouseenter', () => {
          gsap.to(chars, {
            y: -11,
            opacity: 0.3,
            stagger: 0.05,
            duration: 0.1,
            ease: 'expo.inOut',

            onComplete: () => {
              gsap.to(chars, {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.1,
                ease: 'expo.inOut',
              })
            },
          })
        })
      }
    })

    linksRef.current.forEach((link) => {
      if (link) {
        const chars = link.querySelectorAll('span')

        link.addEventListener('click', () => {
          gsap.to(chars, {
            y: 11,
            opacity: 0.3,
            stagger: 0.05,
            duration: 0.1,
            ease: 'expo.inOut',

            onComplete: () => {
              gsap.to(chars, {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.1,
                ease: 'expo.inOut',
              })
            },
          })
        })
      }
    })
  }, [])

  return (
    <header>
      <div className='container'>
        <div className={styles.content}>
          <Link to='/'>
            <img src='/images/other/logo.png' alt='Logo' />
          </Link>

          <div className={styles.links}>
            <Link ref={(el) => (linksRef.current[0] = el)} to='/'>
              Home
            </Link>
            <Link ref={(el) => (linksRef.current[1] = el)} to='/market'>
              Market
            </Link>
            <Link ref={(el) => (linksRef.current[2] = el)} to='/about'>
              About
            </Link>
          </div>

          <div className={styles.icons}>
            <a href=''>
              <FaTelegram />
            </a>
            <a href=''>
              <BsTwitterX />
            </a>
          </div>

          <div className={styles.menu}>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}
