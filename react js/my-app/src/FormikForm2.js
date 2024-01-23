import React from 'react'
import {App} from './App.css'
import {ErrorMessage, Field, Form,Formik} from 'formik'
import ErrorMessage from './ErrorMessage'
import * as yup from 'yup'
function FormikForm2() {
    const validation=yup.object({
        name:yup.string().required()
    })
  return (
    <div>
      <Formik 
      validationSchema={validation}
      initialValues={
        {
        name:'',
        age:'',
        password:'',
        gender:'',
        course:'',
        country :'',
        comments:''
        }
      }
      onSubmit={(values)=>{
        console.log(values);
      }}
      >
        <Form className='App'>
        {/* text and number fields */}
            <label>Name : </label>
            <Field type='text' name='name' />
                <ErrorMessage name='name'/>
            <br/>
            <br/>
            <label>Age : </label>
            <Field type='number' name='age' />
            <br/>
            <br/>
            <label>Enter Password : </label>
            <Field type='text' name='password' />
            <br/>
            <br/>

            {/* radio buttons */}
            <label>Gender:  </label>
            <Field type='radio' name='gender' value='male'/>
            <label>Male</label>
            <Field type='radio' name='gender' value='female'/>
            <label>Female</label>
            <br/>
            <br/>

            {/* CheckBoxes */}
            <label>Select Courses : </label>
            <br/>
            <label>DSA &nbsp;</label>
            <Field type='checkbox' name='course' value='DSA'/>
            <label>COAL &nbsp;</label>
            <Field type='checkbox' name='course' value='COAL'/>
            <br/>
            <br/>

            {/* Select Menu */}
            <label>Select Country : </label>
            <br/>
            <Field name='country' as= 'select'>
                <option value='Canada'>Canada</option>
                <option value='Yamen'>Yamen</option>
                <option value='Iran'>Iran</option>
            </Field>
            <br/>
            <br/>

            {/* Textarea */}
            <label>Comments : </label>
            <br/>
            <Field as='textarea' name='comments'/>
            <br/>
            <br/>
            <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormikForm2
