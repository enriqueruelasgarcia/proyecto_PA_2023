import {View, ActivityIndicator} from 'react-native'
import React from 'react';
import { Overlay, Text } from '@rneui/themed';
import styles from './LoadingModal.styles'; //

const LoadingModal = (props) => {
  const { show, text } = props;

  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Overlay>
  );
};

LoadingModal.defaultProps = {
  show: true,
  text: "Cargando...",
};

export default LoadingModal;
