import axios from 'axios'

const API_URL = 'http://localhost:8000';



// POST API
export const saveData = async (data) =>{
    try {
        await axios.post(`${API_URL}/save`,data)
    } catch (error) {
        console.error('Error while calling save data api',error.message);
    }
}


// get api
export const getData = async () =>{
    try {
        const res = await axios.get(`${API_URL}/get`)
        return res.data;
    } catch (error) {
        console.error('Error while calling save data api',error.message);
    }
}