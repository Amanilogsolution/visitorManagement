import './navbar.scss';
import Profile from "../../images/security-guard.png"
import Logo from "../../images/logo.png"
import Warehouselogo from '../../images/warehouse.png'
import react, { useState } from 'react'
function Navbar({ openSidebar }) {

    const handlelogout = () => {
        localStorage.clear();
        window.location.href = '/'
    }
    return (
        <>
            <nav className="navbar navcontainer navbar-expand-lg navbar-light  text-white">
                <a className="navbar-brand text-white navlogo" href="#" ><img src={Logo} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={openSidebar}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navlinks">
                        <li className="nav-item navlink ">
                            <a className="nav-link" href="Dashboard">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item navlink ">
                            <a className="nav-link" href="VisitorLogBook">Visitor Entry</a>
                        </li>
                        <li className="nav-item dropdown navlink">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                LogBook
                            </a>
                            <div className="dropdown-menu ml-5 " aria-labelledby="navbarDropdown">
                                <a className="dropdown-item text-dark" href="/GeneratorLogBook">Generator LogBook</a>
                                <a className="dropdown-item text-dark" href="/DieselLog">Diesel LogBook</a>
                                <a className="dropdown-item text-dark" href="Warehouse"> Open/Close Warehouse LogBook</a>
                            </div>
                        </li>

                    </ul>
                    <ul className="profilediv">
                       <li className="warehouseplace" ><span className='staricon'><img src={Warehouselogo}/></span> {localStorage.getItem("Warehouse")}</li>&nbsp;
                        <li className="profilelink" onClick={handlelogout} > 
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42"><path d="M22.5 26.1V5.8H25.5V26.1ZM24 42.1Q20.3 42.1 17.025 40.675Q13.75 39.25 11.3 36.8Q8.85 34.35 7.425 31.075Q6 27.8 6 24.1Q6 20.1 7.7 16.625Q9.4 13.15 12.5 10.45L14.6 12.55Q11.95 14.7 10.475 17.675Q9 20.65 9 24.1Q9 30.35 13.375 34.725Q17.75 39.1 24 39.1Q30.25 39.1 34.625 34.725Q39 30.35 39 24.1Q39 20.65 37.525 17.625Q36.05 14.6 33.5 12.55L35.65 10.45Q38.65 13 40.325 16.55Q42 20.1 42 24.1Q42 27.8 40.575 31.075Q39.15 34.35 36.725 36.8Q34.3 39.25 31.025 40.675Q27.75 42.1 24 42.1Z"/></svg> */}
                        Logout
                        </li>
                    </ul>
                </div>
            </nav>




        </>
    )
}

export default Navbar;