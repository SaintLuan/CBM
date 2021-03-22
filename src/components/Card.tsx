import { useEffect, useState } from 'react';
import Aos from "aos";

import styles from '../styles/components/Card.module.scss';
import "aos/dist/aos.css"


export function Card(){

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])

    return(
       
        <div data-aos="fade-up" className={`${styles.cardContainer}`}>
            <div className={styles.icon}>
                <i className="uil uil-map-marker"></i>
            </div>

            <h1>
                
            </h1>
        </div>
            
        
    );
}