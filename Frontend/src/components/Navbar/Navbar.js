import './navbar.scss';
import Profile from "../../images/security-guard.png"
import Logo from "../../images/logo.png"
import react, { useState } from 'react'
function Navbar({ openSidebar }) {

    const [show, setShow] = useState(false);
    return (
        <>
            <nav className="navbar navcontainer navbar-expand-lg navbar-light bg-dark text-white">
                <a className="navbar-brand text-white navlogo"   href="#" ><img src={Logo} /></a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                <div className="collapse navlinks navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navlinks">
                        <li className="nav-item navlink ">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item navlink ">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown navlink">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu ml-5 " aria-labelledby="navbarDropdown">
                                <a className="dropdown-item text-dark" href="#">Action</a>
                                <a className="dropdown-item text-dark" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item text-dark" href="#">Something else here</a>
                            </div>
                        </li>
                       
                    </ul>
                    <ul className="profilediv">
                    <li className="profilelink profileimg "><img src="https://thispersondoesnotexist.com/image" /></li>
                    {/* <li className="profilelink sliderbar" onClick={openSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" /></svg></li> */}
                </ul>
                </div>
            </nav>




            {/* <div className="navcontainer">
                <div className="navlogo"><img src={Logo} /></div>
                <ul className="navlinks" >
                    <li className="navlink"><a href="#">Home</a></li>
                    <li className="navlink"><a href="#">Visitor Entry</a></li>
                    <li className="navlink outernavlinks"><a href="#" onClick={()=>setShow(!show)}>LogBook
                        {
                            show ? 
                            <span id="innerspan" style={{ fontSize: "23px" }}> &#8744;</span>
                            : <span id="innerspan" style={{ fontSize: "23px",transform:"rotate(90deg)" }}> &#8743;</span>
                        }
                    </a>
                    {
                            show ? 
                      <ul className='innernavlinks'>
                          <li className="innernavlink"><a href="/GeneratorLogBook">Generator LogBook</a></li>
                          <li className="innernavlink"><a href="/DieselLog">Diesel LogBook</a></li>
                          <li className="innernavlink">Warehouse Open/Close LogBook</li>
                      </ul>
                      :null}
                    </li>
                </ul>


                <ul className="profilediv">
                    <li className="profilelink profileimg "><img src="https://thispersondoesnotexist.com/image" /></li>
                    <li className="profilelink sliderbar" onClick={openSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" /></svg></li>
                </ul>


            </div> */}
        </>
    )
}

export default Navbar;