import React from 'react'
import { TextField } from '@mui/material'
import { Grid,Button } from '@mui/material'
import styles from '../styles/login.module.css'
import Logo from '../components/sidebar/logo/Logo'
import { useState } from 'react'
import { useLogin } from '../hooks/auth'




export default function login() {

    const [values,setValues] = useState({email:'',password:''})
    const {mutate:doLogin} = useLogin()

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setValues({
          ...values,
          [name]: value,
        });
    }
    const handleSubmit = ()=>{
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token);
        doLogin(values)
    }

    return (
        <>
        <Logo/>
            <div className={styles.signin_page} >

                <Container>
                           <h1  >Administration</h1>
                           <p>Manange cleverhires users and hirers</p>

                    <TextField sx={{ mb: '15px' }}  fullWidth variant='filled' required  name='email' size='small' onChange={handleChange} value={values.email} label={'Email'} ></TextField>
                    <TextField type='password' sx={{ mb: '15px' }}  required fullWidth name='password' variant='filled' size='small' onChange={handleChange} value={values.password}  label={'Password'} ></TextField>


                    <p style={{ color: '#2274A5' }}>Forgot Password?</p>

                    <Button onClick={handleSubmit}  variant='contained' sx={{ borderRadius: '20px', width: '100%', height: '50px', boxShadow: 0 , mt:'5px', mb:'5px'}} >Sign In</Button>

    

                </Container>
            </div>
        </>
    )
}

function Container({ children }) {
    return (
        <Grid container xs='12' justifyContent={'center'} md='12'>
            <div style={{ marginTop: '25px' }} className={styles.signup_container} >
                <Grid xs='12' md='12' justifyContent={'center'} item >
                    {children}
                </Grid>
            </div>
        </Grid>
    )
}
