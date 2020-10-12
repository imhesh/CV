import React from 'react';

import classes from './Modal.css';

const Modal = props => {
    return (
        <div className={classes.ModalClass}>
            {props.children}
        </div>
    );
};


export default modal;