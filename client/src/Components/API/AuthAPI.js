import axios from 'axios'

export const SignInAPI = async(data) =>{
    const res = await axios.post(`http://localhost:5000/auth/signin`,data);
    return res;
}
export const SignUpAPI = async(data)=>{
    const res = await axios.post('http://localhost:5000/auth/signup',data);
    return res;
}
export const HasUserAPI = async(data)=>{
    const res = await axios.post('http://localhost:5000/auth/hasUsername',data);
    return res;
}
export const HasEmailAPI = async(data)=>{
    const res = await axios.post('http://localhost:5000/auth/hasEmail',data);
    return res;
}
export const GetUserAPI = async(id)=>{
    const res = await axios.get(`http://localhost:5000/auth/get_user/${id}`);
    return res;
}
