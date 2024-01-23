import { ErrorMessage } from 'formik'
import React from 'react'

function ErrorMessage({name}) {
  return (
    <div>
      <ErrorMessage name={name}/> 
    </div>
  )
}

export default ErrorMessage
