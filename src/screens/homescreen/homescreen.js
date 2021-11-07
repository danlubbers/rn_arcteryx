import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import styles from './homescreenStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import {GlobalContext} from '../../context/Provider';
import {GET_PRODUCTS} from '../../constants/actionTypes';
import HeaderComponent from '../../components/Header/Header';
import HomeScreenComponent from '../../components/HomeScreen/HomeScreen';

const Homescreen = ({navigation}) => {
  const {globalDispatch, productsDispatch} = useContext(GlobalContext);
  const {products} = useContentful(query, null);
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  // console.log(`randomProduct`, randomProduct?.slug);

  useEffect(() => {
    productsDispatch(GET_PRODUCTS);
  }, []);

  // console.log(`initialState`, initialState);
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
