
import React from 'react';
import '../../App.css';

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
                <img src={process.env.PUBLIC_URL+"/images/ls.png"}alt="/" width="100"></img>
                </h1>
            <div className="container" >
            
                    
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img1.png"}alt="/" rounded></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img2.png"}  alt="/"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img3.png"}  alt="/"height="150"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img4.png"} alt="/" height="150"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img5.jpg"}  alt="/"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img8.png"}  alt="/"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img9.png"} alt="/"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img10.png"} alt="/"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img12.png"} alt="/"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img6.jpg"} alt="/"></img>
                <img className='img1' src={process.env.PUBLIC_URL+"/images/img7.jpg"} alt="/"></img>
                <img className='img1'  src={process.env.PUBLIC_URL+"/images/img13.png"} alt="/" height="100"></img>


                
</div>
        </>
    );
}