import React from 'react';

import { Nav } from './Nav';

import styles from '../styles/components/Header.module.css'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.imgContainer}>
                <a href=""><img src="icons/logo.png" alt="Logo CBM"/></a>
            </div>

            <Nav />
        </header>
    );
}