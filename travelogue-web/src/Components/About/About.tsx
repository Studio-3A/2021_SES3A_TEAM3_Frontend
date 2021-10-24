import './About.css';
import Header from '../LandingPage/Header';
import blob2 from '../svg/frontpageBlob2.svg';
import banner from '../svg/banner.svg';
import star2 from '../svg/star-icon2.svg';
import goals1 from '../svg/goals-1.svg';
import goals2 from '../svg/goals-2.svg';
import goals3 from '../svg/goals-3.svg';
import missionPeople from '../svg/mission-people.svg';
import '../../App.css';

function About() {
  return (
    <div className="container-fp">
      <div className='page1-about '>
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
          <img src={missionPeople} alt='Mission People'/>
          <p>Helping organising trips with mates a very stressfree and enjoyable experience</p>
        </div>
        <p className="page-title">Goals</p>
        <p className="page-label">Our Goals</p>
        <div className="goals">

          <div className="goals-section">
            <img src={goals1} alt='1' />
            <p>To introduce some spontaneuity in customer trip destinations</p>
          </div>

          <div className="goals-section">
            <img src={goals2} alt='2' />
            <p>Be the number one travel website in Australia</p>
          </div>

          <div className="goals-section">
            <img src={goals3} alt='3' />
            <p>Develop an inviting and collaborative working experience</p>
          </div>
          <p className="page-title">Team</p>
          <p className="page-label">Our People</p>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default About;