import { createContext, useContext, useState } from "react"

export type ModalsContentTypeInterface = {
    isLoginDrawerOpen: boolean
    setLoginDrawerActiveStatus:(c: boolean) => void
}

export const ModalsDataContext = createContext<ModalsContentTypeInterface>({
    isLoginDrawerOpen: false,
    setLoginDrawerActiveStatus: () => {},
})

export const useModalsDataContext = () => useContext(ModalsDataContext)

export const ModalsDataContextProvider = ({ children }:any) => {

    const [isLoginDrawerOpen, setLoginDrawerActiveStatus] = useState<boolean>(false);

  return (
    <ModalsDataContext.Provider value={{
        isLoginDrawerOpen, setLoginDrawerActiveStatus
     }}>
      {children}
    </ModalsDataContext.Provider>
  );

};