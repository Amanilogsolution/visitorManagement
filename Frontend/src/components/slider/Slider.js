import './slider.scss';
import react, { useState } from 'react'
function Slider({ slider, openSidebar }) {
    const [show, setShow] = useState(false)

    const togglediv = () => {
        setShow(!show);

    }
    return (
        <>
            <div className={slider ? "slidercontaineropen" : "slidercontainer"}>
                <div className="closebox">
                    <span onClick={openSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" /></svg></span>
                    <div className="userdetail">
                        <p className="name">Rupesh</p>
                        <p className="email">rupesh@gmail.com</p>
                    </div>
                    <div className="imgdiv">
                        <img src="https://thispersondoesnotexist.com/image" />
                    </div>
                </div>
                <div className="bottomdiv">
                    <ul className="listitems">
                        <li className="listitem"> <i class="fa-solid fa-house-chimney"></i>Home</li>
                        <li className="listitem">Visitor Entry</li>
                        <li className="listitem outerlist" onClick={togglediv} >LogBook 
                        {show ?<span  id="innerspan" style={{fontSize:"23px",transform:"rotate(180deg)"}}> &nbsp;&#94;</span> 
                        :  < span  id="innerspan" style={{ fontSize: "23px" }}> &nbsp;&#94;</span>}
                        {show ?
                            <ul className="innerlistes">
                                <li className="innerliste"><a href="/GeneratorLogBook">Generator LogBook</a></li>
                                <li className="innerliste"><a href="/DieselLog">Desiel LogBook</a></li>
                                <li className="innerliste"><a href="#">Warehouse Open/Close LogBook</a></li>
                            </ul>
                            : null
                        }
                    </li>
                </ul>
                <ul className="bottomlists">
                    <li className="bottomlist"> Logout</li>
                    <li className="bottomlist arrow" onClick={openSidebar}> <span>&#10146;</span>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Slider;