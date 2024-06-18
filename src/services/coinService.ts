import axiosInstance from '../../app/api/axiosInstance'
import { TCoinData } from '../types/coinTypes'

export const getCoinData = async (): Promise<TCoinData[]> => {
  const response = await axiosInstance.get('/assets?limit=25')
  const data = response.data.data

  return data.map((coin: TCoinData) => ({
    id: coin.id,
    rank: coin.rank,
    symbol: coin.symbol,
    priceUsd: coin.priceUsd,
    marketCapUsd: coin.marketCapUsd,
    changePercent24Hr: coin.changePercent24Hr,
  }))
}
