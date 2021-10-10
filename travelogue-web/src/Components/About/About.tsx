import './About.css';
import Header from '../LandingPage/Header';
import blob2 from '../svg/frontpageBlob2.svg';
import banner from '../svg/banner.svg';
import star2 from '../svg/star-icon2.svg';
import '../../App.css';

function About() {
  return (
    <div className="container-fp">
      <div className='page1'>
        <img alt='' className='frontPageBlob2' src={blob2} />
        <Header />
        <div className='banner-div'>
            <p className='logo-text features-text'>
                <img id='features-star' src={star2} alt='star' />
                About
            </p>
            <img src={banner} id='features-banner' alt='square' />
        </div>
      </div>
      <div className='page2'>
        <p className="page-title">Our Mission</p>
        <p className="page-label">What We Hope to Solve!</p>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default About;