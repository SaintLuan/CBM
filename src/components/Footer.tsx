import styles from '../styles/components/footer.module.css';
export function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <section className={styles.infosContainer}>
                <div className={`${styles.infos} ${styles.about}`}>
                    <img src="icons/logo.png" alt=""/>
                    <p>
                        Com num espaço de mais de nove mil metros quadrados, e amplos ambientes ao ar 
                        livre e completa infraestrutura que garantem suporte ao ensino e à aprendizagem. 
                        Há espaços que atendem a todos os segmentos, da Educação Infantil ao Pré-vestibular.
                    </p>
                    <div className={styles.socialMedia}>
                        <i className="uil uil-facebook-f"></i>
                        <i className="uil uil-instagram"></i>
                        <i className="uil uil-twitter-alt"></i>
                        <i className="uil uil-youtube"></i>
                    </div>  
                </div>

                <div className={`${styles.infos} ${styles.usefullLinks}`}>
                    <h1>Sobre o Colégio</h1>

                    <ul>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                    </ul> 
                </div>

                <div className={`${styles.infos} ${styles.contacts}`}>
                    <h1>Contatos</h1>

                    <ul>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                        <li>Nossa História</li>
                    </ul> 
                </div>

                
            </section>
            <footer>
                <span>© 2021 COLÉGIO BRAGA MELLO</span>
                <span>Todos os Direitos Reservados</span>
            </footer>
        </footer>
    );
};
