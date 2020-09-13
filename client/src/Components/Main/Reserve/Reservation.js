import React,{useEffect,useState} from 'react'
import Cookie from 'js-cookie'
import {GetListAPI,OrderAPI} from '../../API/ReserveAPI'

const Reservation = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState(0);
    const [seat, setSeat] = useState(1);

    const [currentSeat, setCurrentSeat] = useState(0);

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
            btn.innerHTML = 'SELECT';
            btn.classList.add('btn','btn-success');
            btn.addEventListener('click',()=>{
                setId(item.Trip_id);
                setName(item.T_name);
                setDate(new Date(item.T_date).toLocaleDateString());
                setPrice(item.T_price);
                setCurrentSeat(parseInt(item.T_seat));
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
    const handleOrder=async(e)=>{
        const data = {
            c_id:Cookie.get('id'),
            t_id:id,
            name:name,
            seat:parseInt(seat),
            sumSeat:parseInt(seat)+parseInt(currentSeat)
        }
        if((seat+currentSeat)<=10){
            console.log(seat+currentSeat)
            const res = await OrderAPI(data);
            console.log(res.data); 
        }
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
            <div className="row">
                <div className="col-1">
                    <input className="form-control" type="text" value={id} disabled />
                </div>
                <div className="col-3">
                    <input className="form-control" type="text" value={name} disabled />
                </div>
                <div className="col-3">
                    <input className="form-control" type="text" value={date} disabled />
                </div>
                <div className="col-3">
                    <input className="form-control" type="text" value={price} disabled />
                </div>
                <div className="col-2">
                    <select className="form-control" onChange={e=>setSeat(parseInt(e.target.value))}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col-12">
                    <button className="btn btn-success form-control" onClick={()=>{handleOrder();window.location.reload()}} >Order</button>
                </div>
            </div>
        </div>
    )
}

export default Reservation
