const sql =require('mssql')
const sqlConfig = require('../config.js')

const GeneratorEntry = async (req, res) => {
    const DATE = req.body.DATE;
    const StartTime =req.body.StartTime;
    const StartReading = req.body.StartReading;
    const EndTime = req.body.EndTime;
    const EndReading = req.body.EndReading
    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`
        insert into tbl_generatorlogbook_t (logno,entry_by,entry_date,warehouse,date,start_time,start_reading,
        end_time,end_reading,msgflag) values('DL','modi',getDate(),'GGN','${DATE}','${StartTime}',${StartReading},'${EndTime}',${EndReading},'')`)
        res.send(result)
    }
    catch(err){
        res.send(err)
        }
}

module.exports ={GeneratorEntry}