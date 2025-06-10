import React, { use, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function createData(userid, name, email) {
  return { userid, name, email };
}

// const rows = [
//   createData(1, 'ross', 'ross@gmail.com'),
//    createData(3, 'rachel', 'rachel@gmail.com'),
//   createData(2, 'chandler', 'chandler@gmail.com'),
//   createData(4, 'monica', 'monica@gmail.com'),
//   createData(5, 'joey', 'joey@gmail.com'),
// ];

const Home = () => {
const [users,setUsers] = useState([]);
const navigate = useNavigate();
useEffect(() => {
      axios.get("http://localhost:4000/users").then(res=>{
      setUsers(res.data);   
    }).catch((error)=>{
      console.log(error)
    })
  }, []);
  let deleteUser=(id)=>{
    axios.delete("http://localhost:4000/userremoval/"+id)
    .then((res)=>{
      window.location.reload();
    })
    .catch((error)=>{
      console.log("error while deleting the user");
    })

  }
  let updateUser=(user)=>{
    navigate('/add',{state:{user}}); // Navigate to the Add component with the user data
    // axios.put("http://localhost:4000/updateuser/"+user._id,user)
    // .then((res)=>{
    //   window.location.reload();
    // })
    // .catch((error)=>{
    //   console.log("error while updating the user");
    // })

  }
  return (
    <div>
        <h1>Home Page</h1>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userid</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={users.userid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.userId}
              </TableCell>
              <TableCell align="right">{user.userName}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right" size='small'>  <Button  variant="contained" color='error' onClick={()=>{deleteUser(user._id)}}>Delete</Button></TableCell>
              <TableCell align="right" size='small'>  <Button variant="contained" color='success' onClick={() => {updateUser(user)}}>Edit</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home