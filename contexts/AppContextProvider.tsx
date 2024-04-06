import { markers } from '@/data/markersData';
import { LocationProps } from '@/props/location/LocationProps';
import React, { createContext, useState } from 'react'

export const AppContext = createContext({} as any);

const AppContextProvider = ({children}: any) => {
  const [beanLocation, setBeanLocation] = useState<LocationProps>();
  return (
    <AppContext.Provider value={{beanLocation, setBeanLocation}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider