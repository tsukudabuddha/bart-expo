import { View, Text, TouchableOpacity } from "react-native"
import styled from 'styled-components/native'

type Props = {
  item: Station
  onPress: (abbr: string) => void
}

export const StationItem = ({ item, onPress }: Props ) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.abbr)} style={{ borderRadius: 4, padding: 16, justifyContent: 'center', backgroundColor: 'black'}}>
      <Text style={{color: 'white'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}