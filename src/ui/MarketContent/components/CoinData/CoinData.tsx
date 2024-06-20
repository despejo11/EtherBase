import styles from './CoinData.module.scss'
import Filter from '../Filter/Filter'
import { useCoinData } from '../../../../../app/hooks/useCoinData'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

import { mirage } from 'ldrs'
mirage.register()

export default function CoinData() {
  const { data, error, isLoading } = useCoinData()

  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('')

  const contentRef = useRef<HTMLDivElement | null>(null)

  const coinsPerPage = 5
  const filteredData = data?.filter((coin) =>
    coin.symbol.toLowerCase().includes(filter.toLowerCase())
  )
  const indexOfLastCoin = currentPage * coinsPerPage
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage
  const currentCoins = filteredData?.slice(indexOfFirstCoin, indexOfLastCoin)

  const totalPages = filteredData
    ? Math.ceil(filteredData.length / coinsPerPage)
    : 1

  const handlePageChange = (page: number) => {
    if (page === currentPage) return

    if (contentRef.current) {
      const scrollPosition = window.scrollY
      const targetPosition = (contentRef.current.offsetTop || 0) - 150

      if (Math.abs(scrollPosition - targetPosition) < 5) {
        gsap.to(contentRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setCurrentPage(page)
            gsap.to(contentRef.current, { opacity: 1, duration: 0.5 })
          },
        })
      } else {
        gsap.to(window, {
          duration: 1.3,
          scrollTo: { y: targetPosition },
          ease: 'expo.inOut',
          onComplete: () => {
            gsap.to(contentRef.current, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                setCurrentPage(page)
                gsap.to(contentRef.current, { opacity: 1, duration: 0.5 })
              },
            })
          },
        })
      }
    }
  }

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      )
    }
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  const formatPrice = (price: string | number) => {
    const priceNumber = Number(price)
    if (priceNumber === 0) {
      return '$ 0.00'
    }
    const formattedPrice = priceNumber.toFixed(2)
    return formattedPrice === '0.00' ? '$ ≈0.00' : `$ ${formattedPrice}`
  }

  return (
    <div className={styles.content}>
      {isLoading ? (
        <div className={styles.center}>
          <l-mirage size='60' speed='2.5' color='#f4f4f4'></l-mirage>
        </div>
      ) : error ? (
        <div className={styles.center}>
          <p>Oh no, something went wrong!</p>
        </div>
      ) : (
        <>
          <Filter filter={filter} onFilterChange={setFilter} />

          <div ref={contentRef}>
            {filteredData && filteredData.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>24h Change</th>
                    <th>Market Cap</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className={styles.margin}></tr>
                  {currentCoins?.map((coin) => (
                    <tr key={coin.id}>
                      <td data-label='Rank'>{coin.rank}</td>
                      <td data-label='Symbol'>{coin.symbol}</td>
                      <td data-label='Price'>{formatPrice(coin.priceUsd)}</td>
                      <td
                        data-label='24h Change'
                        className={
                          Number(coin.changePercent24Hr) < 0
                            ? styles.percentMinus
                            : Number(coin.changePercent24Hr) > 0
                            ? styles.percentPlus
                            : styles.percentEqual
                        }
                      >
                        {Number(coin.changePercent24Hr).toFixed(2)} %
                      </td>
                      <td data-label='Market Cap' className={styles.markerCap}>
                        $ {Number(coin.marketCapUsd).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className={styles.center}>
                <p>No results found!</p>
              </div>
            )}
          </div>

          {filteredData && filteredData.length > 0 && (
            <div className={styles.pagination}>
              <span>P</span>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? styles.activeBtn : ''}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
