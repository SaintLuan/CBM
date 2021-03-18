import { useEffect, useState } from 'react';
import styles from '../styles/components/Card.module.scss'
import FadeComponent from './FadeComponent';

export function Card(){
    return(
        <FadeComponent direction="right" delay={2}>
            <div className={`${styles.cardContainer}`}>
                <div className={styles.icon}>
                    <i className="uil uil-map-marker"></i>
                </div>

                <h1>

                </h1>
            </div>
        </FadeComponent>
    );
}