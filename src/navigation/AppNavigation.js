import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantStack from '../navigation/RestaurantStack';

import FavoriteStack from './FavoriteStack';
import SearchStack from './SearchStack';
import { Ionicons } from '@expo/vector-icons';
import {screens} from "../utils/ScreenNames"
import RankingStack from './RankingStack';

import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

const getScreenOptions = ({ route }) => ({
  headerShown:false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = '';
    switch (route.name) {
      case screens.restaurants.tab:
        iconName = 'restaurant-outline';
        break;
      case screens.account.tab:
        iconName = 'home-outline';
        break;
      case screens.search.tab:
        iconName = 'search';
        break;
      case screens.favorites.tab:
        iconName = 'heart-outline';
        break;
      case screens.ranking.tab:
        iconName = 'star-outline';
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={getScreenOptions}
      
      tabBarOptions={{
        
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ]
        }
      }
    >
      <Tab.Screen name={screens.search.tab} component={SearchStack} options={{title:screens.search.search}}/>
      <Tab.Screen name={screens.restaurants.tab} component={RestaurantStack}options={{title:screens.restaurants.restaurants}} /> 
      <Tab.Screen name={screens.ranking.tab} component={RankingStack} options={{title:screens.ranking.ranking}} />
      <Tab.Screen name={screens.favorites.tab} component={FavoriteStack} options={{title:screens.favorites.favorites}}/>
      <Tab.Screen name={screens.account.tab} component={AccountStack} options={{title:screens.account.account}}/>
    </Tab.Navigator>
  );
}
