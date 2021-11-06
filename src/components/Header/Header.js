import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import styles from './HeaderStyles';
import logo from '../../assets/logo/arcteryx.png';
import Icon from '../Icon/Icon';

const Header = ({navigation}) => {
  return (
    <View style={styles.headerWrapper}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Text style={styles.genderText}>Mens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
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
