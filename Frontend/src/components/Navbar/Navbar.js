import './navbar.scss';

function Navbar(){
    return(
        <>
          <div className="navcontainer">
             <div className="navlogo"></div>
             <ul className="navlinks">
                 <li className="navlink"><a href="#">Home</a></li>
                 <li className="navlink"><a href="#">About Us</a></li>
                 <li className="navlink"><a href="#">Contact Us</a></li>
             </ul>

          </div>
        </>
    )
}

export default Navbar;