import { createContext, useContext, useState } from "react"

export type Int18nContentTypeInterface = {
  applicationInt18n: any
  setApplicationInt18n: (c: any) => void
}

export const applicationInt18nInitialState = {
  languages: {
    version: "1.0.0.0",
    en: {
      modals: {
        modalName: {
          title: "Modal Name",
          buttons: {
            primaryAction: "",
            secondaryAction: "",
            cancelBtn: "",
          }
        }
      },
      drawers: {
        modalName: {
          title: "Modal Name",
          buttons: {
            primaryAction: "",
            secondaryAction: "",
            cancelBtn: "",
          }
        }
      },
      modules: {
        login: {

        }
      },
      seo: {
        head: {
          title: "",
          description: "",
          author: "",
          keywords: [],
        }
      }
    }
  }
}

export const Int18nDataContext = createContext<Int18nContentTypeInterface>({
  applicationInt18n: applicationInt18nInitialState,
  setApplicationInt18n: () => { },
})

export const useInt18nDataContext = () => useContext(Int18nDataContext)

export const Int18nDataContextProvider = ({ children }: any) => {

  const [applicationInt18n, setApplicationInt18n] = useState<any>(applicationInt18nInitialState);

  //local settings

  //load from remote

  //save local settings

  return (
    <Int18nDataContext.Provider value={{
      applicationInt18n, setApplicationInt18n
    }}>
      {children}
    </Int18nDataContext.Provider>
  );

};