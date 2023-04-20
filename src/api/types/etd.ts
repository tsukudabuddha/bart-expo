export type EtdResponse = {
  '?xml': {
    '@version': string;
    '@encoding': string;
  };
  root: RootData;
}

type RootData = {
  '@id': string;
  uri: {
    '#cdata-section': string;
  };
  date: string;
  time: string;
  station: StationData[];
  message: string;
}

type StationData = {
  name: string;
  abbr: string;
  etd: EtdData[];
}

type EtdData = {
  destination: string;
  abbreviation: string;
  limited: string;
  estimate: EstimateData[];
}

type EstimateData = {
  minutes: string;
  platform: string;
  direction: string;
  length: string;
  color: string;
  hexcolor: string;
  bikeflag: string;
  delay: string;
  cancelflag: string;
  dynamicflag: string;
}
