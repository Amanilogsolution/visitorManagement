const sql =require('mssql')
const sqlConfig = require('../config.js')

const GeneratorEntry = async (req, res) => {
    const Logno = req.body.logno;
    const entryby = req.body.entryby;
    const WH = req.body.WH;
    const DATE = req.body.DATE;
    const StartTime =req.body.StartTime;
    const StartReading = req.body.StartReading;
    const EndTime = req.body.EndTime;
    const EndReading = req.body.EndReading


    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`insert into tbl_GeneratorLogBook (Logno,entryby,entrydate,WH,DATE,StartTime,StartReading,EndTime,EndReading)
values('${Logno}','${entryby}',getDate(),'${WH}','${DATE}','${StartTime}',${StartReading},'${EndTime}',${EndReading})`)
        res.send(result.recordset)
    }
    catch(err){
        console.log(err)
        }
    }

module.exports ={GeneratorEntry}