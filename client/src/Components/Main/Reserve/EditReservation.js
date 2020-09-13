import React,{useEffect,useState} from 'react'
import {GetListAPI,InsertListAPI,DeleteListAPI} from '../../API/ReserveAPI'
const EditReservation = () => {
    
    const [name, setName] = useState('');
    const [desp, setDesp] = useState('');
    const [date, setDate] = useState();
    const [price, setPrice] = useState('');

    const get_trip=async()=>{
        const data = await GetListAPI();
        console.log(data)
        let trip_body = document.getElementById('trip_tb');
        
        data.data.map(item=>{
            const row = document.createElement('tr');
            const id = document.createElement('td');
            id.innerHTML = item.Trip_id;
            const name = document.createElement('td');
            name.innerHTML = item.T_name;
            const desp = document.createElement('td');
            desp.innerHTML = item.T_description;
            const date = document.createElement('td');
            date.innerHTML = new Date(item.T_date).toLocaleDateString();
            const seat = document.createElement('td');
            seat.innerHTML = item.T_seat;
            const price = document.createElement('td');
            price.innerHTML = item.T_price;
            const btn = document.createElement('button');
            btn.innerHTML = 'DELETE';
            btn.classList.add('btn','btn-danger');
            btn.addEventListener('click',()=>{
                if(window.confirm(`Do you want to delete this trip.`)){
                    DeleteListAPI(item.Trip_id);
                    window.location.reload();                    
                }
            })
            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(desp);
            row.appendChild(date);
            row.appendChild(seat);
            row.appendChild(price);
            row.appendChild(btn);
            trip_body.appendChild(row);
        })
    }

    const InsertTrip=async()=>{
        const data = {
            name:name,
            desp:desp,
            date:new Date(date),
            price:price
        }
        const res = await InsertListAPI(data);
        console.log(res);
        window.location.reload();   
    }

    useEffect(()=>{
        get_trip();
    },[])

    return (
        <div className="container">
            <h1>Reservation List</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID.</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Seat</th>
                        <th>Price</th>
                        <th>Selector</th>
                    </tr>
                </thead>    
                <tbody id="trip_tb">
                    {/* Data of All Trips. */}
                </tbody>
            </table>
            <div style={{marginBottom:'50px',marginTop:'70px'}}>
                <h1>ADD TRIP</h1><hr/>
                <form>
                    <div className="form-group">
                        <label>Trip Name</label>
                        <input className="form-control" type="text" onChange={e=>setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="3" onChange={e=>setDesp(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input className="form-control" type="date" onChange={e=>setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input className="form-control" type="number" onChange={e=>setPrice(e.target.value)}/>
                    </div>
                    <button className="btn btn-success form-control"  onClick={InsertTrip} >INSERT</button>
                </form>
            </div>
        </div>
    )
}

export default EditReservation
