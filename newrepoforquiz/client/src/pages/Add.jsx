import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { ValidationSchema } from "../validations/Validation";
import { POST } from "../api/request";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const handleSubmit = async(values, actions) => {
    await POST(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.names} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/');
  };
  const formik = useFormik({
    initialValues: {
      names: "",
      age: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add New Peoples</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.names}
          placeholder="enter name"
          type="text"
          name="names"
        />
        {formik.errors.names && formik.touched.names && (
          <span>{formik.errors.names}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          placeholder="enter age"
          type="number"
          name="age"
        />
        {formik.errors.age && formik.touched.age && (
          <span>{formik.errors.age}</span>
        )}
       
        <button
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New 
        </button>
      </form>
    </>
  );
};

export default Add;

