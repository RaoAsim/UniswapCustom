import styles from '../styles/Connectors.module.css'
import stylesHome from '../styles/Home.module.css'
import { connectors, getConnectorName, Web3Connector } from '../connectors'
import { useCallback } from 'react'

function Connector({ web3Connector }: { web3Connector: Web3Connector }) {
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

  return (
    <div >
      
      <button onClick={onClick} className={stylesHome.btnconnect}><label>{getConnectorName(connector)}</label></button>
      
    </div>
  )
}

export default function Connectors() {
  return (
 <>
      {connectors.map((web3Connector, index) => (
        <Connector key={index} web3Connector={web3Connector} />
      ))}
 </>
  )
}
