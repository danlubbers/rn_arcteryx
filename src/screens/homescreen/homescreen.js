import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './homescreenStyles';
import {GlobalContext} from '../../context/Provider';

import HeaderComponent from '../../components/Header/Header';
import HomeScreenComponent from '../../components/HomeScreen/HomeScreen';

const Homescreen = ({navigation}) => {
  const {globalDispatch, products} = useContext(GlobalContext);
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <View style={styles.homescreenContainer}>
      <HeaderComponent
        navigation={navigation}
        globalDispatch={globalDispatch}
      />
      <HomeScreenComponent
        navigation={navigation}
        randomProduct={randomProduct}
      />
    </View>
  );
};

export default Homescreen;
