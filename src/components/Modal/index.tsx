import React, { ReactElement } from 'react';
import styles from './Modal.module.css'; 

interface Props {
    children: React.ReactNode;
}

function Modal({ children }: Props): ReactElement {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.getElementById("modal");
        modal!.classList.add("hide");
    };

    return (
        <div id='modal' className='hide'>
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>texto do modal</h2>
                {children}
            </div>
        </div>
    );
}

export default Modal;