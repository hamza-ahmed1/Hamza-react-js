import React from 'react'
import { useFormik } from 'formik'
import {FormSchema} from './FormSchema'

function FormikForm1() {

    const forminitialvalues={
        name:'',
        email:'',
        age:''
    }
    const formik=useFormik({
        initialValues:forminitialvalues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Enter Name : </label>
                <input name='name' type='text' 
                onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
              {formik.errors.name && formik.touched.name ?  <span>{formik.errors.name}</span>:null }
                <br />
                <label>Enter Email : </label>
                <input name='email' type='text' 
                 onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email}/>
         {formik.errors.email && formik.touched.email ?  <span>{formik.errors.email}</span>:null }


                <br />
                <label>Enter Age : </label>
                <input name='age' type='number' 
                 onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.age}/>
         {formik.errors.age && formik.touched.age ?  <span>{formik.errors.age}</span>:null }
                <br />
                <input type='submit' value={'submit'}/>

            </form>
        </div>
    )
}

export default FormikForm1
