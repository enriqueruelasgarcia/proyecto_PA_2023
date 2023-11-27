import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../utils/ScreenNames';
import styles from './UserGuestScreen.styles';

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screens.account.login);
  };

  return (
    <ScrollView style={styles.content}> 
      <Image
        source={require('../../../../assets/img/user-guest.png')}
        style={styles.image} 
      />
      <Text style={styles.title}>Consulta el perfil de usuario</Text> 
      <Text style={styles.description}>
      Lorem ipsum dolor sit amet. Ut voluptas distinctio sed ipsam vero est ratione tempora ut voluptas nulla. Et aliquam fugit non fuga repellat in repellat tempora aut internos ullam.
      </Text> 
      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        style={styles.btnStyle} 
      />
    </ScrollView>
  );
}
