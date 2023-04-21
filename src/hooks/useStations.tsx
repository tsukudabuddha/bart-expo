import axios from "axios";
import { PropsWithChildren, createContext, useContext } from "react";
import { useQuery } from "react-query";

type StationsContextValue = {
  isLoading: boolean;
  isError: boolean;
  data: Station[] | undefined;
  error: Error | null;
};

const StationsContext = createContext<StationsContextValue>({
  isLoading: false,
  isError: false,
  data: undefined,
  error: null,
});

const useStationsContext = (): StationsContextValue => {
  const { isLoading, isError, data, error } = useQuery<AllStationsResponse, Error>(
    'stations',
    async () => {
      const { data } = await axios.get<AllStationsResponse>(
        'https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'
      );
      return data;
    }
  );

  if (isLoading || isError || !data) {
    return {
      isLoading,
      isError,
      data: undefined,
      error,
    };
  }

  const stations = data.root.stations.station;

  return {
    isLoading,
    isError,
    data: stations,
    error,
  };
};

const StationsProvider = ({ children }: PropsWithChildren) => {
  const stations = useStationsContext();

  return (
    <StationsContext.Provider value={stations}>
      {children}
    </StationsContext.Provider>
  );
};

const useStations = (): StationsContextValue => useContext(StationsContext);

export { StationsProvider, useStations };