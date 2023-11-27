
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {screens} from '../utils/ScreenNames'
import SearchScreen from '../screens/Search/SearchScreen';
const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.search.search} component={SearchScreen} />
    </Stack.Navigator>
  );
}
export default SearchStack;