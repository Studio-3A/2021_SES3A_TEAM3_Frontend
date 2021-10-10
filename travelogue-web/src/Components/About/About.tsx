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
        <p className="page-title">Mission</p>
        <p className="page-label">What We Hope to Solve!</p>
        <div>
          <p>Helping organising trips with mates a very stressfree and enjoyable experience</p>
        </div>
        <p className="page-title">Goals</p>
        <p className="page-label">Our Goals</p>
        <div>

          <div>
            <img/>
            <p>To introduce some spontaneuity in customer trip destinations</p>
          </div>

          <div>
            <img/>
            <p>Be the number one travel website in Australia</p>
          </div>

          <div>
            <img/>
            <p>Develop an inviting and collaborative working experience</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;