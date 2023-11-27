
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {screens} from '../utils/ScreenNames'
import RankingScreen from '../screens/ranking/RankingScreen';

const Stack = createNativeStackNavigator();

function RankingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.ranking.ranking} component={RankingScreen} />
    </Stack.Navigator>
  );
}
export default RankingStack;