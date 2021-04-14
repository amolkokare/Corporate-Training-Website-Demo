
import React from 'react';
import '../../App.css';
import '../../client.css';
import '../../patner.css';
export default function Home() {
    return (
        <>
            <div >
                <h1 className='home'>
                    <h2>We will help you <span className='bc'>ACQUIRE
       SKILLS</span>  <br /> that everyone admirses..!!<br />
                        <br /><span className='ab'>
                            Are you not able to maintain your Technological Edge?
                            Are you struggling to find learning options that match your work schedule?
                            We understand your concerns.<br/>
                            We offer you 1-on-1 training option which will fit your work <br/>
                            schedule like hand in glove at an affordable fee.</span></h2>




                </h1>
            </div>

            <div className='ef'>
                <img src={process.env.PUBLIC_URL+"/img/r new.bmp"} alt="ri"></img>
            </div>
            <h1 className="heading">
                <h3 >Our Clients</h3>
                </h1>
                <h1 className="heading1">
                <img src={process.env.PUBLIC_URL+"/images/ls.png"}alt="/" width="150"></img>
                </h1>
            <div className="client" >
            
                    
            <div className="container">    
            

           <img src={process.env.PUBLIC_URL+"/images/img3.png"}  alt="/" width="140"></img>
             
             </div>
             <div className="container1">
             
      
                <img src={process.env.PUBLIC_URL+"/images/img4.png"}  alt="/"width="150"></img>
           
                </div>
                <div className="container2">
              
    
                <img src={process.env.PUBLIC_URL+"/images/img5.jpg"}  alt="/"width="80"></img>
           
                </div>
                <div className="container3">
            
                <img src={process.env.PUBLIC_URL+"/images/img6.jpg"}  alt="/"width="80"></img>
           
                </div>
                <div className="container4">
            

                 <img src={process.env.PUBLIC_URL+"/images/img7.png"}  alt="/" width="100"></img>
                
                 </div> 
                 <div className="container5">
               
                <img src={process.env.PUBLIC_URL+"/images/img8.png"}  alt="/"width="70"></img>
                 
                 </div> 
                 <div className="container6">
                
                <img src={process.env.PUBLIC_URL+"/images/img9.png"}  alt="/"width="140"></img>
                
                 </div>
                
                 <div className="container7">
                 <img src={process.env.PUBLIC_URL+"/images/img8.png"}  alt="/"width="70"></img>
                 
                 </div> 
                 <div className="container8">
                 <img src={process.env.PUBLIC_URL+"/images/img8.png"}  alt="/"width="70"></img>
                 
                 </div> 
                 <div className="container9">
                 <img src={process.env.PUBLIC_URL+"/images/img8.png"}  alt="/"width="70"></img>

                </div>
                </div>
                
        
        
        <h1 className="heading">
            <h3 >Our partners</h3>
            </h1>
            <h1 className="heading1">
            <img src={process.env.PUBLIC_URL+"/images/ls.png"}alt="/" width="150"></img>
            </h1>   
        <div className="patner">
      
            <div className="pcontainer">    
            <a href = {"/AboutUs"}>

           
             <img src={process.env.PUBLIC_URL+"/images/img3.png"}  alt="/" width="140"></img>
             </a>

             </div>
             <div className="pcontainer1">
             <a href = {"/AboutUs"}>
      
                <img src={process.env.PUBLIC_URL+"/images/img4.png"}  alt="/"width="150"></img>
            </a>
                </div>
                <div className="pcontainer2">
                <a href = {"/AboutUs"}>
    
                <img src={process.env.PUBLIC_URL+"/images/img5.jpg"}  alt="/"width="80"></img>
            </a>
                </div>
                <div className="pcontainer3">
                <a href = {"/AboutUs"}>

                <img src={process.env.PUBLIC_URL+"/images/img6.jpg"}  alt="/"width="80"></img>
           </a>
                </div>
                <div className="pcontainer4">
                <a href = {"/AboutUs"}>

                 <img src={process.env.PUBLIC_URL+"/images/img7.png"}  alt="/" width="100"></img>
                     </a>  
                 </div> 
                 <div className="pcontainer5">
                 <a href = {"/AboutUs"}>

      
                <img src={process.env.PUBLIC_URL+"/images/img8.png"}  alt="/"width="70"></img>
                 </a>
                 </div> 
                 <div className="pcontainer6">
                 <a href = {"/AboutUs"}>
         
                <img src={process.env.PUBLIC_URL+"/images/img9.png"}  alt="/"width="140"></img>
                </a>
                 </div>
                <div className="pcontainer7">
                <a href = {"/AboutUs"}>
        
                 <img src={process.env.PUBLIC_URL+"/images/img10.png"}  alt="/"width="150"></img>
                </a>
                 </div>
                <div className="pcontainer8">
                <a href = {"/AboutUs"}>
       
                  <img src={process.env.PUBLIC_URL+"/images/img11.jpg"}  alt="/"width="100"></img>
                </a>
                 </div>
                 <div className="pcontainer9">
                 <a href = {"/AboutUs"}>
       
                 <img src={process.env.PUBLIC_URL+"/images/img12.png"}  alt="/"width="140"></img>
                 </a>
  
                 </div>
           </div>
           
           
        </>
    );
}