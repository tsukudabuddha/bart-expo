import { EtdResponse } from '../api/types/etd'
import { SectionData } from './Section'

export type Estimate = {
  destination: string
  abbreviation: string
  color: string | undefined
  trainLength: number
  bike: boolean
  estimates: string[]
  direction: string
  platform: string
}

export const getStationInfo = (etdResponse: EtdResponse) => {
  const {
    root: { station: stations },
  } = etdResponse

  const station = stations[0] // TODO: Figure out when there can be more than 1 station

  const items: Estimate[] = station.etd.map(etd => {
    const estimate = etd.estimate[0]
    return {
      destination: etd.destination,
      abbreviation: etd.abbreviation,
      color: getColor(estimate.color),
      trainLength: Number(estimate.length),
      bike: Boolean(estimate.bikeflag),
      estimates: etd.estimate.map(e => e.minutes),
      direction: estimate.direction,
      platform: estimate.platform,
    }
  })

  items.sort((a, b) => {
    const aEstimate = a.estimates[0]
    const bEstimate = b.estimates[0]

    if (aEstimate.trim() === 'Leaving') {
      return -1
    }

    if (bEstimate.trim() === 'Leaving') {
      return 1
    }

    const aEstimateNum = Number(aEstimate)
    const bEstimateNum = Number(bEstimate)
    return aEstimateNum - bEstimateNum
  })

  const sections: SectionData[] = Object.values(
    items.reduce<{ [key: string]: SectionData }>((acc, item) => {
      const key = `Platform ${item.platform}`
      const section = acc[key]
      if (section) {
        section.items.push(item)
      } else {
        acc[key] = { title: key, items: [item] }
      }
      return acc
    }, {})
  )

  sections.sort((s1, s2) => (s1.title < s2.title ? -1 : 1))

  return { name: station.name, sections }
}

const getColor = (color: string): string | undefined => {
  switch (color) {
    case 'RED':
      return 'red'
    case 'ORANGE':
      return 'orange'
    case 'YELLOW':
      return 'yellow'
    case 'BLUE':
      return 'blue'
    case 'GREEN':
      return 'green'
    case 'WHITE':
      return 'white'
    default:
      return
  }
}
