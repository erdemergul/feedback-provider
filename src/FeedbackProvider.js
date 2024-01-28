import React from 'react'
import styles from './styles.module.css'

const FeedbackProvider = ({ text }) => {
    return <div className={styles.test}>First feedback provider: {text}</div>
}

export default FeedbackProvider;