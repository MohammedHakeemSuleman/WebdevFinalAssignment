import {Link} from 'react'
import Image from "next/image";
import ImageSlider from './components/Slide';









export default function Home() {


  var IMAGES = ['/photo/IMG_0170.jpeg','/photo/IMG_1809.jpeg','/photo/IMG_1808.jpeg']
  return (
 
   

    
    
    <main>
    <title>Index</title>
    <html lang="en"></html>


    <div id="Togglebutton"><a className="Toggle">darkmode</a></div>
    
    
    <div id="Menubutton"><a className="Men">menu</a></div>

<div  id="bars">
   
    <div id="bar1"> <a href='./student'>Student</a></div>
    <div id="bar2"><a href='/teacher'>business</a></div>
    <div id="bar3"><a href='/other'>Learning Resources</a></div>
</div>
<div className="teacher1">
    <div id="box1">
    <Image  src='/photo/872SHUSpaceCitymap.jpg' alt ="slide 1" sizes='100vw' width={0} height={0} style={{width:'100%',height:'auto'}}/>
</div>
</div>

    <div id="box1">
      <h1>About Us</h1>
    <h2>Cantor College was established in 1989 to specialize in Computing and Design.   At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe.  Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.</h2>

    </div>


    <div id="box1">
      <h1>Facilities
The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.

Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</h1>
    </div>



    <div id="box1">
      <h1>Facilities Include:</h1>
      <ul>
        <li>wi-fi technology</li>
        <li>pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
        <li>specialist faculty facilities</li>
        <li>a double height lecture theatre at first and second floor level</li>
        <li>dramatic three-storey glass open atrium</li>
        <li>meeting rooms</li>
        <li>office accommodation</li>
        <li>specialist IT facilities</li>
        <li>reception desk area</li>
        <li>catering outlet</li>
        <li>parking for disabled badge holders</li>
        <li>cycle racks</li>
        <li>gallery</li>
       

      </ul>
    </div>
 

    <div className='test'>
    <ImageSlider pics={IMAGES}> </ImageSlider>
    </div>



   
    
 





 
    
</main>
        
  
  );
}



////TODO FOR TOMZ 2/12/2024
///GET MOBILE VIEW PORT WORKING
///lOAD IMAGES
///FIX IMAGE SLIDER 
///MAKE HEADER COMPONENT 
//USE LIGHT HOUSE TO GET A RATING 





//TODO BY WENSDAY
///ADD TEXT FROM ASSIGNMENT FILE
///IMPORT TABLE FROM SQL


///4/12/24
///Make sure the IMage Slider can actually load images
///Import table from SQL
///Clean up CSS
///Name each page maybe a dynamic header
///REDO WIREFRAMING 

///11/12/24
///Make it look NIce!!!!!!