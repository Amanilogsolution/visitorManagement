import axios from 'axios';

export const GeneratorEntry = async (DATE,StartTime,StartReading,EndTime,EndReading) => {
    console.log(DATE,StartTime,StartReading,EndTime,EndReading)
    const url = `http://localhost:8004/api/generatorentry`
    return axios.post(url, {DATE,StartTime,StartReading,EndTime,EndReading}).then(response => response.data).catch(error => console.log(error));
}

export const DieselEntry = async (DATE,invoice_no,party_name,qtyin_liter,rate_per_liter,person_name,out_time,in_time,TotalAmount) => {
    console.log(DATE,invoice_no,party_name,qtyin_liter,rate_per_liter,person_name,out_time,in_time,TotalAmount)
    const url = `http://localhost:8004/api/dieselentry`
    return axios.post(url, {DATE,invoice_no,party_name,qtyin_liter,rate_per_liter,person_name,out_time,in_time,TotalAmount}).then(response => response.data).catch(error => console.log(error));
}
export const VisiterEntry = async (visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark) => {
    console.log(visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark)
    const url = `http://localhost:8004/api/visiterentry`
    return axios.post(url, {visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark}).then(response => response.data).catch(error => console.log(error));
}

export const UserLogin = async (uid_id,uid_pass) => {
    console.log(uid_id,uid_pass)
    const url = `http://localhost:8004/api/loginuser`
    return axios.post(url, {uid_id,uid_pass}).then(response => response.data).catch(error => console.log(error));
}