import { createContext, useContext, useState } from "react"

export type SettingsContentTypeInterface = {
  applicationSettings: any
  setApplicationSettings: (c: any) => void
}

export const applicationSettingsInitialState = {
  ui: {
    drawers: {
      cart: {
        cartPageSize: 3,
        cartFooterHeight: 0,
        cartFooterMaxHeight: 136,
        cartListSize: 'large',
        cartItemThumbnailWidth: 96,
        cartItemThumbnailBorderRadius: 10
      }
    }
  }
}

export const SettingsDataContext = createContext<SettingsContentTypeInterface>({
  applicationSettings: applicationSettingsInitialState,
  setApplicationSettings: () => { },
})

export const useSettingsDataContext = () => useContext(SettingsDataContext)

export const SettingsDataContextProvider = ({ children }: any) => {

  const [applicationSettings, setApplicationSettings] = useState<any>(applicationSettingsInitialState);

  //local settings

  //load from remote

  //save local settings

  return (
    <SettingsDataContext.Provider value={{
      applicationSettings, setApplicationSettings
    }}>
      {children}
    </SettingsDataContext.Provider>
  );

};