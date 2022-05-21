import React from 'react'
import Home from '../Home';


function Warehouse() {
    return (
        <>
            <div className="diesellogcontainer">
                <Home />
                <div>
                    <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                        <div className="card">
                            <header className="card-header">

                                <h4 className="card-title mt-2">Warehouse Opening & Closing Entry</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Date </label>
                                        <input type="Date" className="form-control" placeholder="" />
                                    </div> 
                                    <div className="form-group">
                                        <label>Opening Time</label>
                                        <input type="time" className="form-control" id="Openingtime" />
                                    </div>

                                    <div className="form-group">
                                        <label>Closing Time</label>
                                        <input type="time" className="form-control" id="Closingtime" />
                                    </div>

                                    <div className="form-group">
                                        <label>Open by</label>
                                        <input type="text" className="form-control" id="Openby" />
                                    </div>

                                    <div className="form-group">
                                        <label>Close by</label>
                                        <input type="text" className="form-control" id="Closeby" />
                                    </div>
                                    <div className="form-group">
                                        <label>AWL Person Present</label>
                                        <input className="form-control" type="text" id="awlperson" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-4">Submit</button>
                                        <button type="submit" className="btn btn-secondary ">Reset</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Warehouse
