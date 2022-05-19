import './navbar.scss';
import Profile from "../../images/security-guard.png"
import Logo from "../../images/logo.png"
import react, { useState } from 'react'
function Navbar({ openSidebar }) {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className="navcontainer">
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


            </div>
        </>
    )
}

export default Navbar;