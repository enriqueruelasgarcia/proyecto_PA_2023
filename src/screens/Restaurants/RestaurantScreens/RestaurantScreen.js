import {View, Text} from 'react-native'
import React from 'react'
import {screens} from '../../../utils/ScreenNames'
import { Ionicons } from '@expo/vector-icons';
import styles from './RestaurantScreen.styles';
import { Auth,getAuth,onAuthStateChanged } from 'firebase/auth';
import { useState,useEffect } from 'react';
export default function RestaurantScreen({navigation}){
    const [hasLogged,setHasLogged]=useState(false)
    const goToAddRestaurant = () => {
        navigation.navigate(screens.restaurants.add_restaurant);
      };
      useEffect(()=>{
      const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setHasLogged (user ? true : false) ; 
        });
      },[])
      const BtnAgregar=(
        <Ionicons
           name="add-circle"
           color="green"
           size={60}
           style={styles.btnContainer}
           onPress={goToAddRestaurant}
           />
           )
    return(
        <View style={styles.content}>
            <Text>ESTA ES LA VISTA DE LOS RESTAURANTRS</Text>
            {hasLogged && BtnAgregar}
        </View>
    )
}