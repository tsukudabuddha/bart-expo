import { getStationInfo } from './utils'
import { ScrollView, View, useColorScheme } from 'react-native'
import { Text } from '../core-ui/Text'
import { Section } from './Section'
import { useTimetable } from './useTimetable'
import useOnAppForeground from '../hooks/useOnAppForeground'
import { useNavigation } from '@react-navigation/native'
import { ParamList } from '../navigation/StationsNavigator'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect } from 'react'
import { SheetManager } from 'react-native-actions-sheet'
import { Sheets } from '../sheets/sheets'

type Props = {
  abbreviation: string
  hideTitle?: boolean
  hasNavigationHeader?: boolean
}

export const Timetable = ({ abbreviation, hideTitle, hasNavigationHeader }: Props) => {
  const { isLoading, error, data, refetch } = useTimetable({ abbreviation })
  useOnAppForeground(refetch)

  const navigation = useNavigation<StackNavigationProp<ParamList>>()
  useEffect(() => {
    if (hasNavigationHeader) {
      navigation.setOptions({ title: data?.root.station[0].name ?? '' })
    }
  }, [hasNavigationHeader, data?.root.station[0].name])

  const info = data ? getStationInfo(data) : undefined

  const handleOnItemPress = (abbr: string) => {
    SheetManager.show(Sheets.ROUTE_DETAIL, { payload: { destAbbr: abbr, originStation: data?.root.station[0] } })
    console.log(abbr)
  }

  return (
    <View style={{ flex: 1 }}>
      {!hideTitle && (
        <Text style={{ paddingBottom: 8 }} variant="headline" alignment="center">
          {info?.name}
        </Text>
      )}
      <ScrollView
        contentContainerStyle={{
          marginHorizontal: 24,
          alignContent: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        {info ? (
          info.sections.map(section => (
            <Section key={section.title} title={section.title} items={section.items} marginBottom={16} onItemPress={handleOnItemPress} />
          ))
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  )
}
