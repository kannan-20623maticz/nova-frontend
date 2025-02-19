/** Pacakges */
// import axios, { setAuthToken } from "../config/axios"
import axios from "axios";

/** Config */
import config from "../config/config"




export const getCms = async(data) =>{
    try {
        console.log("getAdminCms_frontend", data);
        const getData = await axios.get(`${config.backurl}/admin/getCms`, { params: data });
        console.log("getAdminCms_data", getData.data);
        return { status: true, data: getData.data }
    } catch (e) {
        console.log("getAdminCms_err",e);
        return { status: false, error: e.response.data, data: {} }
    }
}