import { useContext, useState } from 'react';
import SlideBar from './SlideBar';
import './header.css';
import { AuthContext } from '../../context/AuthContext';

// You can write a component with arrow function also
const Header = () => {
    const [show, setShow] = useState(false);

    const { userDetail } = useContext(AuthContext);

    function handleClick() {
        setShow(!show);
    }
    return (
        <>
            <header>
                <div className="han-burger">
                    <i className="fa-solid fa-user" onClick={handleClick}></i>
                    <span className='app-name'>{userDetail.profile.name}</span>
                </div>
            </header>
            {show ? <SlideBar data={userDetail} close={handleClick} /> : undefined}
        </>
    );
}

export default Header;