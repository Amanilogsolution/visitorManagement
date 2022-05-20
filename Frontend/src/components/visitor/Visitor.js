import React from 'react';
import Home from '../Home';
import {VisiterEntry} from '../../api/index'

function Visitor() {
    const handleClick = async(e)=>{
        e.preventDefault();
       
       const visitor_name =document.getElementById('visitor_name').value;
       const company_name =document.getElementById('company_name').value;
       const email_id =document.getElementById('email_id').value;
       const no_of_visitor =document.getElementById('no_of_visitor').value;
       const meeting_with =document.getElementById('meeting_with').value;
       const contact_no =document.getElementById('contact_no').value;
       const remark =document.getElementById('remark').value;
      
       console.log(visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark)

       const result = await VisiterEntry(visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark)
       if(result){
        window.location.href='/Dashboard';
       }
    }
  return (
    <>
            <div className="generatorlogcontainer">
                <Home />
                <div>
                    {/* <div className="row justify-content-center mt-2 mb-5" style={{ width: "100%" }}> */}
                    <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                            <div className="card" >
                                <header className="card-header">
                                    <h4 className="card-title mt-2">Visitor Entry</h4>
                                </header>

                                <article className="card-body">
                                    <form>

                                        <div className="form-group">
                                            <label>Visitor Name </label>
                                            <input type="Text" className="form-control" id='visitor_name'/>
                                        </div> {/* form-group end.// */}
                                        <div className="form-group">
                                            <label>Company Name </label>
                                            <input type="text" className="form-control" id="company_name"/>
                                        </div>

                                         <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>No of Visitors</label>
                                            <input type="number" className="form-control"  id='no_of_visitor'/>
                                        </div> 
                                        <div className="form-group col-md-6">
                                            <label>Contact No</label>
                                            <input type="number" className="form-control"  id='contact_no'/>

                                        </div> 
                                    </div> 

                                        <div className="form-group">
                                            <label>Email Id:</label>
                                            <input className="form-control" type="email" id='email_id' />
                                        </div>
                                     
                                        <div className="form-group">
                                            <label>To Meet</label>
                                            <input className="form-control" type="text" id='meeting_with'/>
                                        </div>
                                        <div className="form-group">
                                            <label>Remarks</label>
                                            <textarea className="form-control" type="text" id='remark'/>
                                        </div>


                                        <div className="form-group">
                                        <button type="submit" onClick={handleClick} className="btn btn-primary mr-4">Submit</button>
                                <button type="submit" className="btn btn-secondary ">Reset</button>                                        
                                        </div>
                                    </form>
                                </article> 


                            </div>
                        </div>

                    </div></div>
                    {/* </div> */}
            {/* </div> */}
        </>
  )
}

export default Visitor
