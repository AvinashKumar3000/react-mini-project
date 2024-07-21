import { useContext, useState } from 'react';
import SlideBar from './SlideBar';
import { AuthContext } from '../../context/AuthContext';
import './header.css';

const styles = {
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    active: {
        color: 'red'
    }
};

const NAVIGATION_ITEMS = [
    { name: 'home', link: '/', icon: 'fa-home' },
    { name: "fashion", link: '/fashion', icon: 'fa-shirt' },
    { name: "mobiles", link: '/mobiles', icon: 'fa-mobile' },
    { name: "beauty", link: '/beauty', icon: 'fa-child-dress' },
    { name: "groceries", link: '/groceries', icon: 'fa-star' }
];

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
                    {
                        NAVIGATION_ITEMS.map((value, index) => {
                            let current_style = styles.link;
                            if (window.location.pathname === value.link) {
                                current_style = styles.active;
                            }
                            return (
                                <div key={index}>
                                    <a style={current_style} href={value.link}>
                                        <i className={"fa-solid " + value.icon}></i> {value.name}
                                    </a>
                                </div>
                            );
                        })
                    }
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