import { UseQueryResult, useQuery } from "react-query";
import { EtdResponse } from '../api/types/etd'
import axios from "axios";
import { getStationInfo } from "./utils";
import { ScrollView, View } from "react-native";
import { Text } from "../core-ui/Text";
import { Section } from "./Section";
import { useTimetable } from "./useTimetable";

type Props = {
  abbreviation: string
}

export const Timetable = ({abbreviation}: Props) => {
  const { isLoading, error, data } = useTimetable({ abbreviation })

  const info = data ? getStationInfo(data) : undefined

  return (
    <View style={{marginHorizontal: 24, flex: 1}}>
      <Text style={{paddingBottom: 8}} variant='headline' alignment="center">{info?.name}</Text>
        <ScrollView contentContainerStyle={{ alignContent: 'center', justifyContent: 'center', marginBottom: 16}}>
          {info?.sections.map(section => <Section key={section.title} title={section.title} items={section.items} marginBottom={16}/>)}
        </ScrollView>
    </View>
  )
}