import './login.scss'
import React,{useState} from 'react'
import Icon from '../../images/security-guard.png'
import { UserLogin } from '../../api/index'

function Login() {
    const [showerror,setShowerror]= useState(false);
    const [showpass,setShowpass] = useState(false);

    const toggleicon =()=>{
        setShowpass(!showpass);
    }
    const handleClick = async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        console.log(username, password)
        const result = await UserLogin(username, password)
        if (result) {
            localStorage.setItem('userId', result.uid_id)
            localStorage.setItem('userName', result.uname)
            localStorage.setItem('Warehouse', result.wh)
            localStorage.setItem('warehouseId', result.whid)
            window.location.href = '/Dashboard';
        }
        else{
            setShowerror(true);
        }

    }
    return (
        <>
            <div className="logincontainer">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="user_card">
                            <div className="d-flex justify-content-center">
                                <div className="brand_logo_container">
                                    <img src={Icon} className="brand_logo" alt="Logo" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center form_container">
                                <form>
                                    <h4 className='text-center head'>Login</h4>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <input type="text" name className="form-control input_user" id="username" placeholder="username" onChange={()=>{setShowerror(false)}}/>
                                    </div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input  type={showpass?"text":"password"} className="form-control input_pass" id="password" placeholder="password" onChange={()=>{setShowerror(false)}} />
                                        <div className="input-group-append">
                                        {
                                            showpass?
                                            <span className="input-group-text" onClick={toggleicon}><i className="fa fa-eye-slash text-dark" aria-hidden="true" ></i></span>
                                            :<span className="input-group-text" onClick={toggleicon}><i className="fa fa-eye text-dark" aria-hidden="true" ></i></span>

                                        }</div>
                                    </div>
                                     {
                                        showerror?
                                        <><p style={{color:"red"}}>Please! enter valid username and Password </p></>:null
                                     }
                                    <div className="d-flex justify-content-center mt-3 login_container">
                                        <button type="button" onClick={handleClick} className="btn login_btn">Login</button>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;