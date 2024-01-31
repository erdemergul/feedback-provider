import React, { Fragment, useEffect, useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Backdrop from './Backdrop';
import modalStyles from './Modal.module.css';
import generalStyles from '../../styles.module.css';

const Modal = (props) => {
    const { show, modalOnClickHandler } = props;

    return (
        <Fragment>
            <CSSTransition in={show} classNames={{
                enterActive: modalStyles.modal_transition_enter_active,
                enter: modalStyles.modal_transition_enter,
                exitActive: modalStyles.modal_transition_exit_active,
                exit: modalStyles.modal_transition_exit
            }} timeout={500} mountOnEnter unmountOnExit>
                <div className={`${modalStyles.modal_container} ${generalStyles.card}`} >
                    {props.children}
                </div>
            </CSSTransition>
            <CSSTransition in={show} classNames={{
                enterActive: modalStyles.backdop_transition_enter_active,
                enter: modalStyles.backdop_transition_enter,
                exitActive: modalStyles.backdop_transition_exit_active,
                exit: modalStyles.backdop_transition_exit
            }} timeout={500} mountOnEnter unmountOnExit>
                <Backdrop show onClickHandler={modalOnClickHandler} />
            </CSSTransition>
        </Fragment>
    );
}

export default Modal;