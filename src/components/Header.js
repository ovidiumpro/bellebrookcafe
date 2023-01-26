import NavigationBar from "./NavigationBar"; //import your navigation bar component
import "../css//Header.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import {IoCloseSharp} from "react-icons/io5";
import { Link } from 'react-router-dom';


function Header() {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    return (
        <header className="header">
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" className="logo" />
                <h1 className="business-name">Business Name</h1>
            </div>
            <div className="nav-div">
                {isSmallScreen ? (
                    <div className="nav-div-small">
                         <button className="burger-button" onClick={toggleNav}>
                        {isNavOpen ? < IoCloseSharp />: <GiHamburgerMenu />}
                    </button>
                    <div className={`nav-overlay ${isNavOpen ? 'open' : 'closed'}`}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                        </div>
                ): (<div className="nav-div-large">
                    <div className="spacer" />
                    <NavigationBar />
                    <div className="spacer" />
                </div>)}
                

            </div>



        </header>
    );
}
export default Header;