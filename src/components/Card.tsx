import styles from '../styles/components/Card.module.scss'

export function Card(){
    return(
        <>
            <div className={`${styles.cardContainer} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>
                <div className={styles.icon}>
                    <i className="uil uil-map-marker"></i>
                </div>

                <h1>

                </h1>


            </div>
        </>
    );
}