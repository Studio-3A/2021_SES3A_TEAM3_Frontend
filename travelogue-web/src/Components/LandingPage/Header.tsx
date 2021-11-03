import { Link } from 'react-router-dom';
import Logo from '../svg/travelogueLogo.svg';
import Star from '../svg/star-icon.svg';
import Search from '../svg/search.svg';
import '../../App.css';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <div className='logo'>
                <div className='logo-icon'>
                    <img alt='logo' className='logoIcon' src={Logo}></img>
                </div>
                <div className='logo-text'>
                    <p>Travelogue</p>
                </div>
            </div>
            </Link>
            <div className="search">
                <form className='search-form'>
                    <button type='submit' className='search-btn'>
                        <img src={Search}/>
                    </button>
                    <input
                        type='cust_search-text'
                        className='search-input'
                        placeholder='Search For Destinations...'
                    />
                    
                </form>
                </div>
            <div className='menu-items'>
                <Link to='/home'>
                    <div className='menu-items-home menu-under'>Home</div>
                </Link>
                <Link to='/about'>
                    {window.location.href.endsWith('about') ? (
                        <div className='activePage menu-under'>
                            <img src={Star} alt='star-icon' id='starIcon' />
                            About
                        </div>
                    ) : (
                        <div className='menu-items-about menu-under'>About</div>
                    )}
                </Link>
                <Link to='/features'>
                    {window.location.href.endsWith('features') ? (
                        <div className='activePage menu-under'>
                            <img src={Star} alt='star-icon' id='starIcon' />
                            Features
                        </div>
                    ) : (
                        <div className='menu-items-features menu-under'>Features</div>
                    )}
                </Link>
                <Link to='/login'>
                    <button
                        className='menu-items-login btn-primary'
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
