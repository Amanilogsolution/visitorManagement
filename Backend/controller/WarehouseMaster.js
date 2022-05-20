const sql = require('mssql')
const sqlConfig = require('../config.js')

const Warehousecheckopen = async (req, res) => {
    const Warehouse = req.body.Warehouse;
    console.log("Warehouse", Warehouse)

    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`SELECT convert(varchar(15),date,121) from tbl_whopeningclosinglogbook_t where wharehouse='${Warehouse}' and msg_flag='open';`)
          console.log(result)
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
}

const Warehouseopen = async (req, res) => {
    const entry_by = req.body.entry_by;
    const wharehouse = req.body.wharehouse;
    const date = req.body.date;
    const opening_time = req.body.opening_time;
    const opened_by = req.body.opened_by;
    const awl_person_open = req.body.awl_person_open;
    const remarks = req.body.remarks?req.body.remarks:'';
     console.log("entry_by",entry_by,"wharehouse",wharehouse,'date',date,"opening_time",opening_time,"opened_by ",opened_by,
     'awl_person_open ',awl_person_open,'remarks',remarks)

    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`insert into tbl_whopeningclosinglogbook_t (log_no,entry_by,entry_date,
            wharehouse,date,opening_time ,opened_by ,awl_person_open ,remarks ,msg_flag)
            values('','${entry_by}',getDate(),'${wharehouse}','${date}','${opening_time}',
            '${opened_by}','${awl_person_open}','${remarks}','open')`)

        res.send("success")
    }
    catch (err) {
        res.send("err")
    }
}

const Warehouseclose = async (req, res) => {
    const closing_time = req.body.closing_time;
    const closed_by = req.body.closed_by;
    const awl_person_close = req.body.awl_person_close;
    const wharehouse = req.body.wharehouse;

    awlperson
    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(`update tbl_whopeningclosinglogbook_t set closing_time='${closing_time}',
        closed_by='${closed_by}',awl_person_close='${awl_person_close}',msg_flag='close' 
        WHERE wharehouse='${wharehouse}' and msg_flag='open';`)
            
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
}
module.exports = { Warehousecheckopen, Warehouseopen,Warehouseclose }