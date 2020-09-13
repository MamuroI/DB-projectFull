import React,{useEffect} from 'react';
import Cookie from 'js-cookie';
import {GetUsertripAPI} from '../../API/ReserveAPI'

const Account = () => {
    
    const getUserTrip=async()=>{
        const res = await GetUsertripAPI(Cookie.get('id'));
        console.log(res)
        res.data.map(item=>{
            const tb = document.getElementById('list');
            const row = document.createElement('tr');
            const oid = document.createElement('td');
            const tid = document.createElement('td');
            const tn = document.createElement('td');
            const date = document.createElement('td');
            oid.innerHTML=item.Account_id;
            tid.innerHTML=item.Trip_id;
            tn.innerHTML=item.T_name;
            date.innerHTML=new Date(item.T_date).toLocaleDateString();
            row.appendChild(oid);
            row.appendChild(tid);
            row.appendChild(tn);
            row.appendChild(date);
            tb.appendChild(row);
        })
    }    

    useEffect(()=>{
        getUserTrip();
    },[])

    return (
        <div className="container">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <td>Order ID.</td>
                        <td>Trip ID.</td>
                        <td>Trip Name</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody id="list">

                </tbody>
            </table>
        </div>
    )
}

export default Account
