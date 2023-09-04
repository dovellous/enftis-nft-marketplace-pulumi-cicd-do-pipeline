import { createContext, useContext, useState } from "react";

export type DrawersContentTypeInterface = {
  isCartDrawerOpen: boolean;
  setCartDrawerActiveStatus: (c: boolean) => void;
  isLoginDrawerOpen: boolean;
  setLoginDrawerActiveStatus: (c: boolean) => void;
  isNFTDrawerOpen: boolean;
  setNFTDrawerActiveStatus: (c: boolean) => void;
  isNFTBiddingDrawerOpen: boolean;
  setNFTBiddingDrawerActiveStatus: (c: boolean) => void;
  isNFTHistoryDrawerOpen: boolean;
  setNFTHistoryDrawerActiveStatus: (c: boolean) => void;
  isNFTMetaDrawerOpen: boolean;
  setNFTMetaDrawerActiveStatus: (c: boolean) => void;
  isPlatformDrawerOpen: boolean;
  setPlatformDrawerActiveStatus: (c: boolean) => void;
  isRegisterDrawerOpen: boolean;
  setRegisterDrawerActiveStatus: (c: boolean) => void;
  isSettingsDrawerOpen: boolean;
  setSettingsDrawerActiveStatus: (c: boolean) => void;
  isWalletDrawerOpen: boolean;
  setWalletDrawerActiveStatus: (c: boolean) => void;
  isWalletConnectDrawerOpen: boolean;
  setWalletConnectDrawerActiveStatus: (c: boolean) => void;
};

export const DrawersDataContext = createContext<DrawersContentTypeInterface>({
  isCartDrawerOpen: false,
  setCartDrawerActiveStatus: () => {},
  isLoginDrawerOpen: false,
  setLoginDrawerActiveStatus: () => {},
  isNFTDrawerOpen: false,
  setNFTDrawerActiveStatus: () => {},
  isNFTBiddingDrawerOpen: false,
  setNFTBiddingDrawerActiveStatus: () => {},
  isNFTHistoryDrawerOpen: false,
  setNFTHistoryDrawerActiveStatus: () => {},
  isNFTMetaDrawerOpen: false,
  setNFTMetaDrawerActiveStatus: () => {},
  isPlatformDrawerOpen: false,
  setPlatformDrawerActiveStatus: () => {},
  isRegisterDrawerOpen: false,
  setRegisterDrawerActiveStatus: () => {},
  isSettingsDrawerOpen: false,
  setSettingsDrawerActiveStatus: () => {},
  isWalletDrawerOpen: false,
  setWalletDrawerActiveStatus: () => {},
  isWalletConnectDrawerOpen: false,
  setWalletConnectDrawerActiveStatus: () => {},
});

export const useDrawersDataContext = () => useContext(DrawersDataContext);

export const DrawersDataContextProvider = ({ children }: any) => {
  const [isCartDrawerOpen, setCartDrawerActiveStatus] =
    useState<boolean>(false);
  const [isLoginDrawerOpen, setLoginDrawerActiveStatus] =
    useState<boolean>(false);
  const [isNFTDrawerOpen, setNFTDrawerActiveStatus] = useState<boolean>(false);
  const [isNFTBiddingDrawerOpen, setNFTBiddingDrawerActiveStatus] =
    useState<boolean>(false);
  const [isNFTHistoryDrawerOpen, setNFTHistoryDrawerActiveStatus] =
    useState<boolean>(false);
  const [isNFTMetaDrawerOpen, setNFTMetaDrawerActiveStatus] =
    useState<boolean>(false);
  const [isPlatformDrawerOpen, setPlatformDrawerActiveStatus] =
    useState<boolean>(false);
  const [isRegisterDrawerOpen, setRegisterDrawerActiveStatus] =
    useState<boolean>(false);
  const [isSettingsDrawerOpen, setSettingsDrawerActiveStatus] =
    useState<boolean>(false);
  const [isWalletDrawerOpen, setWalletDrawerActiveStatus] =
    useState<boolean>(false);
  const [isWalletConnectDrawerOpen, setWalletConnectDrawerActiveStatus] =
    useState<boolean>(false);

  return (
    <DrawersDataContext.Provider
      value={{
        isCartDrawerOpen,
        setCartDrawerActiveStatus,
        isLoginDrawerOpen,
        setLoginDrawerActiveStatus,
        isNFTDrawerOpen,
        setNFTDrawerActiveStatus,
        isNFTBiddingDrawerOpen,
        setNFTBiddingDrawerActiveStatus,
        isNFTHistoryDrawerOpen,
        setNFTHistoryDrawerActiveStatus,
        isNFTMetaDrawerOpen,
        setNFTMetaDrawerActiveStatus,
        isPlatformDrawerOpen,
        setPlatformDrawerActiveStatus,
        isRegisterDrawerOpen,
        setRegisterDrawerActiveStatus,
        isSettingsDrawerOpen,
        setSettingsDrawerActiveStatus,
        isWalletDrawerOpen,
        setWalletDrawerActiveStatus,
        isWalletConnectDrawerOpen,
        setWalletConnectDrawerActiveStatus,
      }}
    >
      {children}
    </DrawersDataContext.Provider>
  );
};
