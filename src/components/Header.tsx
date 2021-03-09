import React from 'react';

import styles from '../styles/components/Header.module.css'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.imgContainer}>
                <a href=""><img src="icons/logo.png" alt="Logo CBM"/></a>
            </div>

            <nav className={styles.navContainer}>
                <ul>
                    <li>Início</li>
                    <li>História</li>
                    <li>Proposta Pedgógica</li>
                    <li>Infraestrutura</li>
                    <li>Contatos</li>
                    <li>
                        Área Reestrita
                        {/* <ul>
                            <li>Gestão Escolar</li>
                            <li>Ph Sistema de Ensino</li>
                            <li>Plurall</li>
                            <li>Portal do aluno</li>
                            <li>WebMail</li>
                        </ul> */}
                    </li>

                </ul>
            </nav>

        </header>
    );
}