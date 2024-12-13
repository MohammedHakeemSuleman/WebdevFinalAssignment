
"use client"
import React, { useState , useEffect} from 'react';
import Image from 'next/image';

const ImageSlider =({pics})=>{
    const [slideIndex,setSlideIndex] = useState(0);

    const show =(index) =>{
        if(index >=pics.length){
            setSlideIndex(0);
            ///set default index to 0 if greater than array
        }    else if (index < 0){
            setSlideIndex(pics.length-1);
            ///set to -1 if less tha 0 ie if slide 1 2 3 the  you go back on 1 go to 3
    } else{
        ///else set slide to that index
        setSlideIndex(index);
    }
};
///for go foward button 
const foward =() =>{
    setSlideIndex((prevIndex)=>(prevIndex + 1) % pics.length);
};
const backward =() =>{
    setSlideIndex((prevIndex)=> (prevIndex - 1 +pics.length) % pics.length);
};
///go back button
useEffect(() => {
    const slides =document.querySelectorAll('.slide');
    slides.forEach((slide, index)=>{
        slide.classList.remove('displaySlide');
        if(index===slideIndex){
            slide.classList.add('displaySlide');
        }
    });
}, [slideIndex, pics.length]);
///creating the html template so it can be reused over and over
return(
<div className="slider">
    <button onClick={backward} id="back">Previous</button>
    <div className="slides">
    <Image className="slide" src={pics[0]} alt ="slide 1" sizes='100vw' width={0} height={0} style={{width:'100%',height:'auto'}}/>
    <Image className="slide" src={pics[1]} alt ="slide 2"sizes='100vw' width={0} height={0} style={{width:'100%',height:'auto'}}/>
    <Image className="slide" src={pics[2]} alt ="slide 3"sizes='100vw' width={0} height={0} style={{width:'100%',height:'auto'}}/>
    </div>
    <button onClick={foward} id="next">Next</button>
</div>
);
};
///https://stackoverflow.com/questions/65169431/how-to-set-the-next-image-component-to-100-height
export default ImageSlider;