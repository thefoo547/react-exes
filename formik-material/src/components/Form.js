import React from 'react';
import TextField from'@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {Formik} from 'formik';
import PersonSchema from './PersonSchema'


const useStyles = makeStyles(theme=>({
  root:{
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


export default function Form(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{fullname:'', email:'', ced: ''}}
        validationSchema={PersonSchema}
        onSubmit={(values, {setSubmitting}) =>{
          alert(JSON.stringify(values));
          setSubmitting(false);
        }}
      >
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      })=>(
        <div>
          <form onSubmit={handleSubmit}>
          <TextField
            error={(errors.fullname && touched.fullname && errors.fullname)}
            label="Nombre Completo"
            type='fullname'
            name='fullname'
            helperText={errors.fullname && touched.fullname && errors.fullname}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        <TextField
            error={(errors.email && touched.email && errors.email)}
            label="email"
            type='email'
            name='email'
            helperText={errors.email && touched.email && errors.email}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            error={(errors.ced && touched.ced && errors.ced)}
            label="Cédula"
            type='ced'
            name='ced'
            helperText={errors.ced && touched.ced && errors.ced}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        <Button variant='contained' type='submit' disabled={isSubmitting}>{isSubmitting? 'Enviando...' : 'Enviar'}</Button>
      
          </form>
        </div>
      )}
      </Formik>
      
    </div>
    
    /*<form className={classes.root} noValidate autoComplete="off">
      
      
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
    </form>*/
  );
}