import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import getFileData from './misc/jsonFileReader'
import Modal from './UI/Modal/Modal';
import QRCode from 'qrcode.react';
import { Fragment } from 'react';
import qrIcon from 'resources/qrIcon.jpg';

const FEEDBACK_PROVIDER_JSON_PATH = './feedback-provider/feedback-provider.json';

const screenIdBysequenceNumber = {};

window.feedbackrequests = screenIdBysequenceNumber;

const FeedbackProvider = ({ jsonPath = FEEDBACK_PROVIDER_JSON_PATH, sequenceNumberProp, description, screenId, size }) => {
    const [userId, setUserId] = useState();
    const [showModal, setShowModal] = useState(false);
    const [showNavigationPanel, setShowNavigationPanel] = useState(false);
    const [requestReferenceKey, setRequestReferenceKey] = useState();
    const [requestCount, setRequestCount] = useState();
    const [sequenceNumber, setSequenceNumber] = useState();

    useEffect(() => {
        getFileData(jsonPath, (data) => {
            setUserId(data.userId);
            setRequestReferenceKey(data.requestReferenceKey);
            setRequestCount(data.requestCount);
        });
        screenIdBysequenceNumber[sequenceNumberProp] = screenId;
        setSequenceNumber(sequenceNumberProp);
    }, []);

    const buttonOnClickHandler = () => {
        setShowModal(true);
    }

    const modalOnClickHandler = () => {
        setShowModal(false);
        setShowNavigationPanel(false);
        setSequenceNumber(sequenceNumberProp);
    }

    const qrTextOnClickHandler = (e) => {
        e.stopPropagation();
        setShowNavigationPanel(true);
    }

    const address = 'http://feedbackclub.app/givefeedback/';
    //const fullAddress = `${address}${userId}/${requestReferenceKey}/{sequenceNumber}`;
    const fullAddress = `${address}${userId}/${requestReferenceKey}/${sequenceNumber}`;
    return (
        <>
            <img src={qrIcon} alt="Button Image" className={styles.qr_icon} style={{ height: size, width: size, backgroundColor: "pink" }} onClick={buttonOnClickHandler} />
            <Modal show={showModal} modalOnClickHandler={modalOnClickHandler}>
                {!showNavigationPanel && <div className={styles.qr_text}>{description}</div>}
                {!showNavigationPanel && <div className={styles.sequenceNumberText} onClick={qrTextOnClickHandler}>{sequenceNumber}</div>}
                {showNavigationPanel && <input type="number" min="1" max={requestCount} value={sequenceNumber} onChange={(event) => { setSequenceNumber(event.target.value) }} />}
                {showNavigationPanel && <div className={styles.qr_text}>{screenIdBysequenceNumber[sequenceNumber]}</div>}
                <QRCode className={styles.generated_qr_code} value={fullAddress} size={180} onClick={modalOnClickHandler} />
            </Modal>
        </>
    );
}

export default FeedbackProvider;