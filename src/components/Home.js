import React, { useRef } from 'react';
import arrow from '../assets/dark-arrow.png';
import heroimg from '../assets/hero.png';
import p1 from '../assets/program-1.png';
import p2 from '../assets/program-2.png';
import p3 from '../assets/program-3.png';
import p1hover from '../assets/program-icon-1.png';
import p2hover from '../assets/program-icon-2.png';
import p3hover from '../assets/program-icon-3.png';
import about from '../assets/about.png'
import g1 from '../assets/gallery-1.png'
import g2 from '../assets/gallery-2.png'
import g3 from '../assets/gallery-3.png'
import g4 from '../assets/stud4.avif'
import g5 from '../assets/stud2.avif'
import g6 from '../assets/stud3.avif'
import back from '../assets/back-icon.png'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'
import forward from '../assets/white-arrow.png'

const Home = () => {
    const cardContainerRef = useRef(null)

    const  scrollLeft = () => {
        if (cardContainerRef.current){
            cardContainerRef.current.scrollBy({left: -300, behavior: 'smooth'})
        }
    }
    const scrollRight = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollBy({left:300, behavior: 'smooth'})
        }
    }
  return (
    <div>
      <div
        className='title text-center' id='home'
        style={{
          backgroundImage: `url(${heroimg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          color: 'white',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          position: 'relative',
          textAlign: 'center',
          padding: '20px', marginTop:'50px',
           backgroundColor: 'rgba(0, 0, 255, 0.5)'
        }}
      >
        <h1 className='fw-bolder' style={{ padding: '20px',backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(0, 0, 255, 0.1)' }}>
          We Ensure Better Education <br /> for a Better World
        </h1>
        <p style={{backdropFilter: 'blur(8px)',backgroundColor: 'rgba(0, 0, 255, 0.1)'}}>
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and <br />
          experiences needed to excel in the dynamic field of education.
        </p>
        <button className='btn btn-light rounded-pill bg-white'>
          Explore more <img src={arrow} alt='arrow' style={{ width: '30px' }} />
        </button>
      </div>

      <div className='text-center justify-content-center' id='program' style={{ marginTop: '40px' }}>
        <h5 className='text-primary'>OUR PROGRAM</h5>
        <h1>What We Offer</h1>
        <div className='row g-3'>
          <div className='col-md-4 position-relative'>
            <img className='img-fluid' src={p1} alt='degree' />
            <img
              className='img-fluid position-absolute'
              src={p1hover}
              alt='degree hover'
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}
            />
          </div>
          <div className='col-md-4 position-relative'>
            <img className='img-fluid' src={p2} alt='master' />
            <img
              className='img-fluid position-absolute'
              src={p2hover}
              alt='master hover'
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}
            />
          </div>
          <div className='col-md-4 position-relative'>
            <img className='img-fluid' src={p3} alt='phd' />
            <img
              className='img-fluid position-absolute'
              src={p3hover}
              alt='phd hover'
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .position-relative:hover img:nth-child(2) {
          opacity: 1; 
        }
      `}</style>
      <div className='container my-5 about' id='about' style={{marginTop:'50px'}}>
        <div className='row'>
            <div className='col-md-6'>
                <img className='img-fluid' src={about}  alt='about-img'/> 
            </div>
           
            <div className='col-md-6 text-center'>
                <h5 className='text-primary text-center'>ABOUT UNIVERSITY</h5>
                <h2 className='text-center'>Nurturing Tomorrow's <br></br> Leaders Today</h2>
                <p>Embark on a transformative educational journey with  our university's comprehensive education programs.<br></br> 
                Our cutting-edge curriculum is designed to empower students with the knowledge, skills,<br></br> and experiences needed to excel in the dynamic field of education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring<br></br>
                 educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse <br></br>
                range of programs offers the perfect pathway to achieve your goals and unlock your full potential <br></br>in shaping the future of education.

</p>
            
            </div>
        </div>
      </div>
      <div className='text-center' id='campus' style={{marginTop:'50px'}}>
        <div >
            <h6 className='text-primary'>GALLERY</h6>
            <h2>Campus Photos</h2>
        </div>
        <div className='row g-3'>
        <div className='col-md-4'>
                <img className='img-fluid' src={g4} alt='gallaery' />
            </div>
            <div className='col-md-4'>
                <img className='img-fluid' src={g5} alt='gallaery' />
            </div>
            <div className='col-md-4'>
                <img className='img-fluid' src={g6} alt='gallaery' />
            </div>
            <div className='col-md-4'>
                <img className='img-fluid' src={g1} alt='gallaery' />
            </div>
            <div className='col-md-4'>
                <img className='img-fluid' src={g2} alt='gallaery' />
            </div>
            <div className='col-md-4'>
                <img className='img-fluid' src={g3} alt='gallaery' />
            </div>
            <div className='d-flex justify-content-center align-items-center ' >
      <button className='btn btn-light bg-primary text-light p-3 rounded-pill d-flex align-items-center'>
        See more 
        <img src={forward} alt='arrow' style={{ marginLeft: '8px', width: '20px', color:'white' }} />
      </button>
    </div>
        </div>
      </div>
      <div>
        <div className='text-center'>

        </div>
      </div>
      <div className='cards container' id='testimonials' style={{ marginTop: '50px' }}>
      <div className='text-center'>
        <h6 className='text-primary'>TESTIMONIAL</h6>
        <h3>What Students Say</h3>
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <img
          className='bg-primary img-fluid cursor-pointer'
          src={back}
          alt='back-arrow'
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          onClick={scrollLeft}
        />
        <img
          className='bg-primary img-fluid cursor-pointer'
          src={forward}
          alt='forward-arrow'
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          onClick={scrollRight}
        />
      </div>

      <div
        ref={cardContainerRef}
        className='d-flex overflow-auto'
        style={{ marginTop: '20px', padding: '10px 0' }} 
      >
        <div className='card border-light col-md-4 me-3' style={{ flex: '0 0 auto' }}>
          <img className='img-fluid' src={user1} alt='' style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <h6 className='text-primary'>Tracy Whitney</h6>
          <p>Eldosity, Nairobi</p>
          <p>Choosing to pursue my degree at Edusity was one of the best decisions<br></br> 
          I've ever made. The supportive community, state-of-the-art facilities, and<br></br> 
          commitment to academic excellence have truly exceeded my expectations.</p>
        </div>

        <div className='card border-light col-md-4 me-3' style={{ flex: '0 0 auto' }}>
          <img className='img-fluid' src={user2} alt='' style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <h6 className='text-primary'>Jeff Stevens</h6>
          <p>Eldosity, Kisumu</p>
          <p>CChoosing to pursue my degree at Edusity was one of the best decisions<br></br> 
          I've ever made. The supportive community, state-of-the-art facilities, and<br></br> 
          commitment to academic excellence have truly exceeded my expectations.</p>
        </div>

        <div className='card border-light col-md-4 me-3' style={{ flex: '0 0 auto' }}>
          <img className='img-fluid' src={user3} alt='' style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <h6 className='text-primary'>Hellen Smith</h6>
          <p>Eldosity, Nakuru</p>
          <p>Choosing to pursue my degree at Edusity was one of the best decisions<br></br> 
          I've ever made. The supportive community, state-of-the-art facilities, and<br></br> 
          commitment to academic excellence have truly exceeded my expectations.</p>
        </div>

        <div className='card border-light col-md-4 me-3' style={{ flex: '0 0 auto' }}>
          <img className='img-fluid outline-primary' src={user4} alt='' style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <h6 className='text-primary'>Rebbecca Coper</h6>
          <p>Eldosity, Eldoret</p>
          <p>Choosing to pursue my degree at Edusity was one of the best decisions<br></br> 
          I've ever made. The supportive community, state-of-the-art facilities, and<br></br> 
          commitment to academic excellence have truly exceeded my expectations.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
