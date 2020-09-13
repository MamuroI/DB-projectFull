import React,{useState} from 'react'
import Cookie from 'js-cookie'
import {Container,TextField,Button, FormControl} from '@material-ui/core'
import {makeStyles,fade} from '@material-ui/core/styles'
// API
import {SignInAPI} from '../../API/AuthAPI'
import GlobalState from '../../Utils/GlobalState'

const useStyle = makeStyles((theme)=>({

    body:{
        borderRadius:"15px",
        boxShadow:"3px 3px 5px black",
        background:'#b2e5e9',
        width:"500px",
        height:"max-content",
        padding:"10px",
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:theme.spacing(10),
        color:'#666'
    },
    root:{

    },
    form:{
        display:"flex",
        flexDirection:"column"
    },
    input:{
        margin:theme.spacing(2),
    },
    btn:{
        margin:theme.spacing(2),
        color:'white',
        background:"#ff6961",
        "&:hover":{
            background:fade("#ff6961",0.75)
        }
    }

}))
const SignIn = () => {
    const classes = new useStyle();
    const {setAuth} = React.useContext(GlobalState);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin=async(e)=>{
        e.preventDefault();
        const data = {
            username:username,
            password:password
        }
        const res = await SignInAPI(data);
        if(res.data.auth){
            Cookie.set('id',res.data.id)
            setAuth(true);
        }else{
            setAuth(false);
            window.alert(`Incorrect username or password!!`);
        }
    }

    return (
        <div className={classes.body}>
            <Container className={classes.root} maxWidth="sm">
                    <h1>Sign-In</h1>
                    <hr/>
                    <form className={classes.form}>
                        <FormControl>
                            <TextField className={classes.input} type="text" variant="outlined" label="Username" onChange={e=>setUsername(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <TextField className={classes.input} type="password" variant="outlined" label="Password" onChange={e=>setPassword(e.target.value)} />
                        </FormControl>
                        <small className={classes.input}>If you don't have any accounts, <a href="/signup">SignUp</a>.</small>
                        <Button className={classes.btn} variant="contained" onClick={handleSignin} >SignIn</Button>
                    </form>
            </Container>
        </div>
    )
}

export default SignIn