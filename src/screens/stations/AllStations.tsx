import { FlatList } from "react-native"
import { useStations } from "../../hooks/useStations"
import { StationItem } from "./StationItem"

type Props ={
  navigation: any // TODO: Add type
}

export const AllStations = ({ navigation}: Props) => {
  const {data: stations} = useStations()

  const onPress = (abbr: string) => {
    // TODO: navigate to timetable screen
    navigation.navigate("")
  }
  
  return (<FlatList
    data={stations ?? []}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => <StationItem item={item} onPress={onPress}/>}
  />)
  
}