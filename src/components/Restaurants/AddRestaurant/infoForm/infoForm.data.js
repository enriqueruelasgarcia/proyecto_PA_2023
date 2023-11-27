import *  as Yup from "yup" 
export const initialValues = () => ({
    name: '',
    address: '',
    description:'',
  });
  
export const validationSchema = () =>
Yup.object({
  name: Yup.string().required('El nombre es obligatotio'),
  address: Yup.string().required('La direccion es obligatoria'),
  description:Yup.string().required('La descripcion es obligatoria')
});