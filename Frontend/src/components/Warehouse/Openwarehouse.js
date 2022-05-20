import React from 'react'
import Home from '../Home';
import {Warehouseopen} from '../../api/index'


function Openwarehouse() {

    const handlesave = async (e)=>{
        e.preventDefault();
        const entry_by= localStorage.getItem('userId');
        const wharehouse= localStorage.getItem('warehouseId');
        const date= document.getElementById('date').value;
        const opening_time= document.getElementById('Openingtime').value;
        const opened_by= document.getElementById('Openby').value;
        const awl_person_open= document.getElementById('awlpersonopen').value;

        console.log("date,Openingtime,Openby,awlperson",date,opening_time,opened_by,awl_person_open)

        const result = await Warehouseopen(entry_by,wharehouse,date,opening_time,opened_by,awl_person_open)
        console.log("result",result)

    }
    return (
        <>
            <div className="openwarehousecontainer">
                {/* <Home /> */}

                <div>
                    {/* <div className="row justify-content-center mt-5" style={{border:"2px solid red",width:"100%"}}> */}
                    <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                        <div className="card">
                            <header className="card-header">

                                <h4 className="card-title mt-2">Warehouse Opening Entry</h4>
                            </header>


                            <article className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label>Date </label>
                                        <input type="Date" className="form-control" placeholder="" id='date' />
                                    </div> {/* form-group end.// */}
                                    <div className="form-group">
                                        <label>Opening Time</label>
                                        <input type="time" className="form-control" id="Openingtime" />
                                    </div>

                                    {/* <div className="form-group">
                                        <label>Closing Time</label>
                                        <input type="time" className="form-control" id="Closingtime" />
                                    </div> */}

                                    <div className="form-group">
                                        <label>Open by</label>
                                        <input type="text" className="form-control" id="Openby" />
                                    </div>

                                    {/* <div className="form-group">
                                        <label>Close by</label>
                                        <input type="text" className="form-control" id="Closeby" />
                                    </div> */}



                                    <div className="form-group">
                                        <label>AWL Person Present</label>
                                        <input className="form-control" type="text" id="awlpersonopen" />
                                    </div>



                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-4" onClick={handlesave}>Submit</button>
                                        <input type="reset" className="btn btn-secondary " value='Reset'/>

                                    </div> {/* form-group// */}
                                </form>
                            </article> {/* card-body end .// */}


                        </div>

                    </div></div></div>
            {/* </div> */}
        </>
    )
}

export default Openwarehouse
