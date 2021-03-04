import styles from '../styles/components/Slider.module.css'
export function Slider(){
    return(
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>
                <img src="img/capa-cursinho.jpg" alt="Capa Slider 1"/>

                <span>.</span>
            </div>
            <div className={styles.slider}>
                <img src="img/capa-Ensino-medio.jpg" alt="Capa Slider 2"/>
            </div>
        </div>
    )
}