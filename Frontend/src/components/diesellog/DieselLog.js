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
                                    
                                        <div className="form-group">
                                            <label>Date </label>
                                            <input type="Date" className="form-control" placeholder=""/>
                                        </div> {/* form-group end.// */}
                                        <div className="form-group">
                                            <label>Invoice no.</label>
                                            <input type="text" className="form-control" placeholder=" " />
                                        </div> 
                                   
                                    <div className="form-group">
                                        <label>Party Name</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div> {/* form-group end.// */}
                                   
                                    {/* <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" className="form-control" />
                                        </div> 
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
                                        </div> 
                                    </div> form-row.// */}
                                    <div className="form-row">
                                    <div className="col form-group">
                                        <label>Qty in Liter</label>
                                        <input className="form-control" type="number" />
                                    </div> 
                                    <div className="col form-group">
                                        <label>Rate per Liter</label>
                                        <input className="form-control" type="number" />
                                    </div> 
                                    </div>
                                    <div className="form-group">
                                        <label>Total Amount</label>
                                        <input className="form-control" type="number" />
                                    </div> 
                                    <div className="form-group">
                                        <label>Person Name</label>
                                        <input className="form-control" type="text" />
                                    </div> 

                                    <div className="form-row">
                                    <div className="col form-group">
                                        <label>Out Time</label>
                                        <input className="form-control" type="datetime-local" />
                                    </div> 
                                    <div className="col form-group">
                                        <label>In Time</label>
                                        <input className="form-control" type="datetime-local" />
                                    </div> 
                                    </div>
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