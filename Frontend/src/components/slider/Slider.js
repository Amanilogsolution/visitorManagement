import './slider.scss';
import react, { useState } from 'react';
import Icon from '../../images/security-guard.png'
function Slider({ slider, openSidebar }) {
    const [show, setShow] = useState(false)

    const togglediv = () => {
        setShow(!show);

    }
    const handlelogout =()=>{
        localStorage.clear();
        window.location.href='/'
    }
    return (
        <>
            <div className={slider ? "slidercontaineropen" : "slidercontainer"}>
                <div className="closebox">
                    <span onClick={openSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#000"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" /></svg></span>
                    <div className="userdetail">
                        <p className="name">{localStorage.getItem("userName")}</p>
                        <p className="warehouse">{localStorage.getItem("Warehouse")}</p>
                    </div>
                    <div className="imgdiv">
                        <img src={Icon} />
                    </div>
                </div>
                <div className="bottomdiv">
                    <ul className="listitems">
                        <li className="listitem"> <a href='Dashboard'>Home</a></li>
                        <li className="listitem"><a  href="VisitorLogBook">Visitor Entry</a></li>
                        <li className="listitem outerlist" onClick={togglediv} >LogBook
                            <span id="innerspan" style={{ fontSize: "23px", transform: "rotate(180deg)" }}> &nbsp;&#94;</span>
                            {show ?
                                <ul className="innerlistes">
                                    <li className="innerliste"><a href="/GeneratorLogBook">Generator LogBook</a></li>
                                    <li className="innerliste"><a href="/DieselLog">Desiel LogBook</a></li>
                                    <li className="innerliste"><a href="Warehouse"> Open/Close Warehouse LogBook</a></li>
                                </ul>
                                : null
                            }
                        </li>
                    </ul>
                    <ul className="bottomlists">
                        <li className="bottomlist arrow" onClick={handlelogout} > Logout
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Slider;