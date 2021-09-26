import { Link } from 'react-router-dom';
import Logo from '../svg/travelogueLogo.svg';
import Star from '../svg/star-icon.svg';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <div className='logo-icon'>
                    <img alt='logo' className='logoIcon' src={Logo}></img>
                </div>
                <div className='logo-text'>
                    <p>Travelogue</p>
                </div>
            </div>
            <div className='search'></div>
            <div className='menu-items'>
                <Link to='/home'>
                    <div className='menu-items-home'>Home</div>
                </Link>
                <Link to='/about'>
                    {window.location.href.endsWith('about') ? (
                        <div className='activePage'>
                            <img src={Star} alt='star-icon' id='starIcon' />
                            About
                        </div>
                    ) : (
                        <div className='menu-items-about'>About</div>
                    )}
                </Link>
                <Link to='/features'>
                    {window.location.href.endsWith('features') ? (
                        <div className='activePage'>
                            <img src={Star} alt='star-icon' id='starIcon' />
                            Features
                        </div>
                    ) : (
                        <div className='menu-items-features'>Features</div>
                    )}
                </Link>
                <Link to='/login'>
                    <button
                        className='menu-items-login btn-secondary'
                        type='button'
                    >
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
