import axios from 'axios';

export const GeneratorEntry = async (Logno,entryby,WH,DATE,StartTime,StartReading,EndTime,EndReading) => {
    const url = `http://localhost:3008/api/generatorentry`
    return axios.post(url, {Logno,entryby,WH,DATE,StartTime,StartReading,EndTime,EndReading}).then(response => response.data).catch(error => console.log(error));
}