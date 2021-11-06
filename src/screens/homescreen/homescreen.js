import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './homescreenStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import HeaderComponent from '../../components/Header/Header';
import HomeScreenComponent from '../../components/HomeScreen/HomeScreen';

const Homescreen = ({navigation}) => {
  const {products} = useContentful(query, null);
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  const [gender, setGender] = useState(null);

  console.log(`gender`, gender);

  return (
    <View style={styles.homescreenContainer}>
      <HeaderComponent
        navigation={navigation}
        gender={gender}
        setGender={setGender}
      />
      <HomeScreenComponent
        navigation={navigation}
        randomProduct={randomProduct}
      />
    </View>
  );
};

export default Homescreen;
