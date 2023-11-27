import { Text} from 'react-native'
import React from 'react'
import RegisterForm from '../../../components/Auth/RegisterForm/RegisterForm'
import styles from './RgisterScreen.styles'
import { Image } from '@rneui/themed'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function RegisterScreen(){
    return(
        <KeyboardAwareScrollView>
            <Text>RegisterScreen</Text>
            <Image
        source={require('../../../../assets/img/belligham.jpg')} 
        style={styles.image}
      />
      <RegisterForm/>
        </KeyboardAwareScrollView>
    )
}