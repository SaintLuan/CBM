import { useEffect, useState } from 'react';
import sliderData from '../../../sliderData.json';
import styles from '../../styles/components/Home/Slider.module.scss'

export function Slider(){
    const [currentImg, setCurrentImg]=useState(0);

    const goPrev = () => {
        {currentImg===0 ?(
            setCurrentImg(sliderData.length-1)
        ):(
            setCurrentImg(currentImg-1)
        )}
    }
    const goNext = () => {
        {currentImg===sliderData.length-1?(
            setCurrentImg(0)
        ):(
            setCurrentImg(currentImg+1)
        )}
    }

    useEffect(()=>{
        const next = (currentImg+1)%sliderData.length;
        const id = setTimeout(() => setCurrentImg(next), 3000);
        return () => clearTimeout(id);
    },[currentImg]);
 
    return(
        <section className={styles.sliderContainer}>
            <div className={styles.slider}>
                <img src={sliderData[currentImg].img} alt={sliderData[currentImg].alt}/>
                <span onClick={goPrev} className={styles.arrowPrev} ><i className="uil uil-angle-left-b"></i></span>
                <span onClick={goNext} className={styles.arrowNext} ><i className="uil uil-angle-right-b"></i></span>
            </div>
        </section>

        
    )
}