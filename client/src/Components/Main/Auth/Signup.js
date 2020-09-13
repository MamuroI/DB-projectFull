import React,{useState} from 'react'
import Cookie from 'js-cookie'
import {Container,TextField,Button, FormControl,} from '@material-ui/core'
import {makeStyles,fade} from '@material-ui/core/styles'
// API
import {SignUpAPI,HasEmailAPI,HasUserAPI} from '../../API/AuthAPI'
import GlobalState from '../../Utils/GlobalState'

const useStyle = makeStyles((theme)=>({

    body:{
        borderRadius:"15px",
        boxShadow:"3px 3px 5px black",
        background:'#b2e5e9',
        opacity:'1',
        width:"500px",
        height:"max-content",
        padding:"10px",
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:theme.spacing(10),
        color:'#666',
    },
    root:{

    },
    form:{
        display:"flex",
        flexDirection:"column"
    },
    input:{
        margin:theme.spacing(2),
        backgroundColor:'#b2e5e9',
    },
    btn:{
        margin:theme.spacing(2),
        background:"#ff6961",
        "&:hover":{
            background:fade("#ff66961",0.75)
        }
    }

}))

const SignUp = () => {
    const classes = new useStyle();
    const {setAuth} = React.useContext(GlobalState);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [tel, setTel] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const [validEmail, setValidEmail] = useState(false);
    const [validUsername, setValidUsername] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const handleUsername=async(x)=>{
        if(x!==''){
            const res = await HasUserAPI({username:x});
            return res.data.has;
        }
    }
    const handleEmail=async(x)=>{
        if(x!==''){
            const res = await HasEmailAPI({email:x});
            return res.data.has;
        }
    }
    const handleSignup=async(e)=>{
        e.preventDefault();
        if(password===repassword){
            const data = {
                email:email,
                username:username,
                password:password,
                tel:tel,
                name:name
            }
            const res = await SignUpAPI(data);
            Cookie.set('id',res.data.id);
            setAuth(true);
        }else{
            setValidPassword(true);
        }
    }
    React.useEffect(()=>{
        if(repassword===password){
            setValidPassword(false);
        }else{setValidPassword(true);}
    },[repassword])
    return (
        <div className={classes.body} >
            <Container className={classes.root} maxWidth="sm">
                    <h1>Sign-Up</h1>
                    <hr/>
                    <form className={classes.form}>
                        <FormControl>
                            <TextField className={classes.input} error={validEmail} type="email" variant="outlined" label="Email" onChange={e=>setEmail(e.target.value)} onBlur={async(e)=>{await handleEmail(e.target.value)?setValidEmail(true):setValidEmail(false)}} />
                        </FormControl>
                        <FormControl>
                            <TextField className={classes.input} error={validUsername} type="text" variant="outlined" label="Username" onChange={e=>setUsername(e.target.value)} onBlur={async(e)=>{await handleUsername(e.target.value)?setValidUsername(true):setValidUsername(false)}} />
                        </FormControl>
                        <FormControl>
                            <TextField className={classes.input} type="text" variant="outlined" label="Name" onChange={e=>setName(e.target.value)}  />
                        </FormControl>
                        <FormControl>
                            <TextField className={classes.input} type="tel" variant="outlined" label="Tel" onChange={e=>setTel(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <TextField className={classes.input} error={validPassword} type="password" variant="outlined" label="Password" onChange={e=>setPassword(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <TextField className={classes.input} error={validPassword} type="password" variant="outlined" label="Confirm-Password" onChange={e=>setRepassword(e.target.value)} />
                        </FormControl>
                        <small className={classes.input}>If you have an accounts, <a href="/signin">SignIn</a>.</small>
                        <Button className={classes.btn} variant="contained" color="primary" onClick={handleSignup} >SignUp</Button>
                    </form>
            </Container>
        </div>
    )
}

export default SignUp