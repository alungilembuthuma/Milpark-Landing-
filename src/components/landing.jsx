import {useState , React}  from 'react';
import pic from '../assets/OIP.jpeg'

const LandingPage = () => {

const [wayToStudy, setWayToStudy] = useState('');
 const [studyInterest, setStudyInterest] = useState('');
  const [educationLevel, setEducationLevel] = useState('');

  const handleWayToStudyChange = (event) => {
    setWayToStudy(event.target.value);
  };

  const handleStudyInterestChange = (event) => {
    setStudyInterest(event.target.value);
  };

  const handleEducationLevelChange = (event) => {
    setEducationLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log('Form submitted with:', { wayToStudy, studyInterest, educationLevel });
  };

    return (
        
    <div className="landing-page" style={{backgroundColor:"#F1F2F2",backgroundColorWidth:"100%"}}>
        <nav style={{backgroundColor:"#1A3584",width:"130%",height:"30vh",display:"flex", marginLeft:"-4%", marginTop:"-2%"}}>
        <img src='data:image/jpeg;base64,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' alt='milpark logo' style={{width:"10%", marginLeft:"100px",height:"80px"}}/>
    <div style={{display:"flex", font:"bold", color:"white", padding:"30px", marginLeft:"35%", marginTop:"-1%", justifyContent:"space-between",}}>
        <h3 style={{marginRight:"30px"}}>086 999 0001</h3>
        <h3 style={{marginRight:"30px"}} >Apply Now</h3>
        <h3 style={{marginRight:"30px"}}>Call Me Back</h3>
        <h3 style={{marginRight:"30px"}}>Login</h3>
    </div>
<br></br>
       <div style={{display:"flex", marginTop:"6%", marginLeft:"-76.4%", color:"white", fontSize:"18px"}}>
       <p style={{marginRight:"30px"}}>Study With Us</p>
       <p style={{marginRight:"50px"}}>Ways To Study</p>
       <p style={{marginRight:"50px"}} >How To Apply</p>
       <p style={{marginRight:"50px"}}>Programmes</p>
       <p style={{marginRight:"50px"}}>Corporate</p>
       <p style={{marginRight:"50px"}}>About</p>
       <p style={{marginRight:"50px"}}>News</p>

       <input type='search' className='search-input' placeholder='Search...' style={{border:"none", borderBottom:"1px solid", padding:"10px",fontSize:"18px", backgroundColor:"#1A3584", color:"white", borderBlockColor:"white", marginTop:"2%", textColor:"white", borderWidth:"10%", height:"5%"}} />
       <span>
        <i className='search-icon'aria-hidden="true"></i>
       </span>
       </div>
        </nav>

        <div className='body' style={{marginTop:"12%"}} >
           <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe
           3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeC
           wnJyw4P/Zztn////////////////CABEIALkBUAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQGBQEC/9oAC
           AEBAAAAAOSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmqkACtmwAE833Gp9jnWanSpfUMG3lEPKu3ouTd+sgAAvdefm
           uLpafT4XZ5vQzPm3lFPIXNfwuD3elkAAFmb6Pj7R2UPtatt5RTyHuuy8Xb6WQAHTgvcybxPQszw/FuL5o3KO3lFPIdalHbu9LIADv
           8yzL6cTszVaHb5twcPbyinkNdke7TudLIADr1L9C3E9ex07dr4hqXeZt5RX4Omz3b5VifIAAAADzbygBTyAAAAA828oAU8gAAAAPN
           vKAFPIAAAADzbygBTyAAAAA828oAU8gAAAAPNpIAFTJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB68AAAAAAPf//EABgBAQEBA
           QEAAAAAAAAAAAAAAAABAgME/9oACgICEAMQAAAA93EAAAAAAIAAAAAACoAAAOWgA3NQAJeWtQzbDrnx9orvjjrrmuuColglIqK1PJ
           1iz188Ul64KjGolLJbJbNTy9Yrrio064AAAAPH2gA9GOuCoAAAPH2gA9GOuAAAADx9oAPRjrgqAAAAAAAAAAAAACgAAAAAA//EADs
           QAAEDAQQEDAUDBAMAAAAAAAECAwQABRESMRM0cnMQFBUhMDNBU1RxkrEgMkBEgiJCUDVRYXCDobL/2gAIAQEAAT8A/wB0nI01Z0JT
           TRLAvKE1ybB8OmuTYPh01ybB8OmuTYPh01ybB8OmuTYPh01yZB7gVybB8OmuTYPh01ybB8OmuTIPcCpkCI1FeWhkBQT08ZkyH0NBWH
           FfUyEuIUAqxBQzqHZy5aCvSYBiuFRoZkSlRw5ddi59mo0MyX3GQ5hw0r9OL/FGyQMF8tAKsgRUmO5FcKHPMEZEUuz1ohJklXPmUUw0
           X3mmgbsarr6Nk86kIltlwZoqPFW/K4uTgVz3/jTcJx2UthB+RRCl1IaQy6UIdDl2agLhRyPlTHUM7tHt8Mh7QMuO4cWEZVy2jwx9dQ
           pyJmO5GAp4H3ksMrdVkkVy2jwx9dQpwmaS5rBguqfqUjY6ezNeZ/Knhx5qWwOtZdOGmVIZlRoTeSWiVVZvNarx3lWXr7+yqnM1+Zqb
           HYf4sXpCWglFPlu0Z7DTfOhOZoLcclvsLaXoC3hBqI2pm02W1ZodpbDLUp+ctwnBmhIqA6XrV0uWLGalAoiPmJmXVab+/Acj5Ux1DO
           7R7fDaGpP7PBAf0EttR+VRwq4LZf6pgbauCxPufwqfqUjY6eG8hiS26sEpF9CaW5rshsXhalcxqJNDc4yXrzfiqJKaYmrfWFYTiqFL
           bjynXVhVygakqs9bSgw24HCc1VPltStBgChgRcb6gymYiX1kKLqhcihaM0EEvrNOzIyp7ElAXcPnpFopROeduUWXc00w/Gjzg8jHoqZnlmY66Ly04slSalKjrdK2AoJOaSMjRyPlTHUM7tHt8Noak/s8CklJUlQuIJBqFID8VD
           ijzgXL/GpLxkPuOn9xopKbrxmAR5GrE+5/Cp+pSNjo2LOQ7HS+uSGwafjNtONIbkJdx5kUuyEIXgM1AXUqM9EVhcHkRkamQ+KBn9eLGm+kRMUJyVj+VV2GokF2UCu8IbGazT0FlDLjrUtLmDMUy0p55tpOa1VOiGI4lIUVJUm8GmLNbfQgiWnGU3lFSIjTKmkolJcK
           14Td2VNimI/oseM3Ck2VgQFypCGak2ctlrTNuB1qocHjaHyHLlIyFLSpsqSpJCkm4g1Mh8U0X68WNN9HI+VMdQzu0e3w2hqT+zRq12
           NG+l0ZOimZS2mJDQydAplkvvNtD9xq1ABNWBkEoqxPufwqfqUjY6NkRzZLXGMWDH2U6IgkMcWK8OJN+Laq2dc/4xUsqXY7C3fnq2co
           e6pn+hyd5Uu9FlQwj5DdfwWU0QH5WAnCClAp5t+TZt7yCHmiTVja2rdUnWU74f8AqpQBttirTKzNdCuy4JqxSSZKD1eCrLJRGnrT2U
           6hFqRi80LpCBctNWz9pu6OR8qY6hndo9vhtDUn9mjU9jTxVpHzAYk8FjMdY+dhNWrrzmymrE+5/Cp+pSNjo2JkMQ0R32nFU+5E0rKo
           7a0JSQVA09Nsx5ekXGcWupkxctYvGFAyTSJsV5hDUxpRwZKTUqa0thMaO1gaqJOS00WH28bJp92zQy6mOyvSL7VUueG4zLMUrQU5qqJabrbh4wtbjZTUGSzFlLcIWUXECgsB4L7A4Ff931OliRKDzWJNwFGbClJHG2DjHainp7KWCxEaLaDmahy22GJbSgol0Uw+5HcS42ecVaMtqUWSgEXJN9HI+VMdQzu0e3wy2lPx3WkkAqFcjSu8a4H7IeLzhaKMBN6aYZDDLbQySKm2a/IkrdQtABAqzoTsTTYyk4rsqn6lI2PrTkfKmOoZ3aPbpJ+pSNj605HypjqGd2j26SfqUjY+tOR8qY6hndo9ukn6lI2PrTkfKmOoZ3aPbpJ+pSNj605HypjqGd2j26SfqUjY+tORph1rQM3uI6tPaK0rXeo9QrStd6j1CtK13qPUK0rXeo9QrStd6j1CtK13qPUK0rXeo9QrStd6j1CtK13qPUK0rXeo9QrStd6j1CpzjZhvgOIJwfwVw4LhwXDguFXD/V5zP8SMxX//xAAqEQEAAgECBQMDBQEAAAAAAAABAAIREjEDEyAhURAiQTBxkSMyQlBgcv/aAAgBAgEBPwD+25tfDOdXwznV8M51fDOdXwznV8MrYsddnFX7TXbTj5ja3u/5l7Jp74jewV/LL2RMPxG9hx5D0d30NyW4ddLglTVYJelSqhODs9KhvNdSKPbO89mH8MxVFnsAcs9i+Vn6e2fjExVU3cSuMGI7vpX9x94uEPMrTS2Zdzw8zg7PTcUN953Grhe0BrpcfLMW3x/LOJbNjAJlmLFbVxEVPszu106ZpdVk3+JQSpHd9DcnEuZqjtL3GuBjavLxnvODs/Xd3q4Oz9d3erg7P13d6cM4Oz/gv//EACIRAAIBBAIBBQAAAAAAAAAAAAABEQISITEQIEAiMlBRYP/aAAgBAwEBPwD5a1ljLGWMsZYxqO62WqSNCIWRISUdGKpjcITbZX2hmTJlGcoyeoyPfL0+G5hC9xX1R95JTklChGJTEzEzJOkPfLKVsSyJ
           O4r8Wvxa/Fq/Bf/Z' alt='milpark logo' style={{width:"17%", marginLeft:"34%",height:"16vh"}}/>
           <h1 style={{fontSize:"60px", color:"#151446", marginLeft:"3.2%"}}>2025 REGISTRATIONS</h1>
                 <h1 style={{fontSize:"60px", color:"#151446", marginLeft:"28%", marginTop:"-3%"}}>ARE OPEN</h1>
              
              <button style={{border:"4px solid #1A3584", width:"220px", height:"70px", backgroundColor:"white", marginLeft:"34.5%",":hover":{backgroundColor:"#1A3584", color:"white", cursor:"pointer"}}}>
               <h2 style={{color:"#1A3584"}}>How To Apply </h2>
              </button>
        
              <img src='https://www.milpark.ac.za/media/kggc5kuj/applications-open.png' alt='first image' style={{marginLeft:"52%", width:"50%", marginTop:"-42%", height:"30%"}} />
              
              <div style={{backgroundColor:"white", width:"120%", marginLeft:"-2%", marginTop:"-1%"}}>
<p style={{width:"15%", marginTop:"6%", marginLeft:"4%"}}>We partner with you to provide a world-class education, helping you upskill and prepare for the future digital world of work.</p>
              
              <h1 style={{fontSize:"60px", color:"#151446", marginLeft:"13%", marginTop:"6%"}}>MILPARK</h1>
              <h1 style={{fontSize:"60px", color:"#151446", marginLeft:"11%", marginTop:"-1%"}}>EDUCATION</h1>
              <h6 style={{fontSize:"30px", marginTop:"-3.2%", marginLeft:"10%", color:"#151446"}}>We've got you. You've got this.</h6>
              
              <button style={{border:"4px solid #1A3584", width:"370px", height:"70px", backgroundColor:"white", marginLeft:"11%",":hover":{backgroundColor:"#1A3584", color:"white", cursor:"pointer", marginTop:"-4%"}}}>
               <h2 style={{color:"#1A3584"}}>Find Your Perfect Programme </h2>
              </button>
              
              <img src='https://www.milpark.ac.za/media/fdddwvws/hero_final3_cristal.jpg' alt='second image' style={{marginLeft:"48%", width:"45%", marginTop:"-28%", height:"15%"}} />
              </div>
              <div style={{backgroundColor:"#F1F2F2",backgroundColorWidth:"100%", border:"3px solid #151446", borderBottom:"0px", borderTop:"0px", borderLeft:"0px", width:"50%"}}>
              <h1 style={{fontSize:"60px", color:"#151446", marginLeft:"13%", marginTop:"11%"}}>STUDY AT</h1>
              <h1 style={{fontSize:"60px", color:"#151446", marginLeft:"13%", marginTop:"-3%"}}>MILPARK</h1>
              <p style={{width:"28%", marginLeft:"13%"}}>Let’s help you find what you’re looking for. Refine your search with the filters alongside and see the relevant programmes available to you.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginLeft:"150%", marginTop:"-50%" }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="way-to-study" style={{ fontWeight: 'bold', color:"#151446", fontFamily:"sans-serif"}}><h2>Select Your Way to Study</h2></label>
        <select
          id="way-to-study"
          value={wayToStudy}
          onChange={handleWayToStudyChange}
          style={{
            padding: '10px',
            border: '3px solid #151446',
            borderRadius: '5px',
            appearance: 'none',
            width: '600px',
            height: '50px',
            backgroundColor: 'white'
          }}
        >
          <option value="">Select Here</option>
          <option value="online">Online</option>
          <option value="on-campus">On-Campus</option>
          <option value="blended">Blended</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="study-interest" style={{ fontWeight: 'bold', color:"#151446", fontFamily:"sans-serif"}}><h2>Select Your Study Interest</h2></label>
        <select
          id="study-interest"
          value={studyInterest}
          onChange={handleStudyInterestChange}
          style={{
            padding: '10px',
            border: '3px solid #151446',
            borderRadius: '5px',
            appearance: 'none',
            width: '600px',
            height: '50px',
            backgroundColor: 'white'
          }}
        >
          <option value="">Select Here</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="education-level" style={{ fontWeight: 'bold', color:"#151446", fontFamily:"sans-serif"}}><h2>Select Your Highest Education Level</h2></label>
        <select
          id="education-level"
          value={educationLevel}
          onChange={handleEducationLevelChange}
          style={{
            padding: '10px',
            border: '3px solid #151446',
            borderRadius: '5px',
            appearance: 'none',
            width: '600px',
            height: '50px',
            backgroundColor: 'white'
          }}
        >
          <option value="">Select Here</option>
          <option value="bachelors">Bachelor's Degree</option>
          <option value="masters">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'white',
          border: '2px solid #8694BC',
          borderRadius: '0px',
          cursor: 'pointer',
          width: '400px',
          marginTop:"5%",
          marginLeft:"-14%"
        }}><h3 style={{color: "#8694BC"}}>Find your perfect programme</h3></button>
       <a href="#" class="clear-filters"><h3 style={{color:"#151446", marginTop:"55%"}}>Clear filters</h3></a>
      </div>
    </form>

     </div> 

    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        marginTop: '3%',
        width:"105%",
        marginLeft:"-2%"
      }}
    >
      <h1
        style={{
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#151446',
          marginBottom: '20px',
        }}
      >
        Milpark offers so much more than an online education.
      </h1>
      <p
        style={{
          fontSize: '22px',
          color: '#333',
          marginBottom: '10px',
          color: '#151446'
        }}
      >
        We are a community where students can connect and belong.
      </p>
      <p
        style={{
          fontSize: '22px',
          color: '#333',
          marginBottom: '10px',
          width: '50%',
          color: '#151446',
          marginLeft:'25%'
        }}
      >
        Where collaboration, inclusion, innovation and
        support creates a transformative educational
        experience that goes beyond learning,
        to enhance personal growth and development
        throughout your Milpark journey.
      </p>
      <p
        style={{
          fontSize: '22px',
          color: '#151446',
          marginBottom: '10px',
        }}
      >
        We believe that each student has significant
        value to offer the world.
      </p>
      <p
        style={{
          fontSize: '22px',
          color: '#151446',
          marginBottom: '10px',
        }}
      >
        And at Milpark, you'll find it.
      </p>
    </div>
    <div style={{backgroundColor:"white", width:"110%", marginLeft:"-2%"}}>
      <h1 style={{ textAlign: 'center', fontSize: '4em', fontWeight: 'bold', marginBottom: '20px', color:"#151446" }}>OUR PURPOSE</h1>
      <p style={{ textAlign: 'center', fontSize: '2em', lineHeight: '1.5', marginBottom: '40px', color:"#151446", marginTop:"7%" }}>✔ We believe we can enable people to become more than they dared imagine, unlocking their potential to help shape our collective future.</p>
      <h1 style={{ textAlign: 'center', fontSize: '4em', fontWeight: 'bold', color:"#151446" , marginTop:"5%"}}>OUR MANIFESTO</h1>
    
      <div style={{marginLeft:"6%"}}>
      <iframe width="1180" height="664" src="https://www.youtube.com/embed/SSgpcmPzT2U" title="Milpark. We&#39;ve got you. You&#39;ve got this." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div style={{marginTop:"5%", marginLeft:"6%"}}>
        <img src='https://www.milpark.ac.za/media/tapnppmh/website-manifesto2_cristal.jpg' style={{width:"88.5%"}}/>
    </div>
    
    <div className="container" style={{marginTop:"5%" , padding:"50px"}}>
      <h1 className="title" style={{textAlign: 'center', fontSize: '4em', fontWeight: 'bold', color:"#151446" , marginTop:"5%"}}>OUR SCHOOLS</h1>
      <p className="description" style={{ textAlign: 'center', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '40px', color:"#151446", marginTop:"-2%%",width:"40%", marginLeft:"3%" }}>
        A Milpark online learning journey is a transformative experience where
        you'll grow in confidence, knowledge, and possibility, whilst preparing for
        the real world and the digital future.
      </p>
      <p className="description" style={{ textAlign: 'center', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '40px', color:"#151446", marginTop:"-2%",width:"40%", marginLeft:"3%" }}>
        Accredited programmes in business, commerce, accounting, finance,
        insurance and banking are facilitated through our four schools: The
        School of Professional Accounting (CA Connect), the School of
        Commerce, the School of Financial Services and The Business School.
      </p>
      <p className="description"  style={{ textAlign: 'center', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '40px', color:"#151446", marginTop:"-2%",width:"40%", marginLeft:"3%" }}>
        Our learning pathways can take you from a higher certificate to doctorate
        and our flexible study options offer unique support for individual
        circumstances.
      </p>
    </div>

    <div className="container" style={{width:"100%"}} >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" style={{backgroundColor:"#1C3586", width:"47%", height:"400px"}} >
              <h2 className="card-title" style={{backgroundColor:"#BF3D62", width:"100%%",height:"25%", color:"white", fontSize:"40px"}}>SCHOOL OF PROFESSIONAL ACCOUNTING</h2>
              <p className="card-text" style={{color:"white", width:"50%", marginLeft:"3%"}}>
                The School of Professional Accounting (incorporating CA Connect) offers you the full
                online path to becoming a CA(SA) with our SAICA accredited PGDA. We've created a
                learning environment and made it about people, but using the benefit of online
                resources. Our online CTA and Bridging programmes are structured around
                empowering you with support and flexibility so that you can maximise your
                potential and become the best CA(SA) you can be.
              </p>
              <a href="#" className="btn " style={{color:"white", marginLeft:"5%", fontSize:"30px"}}>
                Learn More
              </a>
             
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{marginLeft:"49%", marginTop:"-30.5%"}}>
            <div className="card-body"  style={{backgroundColor:"#1C3586", width:"100%", height:"400px"}}>
              <h2 className="card-title" style={{backgroundColor:"#1C7B7B", width:"100%%",height:"25%", color:"white", fontSize:"40px"}}>SCHOOL OF FINANCIAL SERVICES</h2>
              <p className="card-text"  style={{color:"white", width:"50%", marginLeft:"3%"}}>

                Given the interconnectedness of financial planning, risk and insurance, banking,
                and investment management, there is a growing demand for individuals who are
                multi-skilled and ready for the job market.
              </p>
              <p className="card-text"  style={{color:"white", width:"50%", marginLeft:"3%"}}>

                We are well positioned to equip you with the knowledge and competencies you need to
                work in the financial services industry.
              </p>
              <a href="#" className="btn " style={{color:"white", marginLeft:"5%", fontSize:"30px"}}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
     <div style={{marginLeft:"7%", marginTop:"14%"}}>
     <iframe width="1180" height="664" src="https://www.youtube.com/embed/MQEYftqYcaQ" title="Andrew Horsfall: CEO at Milpark Education" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
      </div>
    </div>
  
    <div className="container" style={{backgroundColor:"#1C3687", marginTop:"4%"}}>
      <div className="header">
        <h1 style={{color:"white", fontSize:"60px", marginLeft:"6%", border:"4px solid white", borderLeft:"0px ", borderRight:"0px ", borderTop:"0px", marginLeft:"0%"}}>SOME OF OUR MOST POPULAR PROGRAMMES</h1>
      </div>
      <div className="content" style={{display:"flex"}}>
        <div className="card" style={{width:"145%", marginLeft:"10%",  border:"4px solid white", borderLeft:"0px ", borderBottom:"0px ", borderTop:"0px", marginLeft:"2%"}}>
          <div className="card-header" style={{marginLeft:"5%"}}>
            <h3 style={{color:"white", marginLeft:"5%"}}>Diploma</h3>
            <h2 style={{color:"white", marginLeft:"5%"}}>National Diploma in Human Resource Management and Practice Support</h2>
          </div>
          <div className="card-body" style={{color:"white"}}>
            <p>The purpose of the National Diploma in Human Resources Management and Practices is to provide you with a nationally accredited, internationally recognised human resources management qualification that will allow you to become employable as a human resource practitioner, human resource senior practitioner, human resource manager, human resource generalist, and related human resource positions.</p>
            <p>Awarded the Best SABPP Blended Learning Training Provider for five years in a row!</p>
            <p><strong>Important Notice to All Prospective and Current Students</strong></p>
            <p>Historical qualifications in South Africa are no longer eligible for registration and our National Diploma in Human Resource Management and Practices NQF5 (SAQA Qualification ID - 61592) falls part of these historical qualifications.</p>
            <p>This qualification is therefore no longer open to accept "NEW ADMISSIONS" (NEW ADMISSIONS refers to prospective students wanting to apply to study this qualification).</p>
            <p>Our existing students, (already registered and have started with a module) may continue their studies. There will be a 3 year teach-out phase post 28 June 2024.</p>
            <p>Prospective students with an interest in Human Resource Management, can apply for Milpark's Bachelor of Business Administration with a Major in Human Resources (NQF7).</p>
          </div>
          <div className="card-footer">
            <div className="school">✔ School of Commerce</div>
            <button className="btn"style={{width:"200px", color:"white", fontSize:"30px",fontWeight:"bold", backgroundColor:"#1C3687", border:"none", marginTop:"2%"}}>View Details</button>
          </div>
        </div>
        <div className="card" style={{marginLeft:"2%", color:"white",marginLeft:"4%", width:"145%", border:"4px solid white", borderLeft:"0px", borderTop:"0px", borderBottom:"0px"}}>
          <div className="card-header">
            <h3 style={{color:"white"}}>Degree</h3>
            <h2 style={{color:"white"}}>Bachelor of Commerce in Accounting</h2>
          </div>
          <div className="card-body">
            <p>If you're looking to qualify as a Chartered Accountant, we offer the BCom in Accounting as a first step on the path to get you to CA(SA), successfully.</p>
            <p>We offer a new way to learn online, with a focus on support, flexibility and interaction.</p>
            <p>We are an engaging and supportive community who are walking the learning journey together.</p>
          </div>
          <div className="card-footer">
            <div className="school">✔ School of Professional Accounting</div>
            <button className="btn" style={{width:"200px", color:"white", fontSize:"30px",fontWeight:"bold", backgroundColor:"#1C3687", border:"none", marginTop:"163%"}}>View Details</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header" style={{width:"95%"}}>
            <h3 style={{color:"white"}}>Postgraduate Diploma</h3>
            <h2 style={{color:"white"}}>Postgraduate Diploma in Business Administration (PGDBA)</h2>
          </div>
          <div className="card-body" style={{color:"white", width:"60%", marginLeft:"3%"}}>
            <p>On your way to an MBA, you need Milpark's dynamic PGDip (Business Administration) for admission. The PGDip (Business Administration) equips you to excel in the marketplace by providing an immersive experience that will equip you with a variety of skills, such as critical and strategic thinking, problem-solving, responsible, and ethical leadership. Graduates will receive credits for four modules towards the Milpark MBA, which will enhance their career prospects and assist by reducing the time taken to complete the MBA.</p>
          </div>
          <div className="card-footer">
            <div className="school" style={{color:"white"}}>✔ Business School</div>
            <button className="btn" style={{width:"200px", color:"white", fontSize:"30px",fontWeight:"bold", backgroundColor:"#1C3687", border:"none", marginTop:"90%"}}>View Details</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="btn" style={{width:"200px", height:"70px", backgroundColor:"white", color:"#1C3687", marginTop:"10%", marginLeft:"45%", fontSize:"25px"}}>See More</button>
      </div>
      
      <div style={{backgroundColor:"white",marginTop:"2%"}}>

      <img src='https://assets-eu-01.kc-usercontent.com/ad38edda-3d08-01a1-9d06-234f976ab5b7/f8069ca4-e239-4989-94dd-dc52f57eb7a6/Client%20logos-10.png'
    style={{width:"200px", height:"200px", marginLeft:"32%", marginTop:"20%"}}/>

