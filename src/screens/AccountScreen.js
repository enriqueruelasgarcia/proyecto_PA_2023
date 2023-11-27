import React from 'react'
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from './account/UserGuestScreen';
import UserLoggedScreen from './account/UserLoggedScreen/UserLoggedScreen'
import LoadingModal from '../components/Shared/LoadingModal/LoadingModal';
export default function AccountScreen() {
  const [hasLogged,setHasLogged] = useState (null) ;

  useEffect (() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged (user ? true : false) ;
    });
  }, []) ;

  if (hasLogged === null) return <LoadingModal show={true} text="Cargando" />

  return hasLogged ? <UserLoggedScreen/> : <UserGuestScreen/>
}