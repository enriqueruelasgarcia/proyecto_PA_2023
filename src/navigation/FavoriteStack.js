
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {screens} from '../utils/ScreenNames'
import FavoriteScreen from '../screens/Favorites/FavoriteScreen';
 const Stack = createNativeStackNavigator();

function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.favorites.favorites} component={FavoriteScreen} />
    </Stack.Navigator>
  );
}
export default FavoriteStack;