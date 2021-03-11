import styles from '../styles/components/footer.module.css';
export function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <section className={styles.infosContainer}>
                <div className={`${styles.infos} ${styles.location}`}>
                    <div><i className="uil uil-location-pin-alt"></i></div>
                    <span>Rua Cel. Albino, 1776 - Presidente Prudente / SP</span>
                </div>

                <div className={`${styles.infos} ${styles.mail}`}>
                    <div><i className="uil uil-envelope"></i></div>
                    <span>colegio@bragamello.com.br</span>
                </div>

                <div className={`${styles.infos} ${styles.fone}`}>
                    <div><i className="uil uil-phone"></i></div>
                    <span>(18) 3222-6988</span>
                </div>
            </section>
            <footer>
                <span>© 2021 COLÉGIO BRAGA MELLO</span>
            </footer>
        </footer>
    );
};
