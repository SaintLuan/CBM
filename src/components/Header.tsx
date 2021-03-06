import React, { useEffect, useState } from 'react';

import styles from '../styles/components/Header.module.scss'

export function Header(){
    const [hasScroll, setScroll]=useState(false);
    const [menuBtn, setMenuBtn]=useState(false);
    const  [menuClicked, setMenuClick]=useState(false);

    // ##### CONTROLE DO HEADER (TRANSPARÊNCIA) #####
    const handleScroll=() => {
        const offset=window.pageYOffset;
        if(offset > 75 ){
          setScroll(true);
        }
        else{
          setScroll(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    // ##### CONTROLE DO MOBILE MENU #####
    const handleClick = () => setMenuClick(!menuClicked);
    const closeMobileMenu = () => setMenuClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setMenuBtn(false);
        } else {
          setMenuBtn(true);
        }
      };
    
      useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return (
          window.removeEventListener('resize', showButton)
        )
      }, []);

    return(
        <header className={`${styles.headerContainer} ${hasScroll?styles.fixed :''}`}>
            <div className={styles.imgContainer}>
                <a href=""><img src="icons/logo.png" alt="Logo CBM"/></a>
            </div>

            {
                !menuBtn ? (
                    <div className={styles.menuBtn} onClick={handleClick}>
                        {menuClicked ? <i className="uil uil-multiply"></i> : <i className="uil uil-bars"></i>}
                    </div>
                ):(
                    <nav className={`${styles.navContainer} ${hasScroll?styles.navContainerFixed : ''}`}>
                        <ul>
                            <li>Início</li>
                            <li>História</li>
                            <li>Proposta Pedgógica</li>
                            <li>Infraestrutura</li>
                            <li>Contatos</li>
                            <li>
                                Área Reestrita <i className="uil uil-angle-down"></i>
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
                )
            }

        </header>
    );
}