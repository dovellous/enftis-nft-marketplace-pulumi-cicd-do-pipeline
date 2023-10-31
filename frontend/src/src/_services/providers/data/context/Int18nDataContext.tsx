import { createContext, useContext, useState } from "react"

export type Int18nContentTypeInterface = {
    isLoginDrawerOpen: boolean
    setLoginDrawerActiveStatus:(c: boolean) => void
}

export const Int18nDataContext = createContext<Int18nContentTypeInterface>({
    isLoginDrawerOpen: false,
    setLoginDrawerActiveStatus: () => {},
})

export const useInt18nDataContext = () => useContext(Int18nDataContext)

export const Int18nDataContextProvider = ({ children }:any) => {

    const [isLoginDrawerOpen, setLoginDrawerActiveStatus] = useState<boolean>(false);

  return (
    <Int18nDataContext.Provider value={{
        isLoginDrawerOpen, setLoginDrawerActiveStatus
     }}>
      {children}
    </Int18nDataContext.Provider>
  );

};