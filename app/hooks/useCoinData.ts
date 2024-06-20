import { useQuery } from '@tanstack/react-query'
import { getCoinData } from '../../src/services/coinService'
import { TCoinData } from '../../src/types/coinTypes'

export function useCoinData() {
  return useQuery<TCoinData[], Error>({
    queryKey: ['coinData'],
    queryFn: () => getCoinData(),
    refetchInterval: 10000,
  })
}
