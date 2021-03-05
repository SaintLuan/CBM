import { useState } from 'react';
import sliderData from '../../sliderData.json';
import styles from '../styles/components/Slider.module.css';


export function Slider(){
    const [currentImg, setCurrentImg]=useState(0);

    const goPrev = () => {
        {currentImg===0 ?(
            setCurrentImg(sliderData.length-1)
        ):(
            setCurrentImg(currentImg-1)
        )}
        console.log(currentImg);
    }
    const goNext = () => {
        {currentImg===sliderData.length-1?(
            setCurrentImg(0)
        ):(
            setCurrentImg(currentImg+1)
        )}
        console.log(currentImg);
    }

    return(
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>
                <img src={sliderData[currentImg].img} alt={sliderData[currentImg].alt}/>
                <span onClick={goPrev} ><i className="uil uil-angle-left-b"></i></span>
                <span onClick={goNext} ><i className="uil uil-angle-right-b"></i></span>
                
            </div>
        </div>
    )
}