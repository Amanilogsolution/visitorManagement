import React, { useEffect, useState } from 'react'
import Home from '../Home';
import Openwarehouse from './Openwarehouse';
import Closewarehouse from './Closewarehouse';
import { Warehousecheckopen } from '../../api/index';


function Warehouse() {
    const [warehouse, setWarehouse] = useState(false);
    const [date ,setDate] =useState();





    useEffect(() => {
        async function fetchMyAPI() {
            const result = await Warehousecheckopen(localStorage.getItem('warehouseId'))
             console.log('result',(result.recordset.length) > 0)
            if ((result.recordset.length) > 0) {
                console.log(result)
            // const dates= result;
            // console.log('dates',dates)
            //     setDate(dates)
            //     setWarehouse(true);
            }
        }

        fetchMyAPI()

    }, [])

    return (
        <>
            <div className="warehousecontainer">
                <Home />
                {
                    warehouse ? <Closewarehouse date={date} /> : <Openwarehouse />
                }

                {/* <div>
                    {/* <div className="row justify-content-center mt-5" style={{border:"2px solid red",width:"100%"}}> 
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

                    </div></div> */}
            </div>
        </>
    )
}

export default Warehouse
