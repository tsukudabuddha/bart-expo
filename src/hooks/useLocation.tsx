import { useState, useEffect, createContext, useContext, PropsWithChildren } from 'react';
import * as Location from 'expo-location';

const LocationContext = createContext<Location.LocationObject | null>(null);

export const LocationProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string|null>(null);

  useEffect(() => {
    const updateLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let newLocation = await Location.getCurrentPositionAsync({ accuracy: Location.LocationAccuracy.Low});
      setLocation(newLocation);
    }

    updateLocation()

    const intervalId = setInterval(async () => {
      updateLocation()
    }, 300000); // update location every 5 minutes

    return () => clearInterval(intervalId); // clear the interval when the component unmounts
    }
  , []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};


const useLocation = () => {
  const location = useContext(LocationContext);
  return location;
};

export default useLocation;
