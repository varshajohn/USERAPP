import React, { use, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useActionData } from 'react-router-dom';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'


const Add = ({person}) => {
    // const [counter,setCounter]=useState(0);
    // let incrementCounter = () => {
    //     setCounter(counter + 1);
    // }
    const [form,setForm]=useState({
        userId: '',
        userName: '',
        email: ''
    })
    const navigate=useNavigate();
    const location = useLocation();
    let fetchValue = (e) => {
        //console.log(e);
        setForm({...form,[e.target.name]: e.target.value})
    }
    let show = () => {
      if (location.state!=null) {
      axios.put('http://localhost:4000/updateuser/'+location.state.user._id,form).then((res)=> {
        alert('Data updated');
        navigate('/')

      }).catch((error)=>{
        console.log(error);
      })
    } else {
      axios.post('http://localhost:4000/newuser',form).then((res)=> {
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    } 
      }
      useEffect(()=>{
        if(location.state!=null){
          setForm({...form,
            userId: location.state.user.userId,
            userName: location.state.user.userName,
            email: location.state.user.email
          })
        }

      },[])
  return (
    <div>
        <h1>Add User</h1>
         <Box
      component="form"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <Stack spacing={2} direction="column">
      <TextField name='userId' id="outlined-basic" label="userid" variant="outlined"  value={form.userId} onChange={fetchValue} />
      <TextField name='userName' id="outlined-basic" label="name" variant="outlined" value={form.userName} onChange={fetchValue} />
      <TextField name='email' id="outlined-basic" label="email" variant="outlined" value={form.email} onChange={fetchValue} />
     <Button onClick={show} variant="contained" style={{ backgroundColor: 'rgb(55, 55, 235)', color: 'white' }}>Submit</Button>
    {/* <Button variant="contained" onClick={incrementCounter}>Counter</Button> {counter} */}
    </Stack>
    </Box>
    </div>
  )
}

export default Add