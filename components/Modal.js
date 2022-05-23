import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from '../styles/Modal.module.css'

const Backdrop = () => {
    return <div className={styles.backdrop} />
}

const Message = (props) => {
    let width = '70vw'
    let height = '80vh'
    if (props.width) width = props.width
    if (props.height) height = props.height

    return (
        <div>
            <h4 style={{ width: width, height: height }} className={styles.message}>{props.message}</h4>
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
            console.log(modalDiv)
            setModalDiv(modalDiv)
        }
    }, [])

    return (
        <>
            {backdropDiv !== null && modalDiv !== null && props.enabled === true ? (
                <>
                    {createPortal(<Backdrop />, backdropDiv)}
                    {createPortal(<Message message={props.message} width={props.width} height={props.height} />, modalDiv)}
                </>
            ) : null
            }
        </>
    )
}

export default Modal