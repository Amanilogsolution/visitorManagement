import React,{useEffect,useState} from 'react'
import { Warehouseopen,warehouseLastclose } from '../../api/index'


function Openwarehouse() {

    const [last_date,setLastDate] = useState()
    

    useEffect( () => {
        const data = async()=>{
            const result = await warehouseLastclose()
            const date = new Date(result) 
            let format_date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() 
            setLastDate(format_date)
            }
            data()
    },[])

    const handlesave = async (e) => {
        e.preventDefault();
        const entry_by = localStorage.getItem('userId');
        const wharehouse = localStorage.getItem('warehouseId');
        const date = document.getElementById('date').value;
        const opening_time = document.getElementById('Openingtime').value;
        const opened_by = document.getElementById('Openby').value;
        const awl_person_open = document.getElementById('awlpersonopen').value;

        const result = await Warehouseopen(entry_by, wharehouse, date, opening_time, opened_by, awl_person_open)
        if (result) {
            window.location.href = '/Dashboard';
        }
    }
    return (
        <>
            <div className="openwarehousecontainer">
                <div>
                    <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                    <h2 className="card-title mt-2 "style={{marginLeft:"10%"}}><span style={{color:"red"}}> Warehouse is Closed on {last_date}</span></h2>
                        <div className="card">
                            <header className="card-header">
                                <h4 className="card-title mt-2">Enter Warehouse Opening Entry</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Date </label>
                                        <input type="Date" className="form-control" placeholder="" id='date' />
                                    </div> 
                                    <div className="form-group">
                                        <label>Opening Time</label>
                                        <input type="time" className="form-control" id="Openingtime" />
                                    </div>
                                    <div className="form-group">
                                        <label>Open by</label>
                                        <input type="text" className="form-control" id="Openby" />
                                    </div>
                                    <div className="form-group">
                                        <label>AWL Person Present</label>
                                        <input className="form-control" type="text" id="awlpersonopen" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-4" onClick={handlesave}>Submit</button>
                                        <input type="reset" className="btn btn-secondary " value='Reset' />
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

export default Openwarehouse
