import './diesellog.scss'
import Navbar from '../Navbar/Navbar';
import Slider from '../slider/Slider';
import Home from '../Home';
const DieselLog = () => {
    return (
        <>
            <div className="diesellogcontainer">
           
                <Home />

                <div>
                    {/* <div className="row justify-content-center mt-5" style={{border:"2px solid red",width:"100%"}}> */}
                    <div className="col-md-6 mt-5" style={{ margin: "auto" }}>
                        <div className="card">
                            <header className="card-header">

                                <h4 className="card-title mt-2">Diesel Log Entry</h4>
                            </header>


                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input type="text" className="form-control" placeholder />
                                        </div> {/* form-group end.// */}
                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder=" " />
                                        </div> {/* form-group end.// */}
                                    </div> {/* form-row end.// */}
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder />
                                    </div> {/* form-group end.// */}
                                    <div className="form-group">
                                        <label className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" defaultValue="option1" />
                                            <span className="form-check-label"> Male </span>
                                        </label>
                                        <label className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" defaultValue="option2" />
                                            <span className="form-check-label"> Female</span>
                                        </label>
                                    </div> {/* form-group end.// */}
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" className="form-control" />
                                        </div> {/* form-group end.// */}
                                        <div className="form-group col-md-6">
                                            <label>Country</label>
                                            <select id="inputState" className="form-control">
                                                <option> Choose...</option>
                                                <option>Uzbekistan</option>
                                                <option>Russia</option>
                                                <option selected>United States</option>
                                                <option>India</option>
                                                <option>Afganistan</option>
                                            </select>
                                        </div> {/* form-group end.// */}
                                    </div> {/* form-row.// */}
                                    <div className="form-group">
                                        <label>Create password</label>
                                        <input className="form-control" type="password" />
                                    </div> {/* form-group end.// */}
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary "> Register</button>
                                    </div> {/* form-group// */}
                                </form>
                            </article> {/* card-body end .// */}


                        </div>

                    </div></div></div>
            {/* </div> */}
        </>
    )
}

export default DieselLog;