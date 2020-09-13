import React,{useContext} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import GlobalState from '../Utils/GlobalState'

//
import Home from '../Main/Home'
import SignIn from '../Main/Auth/Signin'
import SignUp from '../Main/Auth/Signup'
import EditReservation from '../Main/Reserve/EditReservation'
import Reservation from '../Main/Reserve/Reservation'
import Account from '../Main/Reserve/Account'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/signin" component={SignIn} />
            <AuthRoute exact path='/signup' component={SignUp} />
            <AdminRoute exact path="/edit_reservation" component={EditReservation} />
            <ProtectRoute exact path="/reservation" component={Reservation} />
            <ProtectRoute exact path="/account_management" component={Account} />
            <Redirect to="/" />
        </Switch>
    )
}

export const AuthRoute=({component:Component,...rest})=>{
    const {auth} = useContext(GlobalState);
    return(
        <Route  {...rest} render={prop=>!auth?(<Component {...prop}/>):(<Redirect to="/home" />)} />
    )
}
export const ProtectRoute=({component:Component,...rest})=>{
    const {auth} = useContext(GlobalState);
    return(
        <Route  {...rest} render={prop=>(Cookie.get('id'))?(<Component {...prop}/>):(<Redirect to="/home" />)} />
    )
}
export const AdminRoute=({component:Component,...rest})=>{
    return(
        <Route  {...rest} render={prop=>Cookie.get('id')==='1'?(<Component {...prop}/>):(<Redirect to="/home" />)} />
    )
}

export default Routes
