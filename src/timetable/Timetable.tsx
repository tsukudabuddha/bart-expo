import { UseQueryResult, useQuery } from "react-query";
import { EtdResponse } from '../api/types/etd'
import axios from "axios";
import { getStationInfo } from "./utils";
import { ScrollView, View } from "react-native";
import { Text } from "../core-ui/Text";
import { TimetableItem } from "./TimetableItem";
import { Section } from "./Section";

type UseTimetableParams = {
  abbreviation: string
}

export const useTimetable = ({ abbreviation }: UseTimetableParams): UseQueryResult<EtdResponse, unknown> => {
  return useQuery(["timetable", abbreviation], async () => {
    const { data } = await axios.get(
      `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${abbreviation.toLowerCase()}&key=MW9S-E7SL-26DU-VV8V&json=y`
    );
    return data;
  });
}

type Props = {
  abbreviation: string
}

export const Timetable = ({abbreviation}: Props) => {
  // const abbreviation = 'WOAK'; // Replace with your abbreviation
  const { isLoading, error, data } = useTimetable({ abbreviation })

  const info = data ? getStationInfo(data) : undefined

  return (
    <View style={{marginHorizontal: 24}}>
      <Text style={{paddingBottom: 8}} variant='headline' alignment="center">{info?.name}</Text>
        <ScrollView contentContainerStyle={{ alignContent: 'center', justifyContent: 'center'}}>
          {info?.sections.map(section => <Section key={section.title} title={section.title} items={section.items}/>)}
        </ScrollView>
    </View>
  )
}