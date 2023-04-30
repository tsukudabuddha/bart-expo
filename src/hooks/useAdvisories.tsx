import { useQuery } from 'react-query'
import { BARTAdvisories, BARTAdvisory } from '../api/types/advisories'

const BART_API_BASE_URL = 'https://api.bart.gov/api/bsa.aspx'
const BART_API_KEY = 'MW9S-E7SL-26DU-VV8V'

const fetchAdvisories = async (): Promise<BARTAdvisory[]> => {
  const url = `${BART_API_BASE_URL}?cmd=bsa&key=${BART_API_KEY}&json=y`
  const response = await fetch(url)
  const data = (await response.json()) as BARTAdvisories
  return data.root.bsa
}

export const useAdvisories = () => {
  return useQuery<BARTAdvisory[], Error>(['bartAdvisories'], () => fetchAdvisories())
}
