const sql =require('mssql')
const sqlConfig = require('../config.js')

const VisiterEntry = async (req, res) => {
    const visitor_name = req.body.visitor_name;
    const company_name = req.body.company_name;
    const email_id = req.body.email_id;
    const no_of_visitor = req.body.no_of_visitor;
    const meeting_with = req.body.meeting_with;
    const contact_no = req.body.contact_no;
    const remark = req.body.remark;
    console.log(visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark)

    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`insert into tbl_visitor_t(entry_no,visitor_name,company_name,email_id,no_of_visitor,meeting_with,
            contact_no,remark,wharehouse,entry_by,entry_date,msgflag)
            values ('BOM 9','${visitor_name}','${company_name}','${email_id}',${no_of_visitor},'${meeting_with}',${contact_no},'${remark}','BLR','BLR01',getDate(),
            '');`)
        res.send(result)
    }
    catch(err){
        res.send(err)
        }
}


const Allemployee = async (req, res) => {
     const Warehouse = req.body.Warehouse;
    //  console.log(Warehouse)

    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`select uName from User_Rights WHERE uWH='${Warehouse}'`)
        console.log(result.recordset);
        res.send(result.recordset)
    }
    catch(err){
        res.send(err)
        }
}

module.exports ={VisiterEntry,Allemployee}