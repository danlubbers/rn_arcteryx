import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import styles from './HeaderStyles';
import logo from '../../assets/logo/arcteryx.png';
import Icon from '../Icon/Icon';

const Header = ({navigation, productState, dispatch}) => {
  // console.log(`Header initialState`, productState);
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          onPress={() => {
            dispatch('EDIT_MENS');
            navigation.navigate('Products');
          }}>
          <Text style={styles.genderText}>Mens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch('EDIT_WOMENS');
            navigation.navigate('Products');
          }}>
          <Text style={styles.genderText}>Womens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Icon name="search" type="material" size={21} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
