import { useCallback, useRef,useState } from 'react'
import {  SwapWidget,Theme } from '@uniswap/widgets'

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑

import { useActiveProvider } from '../connectors'
import { JSON_RPC_URL } from '../constants'
import bg from '../assests/bg.png'
import logo from '../assests/R.jpg'
import Web3Connectors from './Web3Connectors'
import styles from '../styles/Home.module.css'
import Modal from './Modal'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

export default function App() {

  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])
  const theme: Theme = {
    primary: '#FFF',
    secondary: '#A9A9A9',
    interactive: '#A9A9A9',
    container: '#4E4E5A',
    module: '#222633',
    accent: '#71FF98',
    outline: '#CC1',
    dialog: '#000',
    fontFamily: 'Josefin Sans',
    borderRadius: 0.5,
  }
  const provider = useActiveProvider()
const[modalOpen,setModalOpen]=useState<boolean>(false)
  return (
    <div>
    <div className={styles.container}  style={{backgroundImage:`url(${bg})`,opacity:modalOpen?"0.8":"1",pointerEvents:modalOpen?"none":"visible"}}>
      <div className={styles.i18n}>
      <img src={logo} height="50px" width={"50px"} style={{borderRadius:"8px"}} alt="logo"/>
      <button className={styles.btnconnect} onClick={()=>setModalOpen(true)}>
        Connect Wallet
      </button>
      </div>
      <main className={styles.main}>
      {modalOpen && <Modal setIsOpen={setModalOpen} />}
        <div className={styles.demo}>
 
          <div className={styles.widget}>
            <SwapWidget
            theme={theme}
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="1"
              defaultOutputTokenAddress={UNI}
            />
          </div>
        </div>
      </main>
    
      </div>
      {modalOpen && <Modal setIsOpen={setModalOpen} />}
      </div>
  )
}
