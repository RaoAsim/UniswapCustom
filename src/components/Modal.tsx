 import { Dispatch, SetStateAction } from 'react';
import styles from '../styles/Modal.module.css'
import { RiCloseLine } from "react-icons/ri";
import Web3Connectors from './Web3Connectors';
interface ModalProps{
    setIsOpen:Dispatch<SetStateAction<boolean>>
    setIsConnected:Dispatch<SetStateAction<boolean>>
}
export default function Modal(props:ModalProps) {
    return (

            <>
              <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
              <div className={styles.centered}>
                <div className={styles.modal}>
                  <div className={styles.modalHeader}>
                    <h5 className={styles.heading}>Connect Wallet</h5>
                  </div>
                  <button className={styles.closeBtn} onClick={() => props.setIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                  </button>
                  <div className={styles.modalContent}>
                  <Web3Connectors setIsConnected={props.setIsConnected} setIsOpen={props.setIsOpen} />
                  </div>
                  
                </div>
              </div>
            </>
          );
        };
    
  