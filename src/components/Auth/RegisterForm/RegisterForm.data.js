import *  as Yup from "yup" 
export const initialValues = () => ({
    email: '',
    password: '',
    confirmPassword: '',
  });
  
export const validationSchema = () =>
Yup.object({
  email: Yup.string().email('El correo está mal escrito').required('Necesito tu correo ya!'),
  password: Yup.string().required('La contraseña es obligatoria'),
  confirmPassword: Yup.string()
    .required('La contraseña es obligatoria')
    .oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales'),
});