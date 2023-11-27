
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {screens} from '../utils/ScreenNames'
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/account/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/account/RegisterScreen/RegisterScreen';
const Stack = createNativeStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.account.account} component={AccountScreen} />
      <Stack.Screen name={screens.account.login} component={LoginScreen} options={{title:"Iniciar Sesion"}} />
      <Stack.Screen name={screens.account.register} component={RegisterScreen} options={{title:"Crear Cuenta"}} />

    </Stack.Navigator>
  );
}
export default AccountStack;