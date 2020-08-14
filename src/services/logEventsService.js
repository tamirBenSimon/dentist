
import httpService from './httpService';


function newLog(logName ,clientData=null) {
    console.log('client data', clientData)
    const dataObj= {
        url: window.location.href,
        name: logName,
        vertical: "dentist",
        hostname: window.location.hostname,
        referrer: document.referrer,
    }
    if(  clientData){
        for(let key in clientData){
            dataObj[key]=clientData[key]
        }
        console.log("dataObjjjjjj ", dataObj)
    }


    httpService.post("/log-events", dataObj)
}

export default {
    newLog
}

