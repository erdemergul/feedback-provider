import React, { useEffect, useState } from 'react';
import backdropStyles from './Backdrop.module.css';

const Backdrop = (props) => {
    const { show, onClickHandler } = props;

    return (
        show && <div className={backdropStyles.backdrop} onClick={onClickHandler} />
    );
}

export default Backdrop;