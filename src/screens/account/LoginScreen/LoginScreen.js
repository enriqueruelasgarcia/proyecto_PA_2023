import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../utils/ScreenNames';
import styles from './LoginScreen.styles';
import { LoginForm } from '../../../components/Auth/LoginForm';
export default function LoginScreen(){
        const navigation = useNavigation();
        const goToRegister = () => {
          navigation.navigate(screens.account.register);
        };
    return(
        <ScrollView>
            <Image style={styles.image} source={require('../../../../assets/img/belligham.jpg')}/>
            <LoginForm></LoginForm>
            <Text style={styles.xd}>
                No tienes cuenta? 
            <Text style={styles.text} onPress={goToRegister}> Registrarse</Text>
            </Text>
        </ScrollView>
    )
}