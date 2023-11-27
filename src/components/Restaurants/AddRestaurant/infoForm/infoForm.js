import React from 'react'
import { View, Text } from 'react-native'
import { Input ,Button} from '@rneui/themed';
import { v4 as uuidv4 } from 'uuid'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../../../utils/firebase';
import { useNavigation } from '@react-navigation/native';
import {useFormik} from 'formik'
import { validationSchema,initialValues } from './infoForm.data';
import Toast from 'react-native-toast-message';
function InfoForm() {
    const navigation=useNavigation();
    const formik = useFormik({
      validationSchema: validationSchema(),
      validateOnChange: false,
      initialValues: initialValues(),
  
      onSubmit: async (form_values) => {
        try {
            console.log("presionado")
            const form_values2 = {form_values};
            form_values2.id = uuidv4();
            form_values2.createdAt = new Date(); 
            const restaurantRef = doc(db, 'restaurants', form_values2.id);
            await setDoc(restaurantRef, form_values2);
            navigation.goBack();
          } catch (error) {
            console.log(error)
            Toast.show({
              type: 'error',
              text1: `Error: ${error.message}`,
              position: 'bottom',
            });
          }
          formik.setSubmitting(false);
      },
    });
  return (
    <View>
      <Input
        placeholder="Nombre"
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        errorMessage={formik.errors.name}
      />
      <Input
        placeholder="Dirección"
        value={formik.values.address}
        onChangeText={formik.handleChange('address')}
        onBlur={formik.handleBlur('address')}
        errorMessage={formik.errors.address}
      />
      <Input
        placeholder="Descripción"
        multiline={true}
        numberOfLines={4}
        inputContainerStyle="textArea"
        value={formik.values.description}
        onChangeText={formik.handleChange('description')}
        onBlur={formik.handleBlur('description')}
        errorMessage={formik.errors.description}
      />
      <Button 
      title="Guardar" 
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
      />
    </View>
  );
}

export default InfoForm;