import { ActivityIndicator, useColorScheme } from 'react-native'
import { Timetable } from '../../timetable/Timetable'
import useLocation from '../../hooks/useLocation'
import { useStations } from '../../hooks/useStations'
import { getNearestStation } from './utils/getNearestStation'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'
import { useAdvisories } from '../../hooks/useAdvisories'
import { View } from 'native-base'
import { AdvisoryAlert } from './components/AdvisoryAlert'

export const Home = () => {
  const location = useLocation()
  const { data: stations } = useStations()
  const nearestStation = stations && location ? getNearestStation(stations, location.coords) : undefined
  const isDarkMode = useColorScheme() === 'dark'
  const { data: advisories } = useAdvisories()

  const advisoryMessage = advisories ? advisories[0].description['#cdata-section'] : undefined

  // TODO: Show loading indicator when nearestStation is undefined

  if (!nearestStation) {
    return <ActivityIndicator />
  }

  return (
    <View flex={1} backgroundColor={isDarkMode ? 'black' : 'white'}>
      {!!advisoryMessage && <AdvisoryAlert text={advisoryMessage} />}
      <Timetable abbreviation={nearestStation.abbr} />
    </View>
  )
}
