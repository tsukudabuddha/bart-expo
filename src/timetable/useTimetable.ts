import { UseQueryResult, useQuery } from "react-query";
import { EtdResponse } from "../api/types/etd";
import axios from "axios";

type UseTimetableParams = {
  abbreviation: string
}

export const useTimetable = ({ abbreviation }: UseTimetableParams): UseQueryResult<EtdResponse, unknown> => {
  return useQuery(["timetable", abbreviation], async () => {
    const { data } = await axios.get(
      `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${abbreviation.toLowerCase()}&key=MW9S-E7SL-26DU-VV8V&json=y`
    );
    return data;
  }, { 
    refetchInterval: 60 * 1000, // 1 minute interval 
  });
}