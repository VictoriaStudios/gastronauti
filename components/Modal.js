import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from '../styles/Modal.module.css'

const Backdrop = (props) => {
    return <div className={styles.backdrop} />
}

const Message = (props) => {
    return (
    <dialog>
        <h4 className={styles.message}>{props.message}</h4>
    </dialog>
    )
}


const Modal = (props) => {
    const [backdropDiv, setBackdropDiv] = useState(null)
    const [modalDiv, setModalDiv] = useState(null)

    useEffect(() => {
        if (typeof (window) !== undefined) {
            console.log(props.message)
            let backdropDiv = document.getElementById('backdrop')
            setBackdropDiv (backdropDiv)
            let modalDiv = document.getElementById('modal')
            setModalDiv (modalDiv)
        }
    }, [])

    return (
        <>
            {backdropDiv!==null && modalDiv!==null &&  props.enabled === true  ?(
                <>
                {createPortal(<Backdrop />, backdropDiv)}
                {createPortal(<Message message={props.message} />, modalDiv)}
                </>
                ) : null
            }
        </>
    )
}

export default Modal