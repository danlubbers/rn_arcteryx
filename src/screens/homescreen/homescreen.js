import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './homescreenStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import {GlobalContext} from '../../context/Provider';
import HeaderComponent from '../../components/Header/Header';
import HomeScreenComponent from '../../components/HomeScreen/HomeScreen';

const Homescreen = ({navigation}) => {
  const {initialState, initialDispatch} = useContext(GlobalContext);
  const {products} = useContentful(query, null);
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  console.log(`HOME: initialState`, initialState);

  return (
    <View style={styles.homescreenContainer}>
      <HeaderComponent navigation={navigation} dispatch={initialDispatch} />
      <HomeScreenComponent
        navigation={navigation}
        randomProduct={randomProduct}
      />
    </View>
  );
};

export default Homescreen;
