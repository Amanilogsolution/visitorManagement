import './generatorlog.scss'
import Home from '../Home';
const GeneratorLog = () => {
    return (
        <>
            <div className="generatorlogcontainer">
           
                <Home />

                <div>
                    <div className="row justify-content-center mt-5" style={{width:"100%"}}>
                    <div className="col-md-6 " style={{ margin: "50px auto 0px auto"}}>
                        <div className="card" >
                            <header className="card-header">
                                <h4 className="card-title mt-2">Generator Log Book Entry</h4>
                            </header>


                            <article className="card-body">
                                <form>
                                    
                                        <div className="form-group">
                                            <label>Date </label>
                                            <input type="Date" className="form-control" placeholder=""/>
                                        </div> {/* form-group end.// */}
                                        <div className="form-group">
                                            <label>Start Time</label>
                                            <input type="time" className="form-control" placeholder=" " />
                                        </div> 
                                   
                                    <div className="form-group">
                                        <label>Start Reading</label>
                                        <input type="number" className="form-control" placeholder="" />
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
                                    
                                    <div className="form-group">
                                        <label>End Time</label>
                                        <input className="form-control" type="time" />
                                    </div> 
                                    <div className="form-group">
                                        <label>End Reading</label>
                                        <input className="form-control" type="number" />
                                    </div> 

                                  
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary "> Submit</button>
                                    </div> {/* form-group// */}
                                </form>
                            </article> {/* card-body end .// */}


                        </div>
                        </div>

                    </div></div></div>
            {/* </div> */}
        </>
    )
}

export default GeneratorLog;