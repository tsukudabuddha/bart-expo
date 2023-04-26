import { LocationObjectCoords } from 'expo-location'

export const getNearestStation = (stations: Station[], currentCoords: LocationObjectCoords): Station | undefined => {
  let nearestStation: Station | undefined
  let minDistance = Number.MAX_VALUE

  stations.forEach(station => {
    const stationCoords = {
      latitude: parseFloat(station.gtfs_latitude),
      longitude: parseFloat(station.gtfs_longitude),
    }

    const distance = getDistanceBetweenCoords(currentCoords, stationCoords)

    if (distance < minDistance) {
      minDistance = distance
      nearestStation = station
    }
  })

  return nearestStation
}

const getDistanceBetweenCoords = (coords1: LocationObjectCoords, coords2: { latitude: number; longitude: number }): number => {
  const lat1 = coords1.latitude
  const lon1 = coords1.longitude
  const lat2 = coords2.latitude
  const lon2 = coords2.longitude
  const R = 6371e3 // metres
  const φ1 = toRadians(lat1)
  const φ2 = toRadians(lat2)
  const Δφ = toRadians(lat2 - lat1)
  const Δλ = toRadians(lon2 - lon1)

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

const toRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180
}
