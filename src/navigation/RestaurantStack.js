
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {screens} from '../utils/ScreenNames'
import AddRestaurantScreen from '../screens/Restaurants/AddRestaurantScreen/AddRestaurant';
import RestaurantScreen from '../screens/Restaurants/RestaurantScreens/RestaurantScreen';
const Stack = createNativeStackNavigator();

function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.restaurants.restaurants} component={RestaurantScreen} />
      
      <Stack.Screen name={screens.restaurants.add_restaurant} component={AddRestaurantScreen} />
    </Stack.Navigator>
  );
}
export default RestaurantStack;