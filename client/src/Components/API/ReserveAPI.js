import axios from 'axios';

export const GetListAPI = async() =>{
    const res = await axios.get(`http://localhost:5000/reserve/getReservationList`);
    return res;
}
export const InsertListAPI = async(data)=>{
    const res = await axios.post(`http://localhost:5000/reserve/InsertTrip`,data);
    return res;
}
export const DeleteListAPI = async(id)=>{
    const res = await axios.get(`http://localhost:5000/reserve/DeleteTrip/${id}`)
    return res;
}
export const OrderAPI = async(data)=>{
    const res = await axios.post(`http://localhost:5000/reserve/OrderTrip`,data);
    return res;
}
export const GetUsertripAPI = async(id)=>{
    const res = await axios.get(`http://localhost:5000/reserve/account_trip/${id}`);
    return res;    
}