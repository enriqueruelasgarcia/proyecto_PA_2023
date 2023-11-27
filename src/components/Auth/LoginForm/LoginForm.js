import {View, Text} from 'react-native'
import React from 'react'
import styles from '../RegisterForm/RegisterForm.style';
import { Icon,Input,Button } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons';
import {useFormik} from 'formik'
import { initialValues,validationSchema } from './LoginForm.data';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigation} from "@react-navigation/native"
import Toast from 'react-native-toast-message';
import {screens} from '../../../utils/ScreenNames'

export default function LoginForm () {
  const navigation=useNavigation();
  const formik = useFormik({
    validationSchema: validationSchema(),
    validateOnChange: false,
    initialValues: initialValues(),

    onSubmit: async (form_values) => {
      const auth = getAuth();
      try {
        await formik.validateForm(form_values);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          form_values.email,
          form_values.password
        );
        console.log('logged in succesfully');
        navigation.goBack();
        navigation.navigate(screens.account.account)
      } catch (error) {
        console.log(error)
        Toast.show({
          type: 'error',
          text1: `Error: ${error.message}`,
          position: 'bottom',
        });

        formik.setSubmitting(false);

      }
    },
  });


  const icon = (iconName) => (
    <Ionicons name={iconName} color="grey" size={20} />
  );

  return (
    
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        onChangeText={(text) => formik.setFieldValue('email', text)}
        containerStyle={styles.input}
        rightIcon={icon('at')}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        onChangeText={(text) => formik.setFieldValue('password', text)}
        containerStyle={styles.input}
        secureTextEntry={true}
        rightIcon={icon('eye-off')}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.btnUnirse}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};


