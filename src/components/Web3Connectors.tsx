import styles from '../styles/Connectors.module.css'
import stylesHome from '../styles/Home.module.css'
import { connectors, getConnectorName, Web3Connector } from '../connectors'
import { Dispatch, SetStateAction, useCallback,useEffect } from 'react'
 
interface ConnectorProps
{
  web3Connector:Web3Connector,
  setIsConnected:Dispatch<SetStateAction<boolean>>
  setIsOpen:Dispatch<SetStateAction<boolean>>
}


function Connector({ web3Connector,setIsConnected ,setIsOpen}:ConnectorProps) {
  const [connector, hooks] = web3Connector
  const isActive = hooks.useIsActive()
  const onClick = useCallback(() => {
    if (isActive) {
      connector.deactivate()
    } else {
      connectors.forEach(([connector]) => connector.deactivate())
      connector.activate()
    }
  }, [connector, isActive])
  useEffect(()=>{
    setIsConnected(isActive)
    if(isActive){
    setIsOpen(false)}
  },[isActive])
  return (
    <div >
      <button onClick={onClick} className={stylesHome.btnconnect}><label>{getConnectorName(connector)}</label></button>
    </div>
  )
}
interface ConnectorsProps
{
  setIsConnected:Dispatch<SetStateAction<boolean>>
  setIsOpen:Dispatch<SetStateAction<boolean>>
}

export default function Connectors({setIsConnected,setIsOpen}:ConnectorsProps) {
  return (
 <>
      {connectors.map((web3Connector, index) => (
        <Connector key={index} web3Connector={web3Connector} setIsConnected={setIsConnected} setIsOpen={setIsOpen} />
      ))}
 </>
  )
}
