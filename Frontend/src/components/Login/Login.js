import './login.scss'
import Icon from '../../images/security-guard.png'

function Login() {
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
                                        <input type="text" name className="form-control input_user"  placeholder="username" />
                                    </div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input type="password" name className="form-control input_pass" placeholder="password" />
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                            <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                        </div>
                                    </div> */}
                                    <div className="d-flex justify-content-center mt-3 login_container"><a href='Dashboard' className="btn login_btn" >
                                        Login</a>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="mt-4">
                                
                                <div className="d-flex justify-content-center links">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;