import { createContext, useContext, useState } from "react";
import {
  SettingsDataContextProvider,
  Int18nDataContextProvider,
  DrawersDataContextProvider,
  ModalsDataContextProvider,
  Web3DataContextProvider,
} from ".";

export type GlobalContent = {
  reloadPage: () => void;
};

export const GlobalDataContext = createContext<GlobalContent>({
  reloadPage: () => {},
});

export const useGlobalDataContext = () => useContext(GlobalDataContext);

// Create a provider component
export const DataProvider = ({ children }: any) => {
  const reloadPage: any = () => {
    (window as any).location.reload();
  };

  return (
    <GlobalDataContext.Provider value={{ reloadPage }}>
      <SettingsDataContextProvider>
        <Int18nDataContextProvider>
          <Web3DataContextProvider>
            <DrawersDataContextProvider>
              <ModalsDataContextProvider>{children}</ModalsDataContextProvider>
            </DrawersDataContextProvider>
          </Web3DataContextProvider>
        </Int18nDataContextProvider>
      </SettingsDataContextProvider>
    </GlobalDataContext.Provider>
  );
};
