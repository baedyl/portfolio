import React from 'react';

import './style/ModalView.css';

const ModalView = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    return(
        <div className={ showHideClassName }>
            <section className="modal-main">
                <h2>This is the future modal view :)</h2>
                <button onClick={ handleClose }>close</button>
            </section>
        </div>
        
    );
}

export default ModalView;