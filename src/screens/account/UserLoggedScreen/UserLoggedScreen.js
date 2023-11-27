import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';
import { getAuth, signOut } from "firebase/auth"; 
import styles from './UserLoggedScreen.styles';
export default function UserLoggedScreen() {
  const auth = getAuth();
  const user = auth.currentUser;
  let email = ""; 
  if (user !== null) {
    email = user.email;
  }

  const logOut = async () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <View style={styles.content}>
      <Text>Sesión iniciada como:</Text>
      <Text style={styles.text}>{email}</Text>
      <Button
        title="Cerrar Sesión"
        style={styles.btnStyle}
        onPress={logOut}
      />
    </View>
  );
}
