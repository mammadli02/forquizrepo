import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PUT, GetById } from "../api/request";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

const EditPages = () => {
  const[persons,setPersons] = useState();
  console.log('peoples context: ',persons);
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState({});
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    GetById(id).then((res) => {
      setPerson(res);
      formik.values.names = res.names;
      formik.values.age = res.age;
      setLoading(false);
    });
  }, [id]);
  const handleEdit = async(values, actions) => {
    // artist.find((x)=>x._id===id)
    setPersons(values);
    await PUT(id,values);
    navigate('/');
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      names: person.names,
      age: person.age,
    },
    onSubmit: handleEdit,
  });
  return (
    <>
      <Typography
        style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
      >
        {person.names} Edit
      </Typography>
      { loading ? <div>loading...</div> : <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextField
          type="text"
          placeholder="people names"
          name="names"
          value={formik.values.names}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="number"
          placeholder="people age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        
        </div>
        <Button style={{margin:'0 auto',display:'block',marginTop:'20px'}} variant="contained" color="primary" type="submit">Edit</Button>
      </form> }
    </>
  );
};

export default EditPages;
