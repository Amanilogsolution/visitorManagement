import React from 'react'
import{Warehouseclose} from '../../api'



function Closewarehouse(prop) {

    const date = new Date(prop.date) 
    let format_date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() 

const handleClick = async(e)=>{
    e.preventDefault()
    const Closingtime = document.getElementById('Closingtime').value
    const Closeby = document.getElementById('Closeby').value
    const awlperson = document.getElementById('awlperson').value

    console.log(prop.date,Closingtime,Closeby,awlperson)
    const result = await Warehouseclose(prop.date,Closingtime,Closeby,awlperson,localStorage.getItem('warehouseId'))
    if(result){
        window.location.href='/Dashboard';
       }

}

    return (
        <>
            <div className="diesellogcontainer">
                <div>
                    {/* <div className="row justify-content-center mt-5" style={{border:"2px solid red",width:"100%"}}> */}
                    <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                    <h2 className="card-title mt-2 "style={{marginLeft:"10%"}}><span style={{color:"red"}}> Warehouse is Opened on {format_date} </span></h2>

                        <div className="card">
                            <header className="card-header">
                                <h4 className="card-title mt-2">Enter Warehouse Closing Entry</h4>
                            </header>


                            <article className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label>Date </label>
                                        <input type="Date" className="form-control"  disabled style={{cursor:"not-allowed"}} value={prop.date}/>
                                    </div> 
                                 

                                    <div className="form-group">
                                        <label>Closing Time</label>
                                        <input type="time" className="form-control" id="Closingtime" />
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
                                        <button type="submit" onClick={handleClick} className="btn btn-primary mr-4">Submit</button>
                                        <input type="reset" className="btn btn-secondary " value='Reset'/>

                                    </div> 
                                </form>
                            </article> 


                        </div>

                    </div></div></div>
        </>
    )
}

export default Closewarehouse
