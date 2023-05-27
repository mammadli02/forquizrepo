import React, { useEffect, useState } from 'react'
import { Delete, GETALL } from '../api/request'
import {Helmet} from "react-helmet";
import Grid from '@mui/material/Grid';
import { Card , Typography} from 'antd';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Home = () => {
  const[persons,setPersons]=useState([])
 

  useEffect(()=>{
    GETALL().then((res)=>{
      console.log(res.names);
      setPersons(res)
    })
  },[])
  function handleSearch(e) {
    GETALL(e.target.value).then((res) => {
      setPersons(res);
    });
  }
  return (
    <>
    <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Box sx={{ flexGrow: 1 }} style={{width:'80%', margin:'0 auto'}}>
           <Grid container spacing={2} style={{margin:'50px 0', display:"flex", justifyContent:"space-between"}}>
           <TextField
            onChange={(e) => handleSearch(e)}
            style={{ marginBottom: "30px" }}
            id="outlined-basic"
            label="Search Peoples"
            variant="outlined"
      
          />
<Button variant="contained" onClick={()=>{
  let SortedDatas=[...persons.sort((a,b)=>  a.age-b.age)]
  setPersons(SortedDatas)
}}>Sorted By age</Button>

<Button variant="contained" onClick={()=>{
  let SortedDatas=[...persons.sort((a,b)=>a.names.localeCompare(b.names))]
  setPersons(SortedDatas)
}}>Sorted By Names</Button>
           </Grid>
      <Grid container spacing={2}>
{persons && persons.map((person)=>{
  return(
    <Grid  key={person._id} item lg={3} sm={6} md={4} >
 <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://t3.ftcdn.net/jpg/02/53/27/72/360_F_253277232_w0KhD626du0CeTExyY9HV5wANXHRjswV.jpg" />}
  >
    <Typography name={person.names}>{person.names}</Typography>
    <Typography>

    </Typography>
<Typography>{person.age}</Typography>

      <Link to={`home/${person._id}`}>View Details</Link>
<Button onClick={()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Delete(person._id).then((res)=>{
        Swal.fire(
          `${res.names} Deleted!`,
          'Your file has been deleted.',
          'success'
        )

      })
        setPersons(persons.filter((x)=>
          x._id!==person._id
        ))

    }
  })
}}> 
DELETE
</Button>

<Button>
  <Link  to={`/home/edit/${person._id}`}>EDIT</Link>
</Button>
  </Card>





  </Grid>
  )
})}



       
       
      </Grid>
    </Box>
    </>
  )
}

export default Home