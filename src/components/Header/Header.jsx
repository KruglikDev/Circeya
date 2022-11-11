import logo from '../../images/logo.svg';
import phone from '../../images/phone.svg';

import './Header.scss';

const Header = () => {
    return (<header className='header'>
        <img className='header__logo' src={logo} alt="logo"/>
        <img className='header__phone-icon' src={phone}  alt="phone"/>
        <p className='header__number'>+7 (495) 495-49-54</p>
    </header>)
}

export default Header;