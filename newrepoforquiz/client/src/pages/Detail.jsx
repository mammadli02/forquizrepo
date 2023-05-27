import React, { useEffect, useState } from 'react'
import {  GetById } from '../api/request'
import {Helmet} from "react-helmet";
import Grid from '@mui/material/Grid';
import { Card } from 'antd';
import { Box, Typography } from '@mui/material';
import {  useParams } from 'react-router-dom';
const Detail = () => {
  const[person,setPerson]=useState({})
 
const {id}=useParams()
  useEffect(()=>{
    GetById(id).then(res=>{
      setPerson(res)
    })
  },[id])

  return (
    <>
    <Helmet>
                <title>Detail Page</title>
            </Helmet>
            <Box sx={{ flexGrow: 1 }} style={{width:'80%', margin:'0 auto'}}>
    
      <Grid container spacing={2}>

    <Grid  key={person._id} item lg={3} sm={6} md={4} >
 <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://t3.ftcdn.net/jpg/02/53/27/72/360_F_253277232_w0KhD626du0CeTExyY9HV5wANXHRjswV.jpg" />}
  >
    <Typography>{person.names}</Typography>
    <Typography>

    </Typography>
<Typography>{person.age}</Typography>



  </Card>





  </Grid>




       
       
      </Grid>
    </Box>
    </>
  )
}

export default Detail