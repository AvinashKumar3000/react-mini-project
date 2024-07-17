import { useContext, useState } from 'react';
import SlideBar from './SlideBar';
import { AuthContext } from '../../context/AuthContext';
import './header.css';

// You can write a component with arrow function also
const Header = () => {
    const [show, setShow] = useState(false);
    const { status, userDetail } = useContext(AuthContext);

    function handleClick() {
        setShow(!show);
    }
    return (
        <>
            <header>
                <div className="logo">
                    <img src="https://seeklogo.com/images/S/svg-logo-C2C6DE140E-seeklogo.com.png" alt="logo" />
                </div>
                <div className="navigation">
                    <div><i className="fa-solid fa-home"></i> home</div>
                    <div><i className="fa-solid fa-shirt"></i> Fashion</div>
                    <div><i className="fa-solid fa-mobile"></i> Mobiles</div>
                    <div><i className="fa-solid fa-bowl-food"></i> Groceries</div>
                    <div><i className="fa-solid fa-star"></i> Beauty</div>
                </div>
                <div className="profile" >
                    {
                        status ? (
                            <img onClick={handleClick} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s" alt="profile" />
                        ) : (<button>log-in</button>)
                    }
                </div>

            </header>
            {show ? <SlideBar data={userDetail} close={handleClick} /> : undefined}
        </>
    );
}

export default Header;