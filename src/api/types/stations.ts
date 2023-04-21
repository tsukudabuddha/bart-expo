type AllStationsResponse = {
  "?xml": {
    "@version": string;
    "@encoding": string;
  };
  root: {
    uri: {
      "#cdata-section": string;
    };
    stations: {
      station: Station[];
    };
    message: string;
  };
}

type Station = {
  name: string;
  abbr: string;
  gtfs_latitude: string;
  gtfs_longitude: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zipcode: string;
}
