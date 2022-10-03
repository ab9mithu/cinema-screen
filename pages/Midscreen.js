import React from 'react'
import Startvideo from './Startvideo'
import Stopvideo from './Startvideo'
 

function Midscreen() {
function Startvideo() {
 document.getElementById("myvideo").play();
}

 function Stopvideo(){
    document.getElementById("myvideo").pause();


 }

       

   
  return (

    
    <div>
        
        <video id="myvideo" width="200" height="200">
        <source src="/video.mp4" type="video/mp4"/>
        </video>
    
    <div className=' flex space-x-40'>

        
    
        <button id="start" onClick={Startvideo}>start</button>
        <button id="stop" onClick={Stopvideo}>stop</button>

    </div>

    </div>
  )
}

export default Midscreen