<h1 style={{ textAlign: 'center', fontSize: '4em', fontWeight: 'bold', marginBottom: '20px', color:"#151446",width:"50%" }}>GET CREDIT TO KICKSTART YOUR SUCCESS</h1>
<button style={{color:"#1C3687", border:"4px solid #1C3687", width:"200px",height:"70px", marginLeft:"30%"}}>Apply Now</button>

<img  src='https://www.milpark.ac.za/media/fdddwvws/hero_final3_cristal.jpg'
style={{marginLeft: "50%", marginTop: "-42%",width: "50%"}}/>
      </div>
     
    <div style={{ backgroundColor: '#192841', color: '#fff', padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>NEWS</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#192841', width: '300px', height: '250px', margin: '10px', padding: '20px', borderRadius: '8px', border:"4px solid white ", borderLeftColor:"#FF4500"}}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>10 Sep</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Kutlwano Raborife's Path to Success Through Further Education</p>
          <button style={{ backgroundColor: '#FF4500', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Read More</button>
        </div>
        <div style={{ backgroundColor: '#192841', width: '300px', height: '250px', margin: '10px', padding: '20px', borderRadius: '8px', border:"4px solid white ", borderLeftColor:"#2ECC71" }}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>6 Sep</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Academic Success Is A Journey, Not A Destination</p>
          <button style={{ backgroundColor: '#2ECC71', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Read More</button>
        </div>
        <div style={{ backgroundColor: '#192841', width: '300px', height: '250px', margin: '10px', padding: '20px', borderRadius: '8px' , border:"4px solid white ", borderLeftColor:"#007bff"}}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>2 Sep</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Advancing African Research - A Doctorate Success Story</p>
          <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Read More</button>
        </div>
      </div>
      <button style={{ backgroundColor: '#192841', color: 'WHITE' ,border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px', border:"3px solid white" }}>Read More</button>
    </div>

  <div style={{display:"flex", width:"100%", marginTop:"7%", backgroundColor:"white"}}>
<div style={{width:"50%"}}>
  <img src='https://www.milpark.ac.za/media/rupoxxvg/get-in-touch.jpg' style={{width:"70%", border:"17px solid #08B4A5",borderBottom:"0px", borderLeft:"0px", borderTop:"0px"}}/>
</div>

  </div>
    </div>
    </div>
     </div>
   
    );
  };
  
  export default LandingPage;