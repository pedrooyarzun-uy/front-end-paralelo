import axios from "axios";

export default axios.create({
    baseURL: 'http://192.168.1.51:9080/SAGAFrontEndServices/webapi',
    headers: {'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
});