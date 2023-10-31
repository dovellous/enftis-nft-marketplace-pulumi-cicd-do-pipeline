import { Button, Space, notification } from "antd";
import { useWeb3DataContext } from "_services/providers";
import { useEffect, useState } from "react";

interface WalletCardWrapperProps {
  children?: React.ReactNode;
}

export const StackingsWrapper: React.FC<WalletCardWrapperProps> = ({
  children,
  ...props
}): any | null => {

  const { } = props;

  const [api, contextHolder] = notification.useNotification();

  const { erc721FactorySmartContract } = useWeb3DataContext();

  const [baseURIVar, setBaseURIVar] = useState("...");

  const [baseURIWeb3, setBaseURIWeb3] = useState("...");

  const [baseURIWeb3Hash, setBaseURIWeb3Hash] = useState("...");

  const [baseURILoading, setBaseURILoading] = useState(false);

  const getBaseURI: any = async () => {
    erc721FactorySmartContract.exe(
      'getBaseURI',
      [],
      (data: any) => {
        console.log('GET BASE URL SUCCESS', data);
        setBaseURIWeb3(data);
      },
      (error: any) => {
        console.log('GET BASE URL ERROR', error);
      },
      () => {
        console.log('*** -:- ***');
      }
    )
  }

  const showError:any = (title:string, message:string)=>{
    api.error({
      message: title,
      description: message,
      placement: 'bottomRight',
      duration: 7500
    });
  }

  const setBaseURI: any = async () => {

    setBaseURILoading(true);

    erc721FactorySmartContract.exe(
      'setBaseURI',
      [
        baseURIVar
      ],
      (hash: any) => {
        console.log('SET BASE URL SUCCESS HASH', hash);
        setBaseURIWeb3Hash(hash);
      },
      (error: any) => {
        showError('Error writing to a contract', 'SetBaseURI:\n'+error.message);
        console.log('SET BASE URL ERROR 1', error.message);
      },
      () => {
        console.log('*** -:- ***');
        setBaseURILoading(false);
      }
    )
  }

  useEffect(() => {

    if (erc721FactorySmartContract === null) {

      console.log('CONTRACT NULL :: ERC721FactorySmartContract ::', erc721FactorySmartContract);

    } else {

      console.log('CONTRACT READY :: ERC721FactorySmartContract ::', erc721FactorySmartContract.toJSON());

    }

  }, [erc721FactorySmartContract])

  return (
    <>
      <Space direction="vertical" size={5}>

        <h3>BASE URI HASH: {baseURIWeb3Hash} </h3>

        <h3>BASE URI WEB3: {baseURIWeb3} </h3>

        <h3>BASE URI INPUT: {baseURIVar} </h3>

        <input type="text" value={baseURIVar} onChange={(e) => { setBaseURIVar(e.target.value) }} />

        <Button type={"primary"} onClick={getBaseURI} >{"Get Base URI"}</Button>

        <Button type={"primary"} onClick={setBaseURI} loading={baseURILoading} >{"Set Base URI"}</Button>

      </Space>

      {contextHolder}

    </>

  );
};
