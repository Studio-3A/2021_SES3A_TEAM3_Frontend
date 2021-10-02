import './Features.css';
import Header from '../LandingPage/Header';
import blob2 from '../svg/frontpageBlob2.svg';
import banner from '../svg/banner.svg';
import star2 from '../svg/star-icon2.svg';

function Features() {
    return (
        <div className='page1'>
            <img alt='' className='frontPageBlob2' src={blob2} />
            <Header />
            <div className='banner-div'>
                <p className='logo-text features-text'>
                    <img id='features-star' src={star2} alt='star' />
                    Features
                </p>
                <img src={banner} id='features-banner' alt='square' />
            </div>
        </div>
    );
}

export default Features;
