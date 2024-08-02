import React, { useEffect, useRef, useState } from 'react'
import './Panel.css';
import { Carrusel } from './Imagenes/Carrusel';


export const Panel = () => {
    const listref =useRef();
    const [currentIndex, setcurrentIndex] = useState(0);

    useEffect(()=>{
        const listNode = listref.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if(imgNode){
            imgNode.scrollIntoView({
                behavior:"smooth"
            });
        }

    }, [currentIndex])

const scrollToImage=(direction) => {
    if(direction == 'prev'){
        setcurrentIndex(curr => {
            const isFirstSlide = currentIndex === 0;
            return curr -1;
        })
    } else {
        const isLastSlide = currentIndex === Carrusel.length - 1;
        if(isLastSlide){
            setcurrentIndex(curr => curr + 1 );
        }
    }
}

  return (
    <div className='main-container'>
        <div className='slider-container'>
            <div className='leftArrow'onClick={()=>scrollToImage('prev')}>&#10092;</div>
            <div className='rightArrow'onClick={()=>scrollToImage('next')}>&#10093;</div>

            <div className='container-images'>
                <ul ref={listref}>
                {
                    Carrusel.map((item) => {
                        return <li key={item.id}>
                            <img src={item.imgUrl} width={500} height={280} />
                        </li>
                    })
                }
                </ul>
            </div>
        </div>
    </div>
  )
}
