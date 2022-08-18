import React, { useEffect, useState } from 'react'
import { Warehouseopen, warehouseLastclose,UploadData } from '../../api/index'


function Openwarehouse() {
    const [last_date, setLastDate] = useState('');
    const [mandatoryfield, setMandatoryfield] = useState(false);
    const [file, setFile] = useState('')
    const [uploadimage,setUploadImage] = useState()



    useEffect(() => {
        const data = async () => {
            const result = await warehouseLastclose(localStorage.getItem('warehouseId'))
            const date = new Date(result)
            let format_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

            if(result.length === undefined) {
            setLastDate("YYY-MM-DD")
            }else{
                setLastDate(format_date)
            }
        }
        data()
    }, [])

    const handlesave = async (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        const entry_by = localStorage.getItem('userId');
        const wharehouse = localStorage.getItem('Warehouse');
        const date = document.getElementById('date').value;
        const opening_time = document.getElementById('Openingtime').value;
        const opened_by = document.getElementById('Openby').value;
        const awl_person_open = document.getElementById('awlpersonopen').value;

        if (!date || !opening_time || !opened_by || !awl_person_open) {
            setMandatoryfield(true)

        }
        else {

            if(uploadimage){
                // alert('You have Upload Image !!')
                    const result = await Warehouseopen(entry_by, wharehouse, date, opening_time, opened_by, awl_person_open,localStorage.getItem('warehouseId'),uploadimage)
            if (result) {
                alert("Warehouse is Opened")
                window.location.href = '/Dashboard';
            }
            }
            else{
                alert('You have not Upload Image')
                    const result = await Warehouseopen(entry_by, wharehouse, date, opening_time, opened_by, awl_person_open,localStorage.getItem('warehouseId'),'')
            if (result) {
                alert("Warehouse is Opened")
                window.location.href = '/Dashboard';
            }
            }
        
        }

    }

    const handleSendFile = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("images", file)
        const UploadLink = await UploadData(data)
        setUploadImage(UploadLink)
      }
    return (
        <>
            <div className="openwarehousecontainer">
                <div>
                    <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                        <h2 className="card-title mt-2 " style={{ marginLeft: "10%" }}><span style={{ color: "red" }}> Warehouse is Closed on {last_date}</span></h2>
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
                                    {
                                        mandatoryfield
                                            ? <p style={{ color: "red" }}>Please! fill the field OR Upload Image...</p> : null
                                    }
                                    <div className="form-group">
                                        <button type="submit" id="submitBtn" className="btn btn-primary mr-4" onClick={handlesave}>Submit</button>
                                        <input type="reset" className="btn btn-secondary " value='Reset' />
                                        <button className="btn btn-success ml-4" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#exampleModal">Upload Image</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Upload Image</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-row">
                  <label className="col-sm-4 col-form-label">
                    Open Image
                  </label>
                  <input type="file" className="" placeholder="" onChange={event => {
                    const document = event.target.files[0];
                    setFile(document)
                  }} accept=".jpg, .jpeg, .png,.svg" />

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick={handleSendFile} data-dismiss="modal" className="btn btn-primary">Upload</button>
              </div>
            </div>
          </div>
        </div>
            </div>
        </>
    )
}

export default Openwarehouse
