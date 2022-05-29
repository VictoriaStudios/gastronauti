import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from '../styles/Modal.module.css'

const Backdrop = (props) => {
    return <div onClick={() => props.handleModalClose()} className={styles.backdrop} />
}

const Message = (props) => {
    let width = '70vw'
    let height = '80vh'
    if (props.width) width = props.width
    if (props.height) height = props.height

    return (
        <div style={{ width: width, height: height }} className={styles.message}>
            {props.children}
        </div>
    )
}


const Modal = (props) => {
    const [backdropDiv, setBackdropDiv] = useState(null)
    const [modalDiv, setModalDiv] = useState(null)

    useEffect(() => {
        if (typeof (window) !== undefined) {
            let backdropDiv = document.getElementById('backdrop')
            setBackdropDiv(backdropDiv)
            let modalDiv = document.getElementById('modal')
            setModalDiv(modalDiv)
        }
    }, [])

    

    return (
        <>
            {backdropDiv !== null && modalDiv !== null && props.enabled===true ? (
                <>
                    {createPortal(<Backdrop handleModalClose = {props.handleModalClose} />, backdropDiv)}
                    {createPortal(<Message width={props.width} height={props.height} >{props.children}</Message>, modalDiv)}
                </>
            ) : null
            }
        </>
    )
}

export default Modal