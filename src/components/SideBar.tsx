import { useState } from 'react';
import styles from '../styles/components/SideBar.module.css';
import { Header } from './Header';

export function Nav(){
    const [sideBar, setSideBar]=useState(true);

    const showSideBar=()=>{
        setSideBar(!sideBar);
    }

    return(
        <>
            {sideBar?(
                <nav className={`${styles.navContainer} ${styles.collapsed}`} onMouseEnter={showSideBar}>
                    <div><img src="icons/avatar.png" alt=""/></div>
                    <ul>
                        <li><i className="uil uil-estate"></i></li>
                        <li><i className="uil uil-award"></i></li>
                        <li><i className="uil uil-graduation-cap"></i> </li>
                        <li><i className="uil uil-building"></i></li>
                        <li><i className="uil uil-phone"></i></li>
                        <li className={styles.dropdown}><i className="uil uil-user-exclamation"></i></li>
                    </ul>
                </nav>
            ):(
                <nav className={`${styles.navContainer} ${styles.fullBar}`} onMouseLeave={showSideBar}>
                    <div><img src="icons/logo.png" alt=""/></div>
                    <ul>
                        <li><i className="uil uil-estate"></i>Início</li>
                        <li><i className="uil uil-award"></i>História</li>
                        <li><i className="uil uil-graduation-cap"></i>Proposta Pedagógica</li>
                        <li><i className="uil uil-building"></i>Infraestrutura</li>
                        <li><i className="uil uil-phone"></i>Contatos</li>
                        <li className={styles.dropdown}>
                            <i className="uil uil-user-exclamation"></i>
                            Área Restrita <i className="uil uil-angle-down"></i>

                            <ul className={styles.dropdownContent}>
                                <li>Gestão Escolar</li>
                                <li>Ph Sistema de Ensino</li>
                                <li>Plurall</li>
                                <li>Portal do Aluno</li>
                                <li>WebMail</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}