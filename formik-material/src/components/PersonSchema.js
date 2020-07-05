import * as Yup from 'yup';

const PersonSchema = Yup.object().shape({
    fullname: Yup.string()
    .min(2, 'Mui corto')
    .max(30, 'Mui largo')
    .required('Como es que no vas a tener nombre mi crack'),
    email: Yup.string()
    .email('Ingrese correo correctamente')
    .required('Se necesita el correo mi pana'),
    ced: Yup.string()
    .length(16, 'Solo formatos válidos')
    .required('Si no son mayores de edad, ve pa tu casa')
    .matches(/([0-9][0-9][0-9]-\d{6}-\d{4}[A-Z])/g, 'Formato no válido')
    
});

export default PersonSchema;