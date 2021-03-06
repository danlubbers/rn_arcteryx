import React, {useContext} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import styles from './HeaderStyles';
import logo from '../../assets/logo/arcteryx.png';
import Icon from '../Icon/Icon';
import {GlobalContext} from '../../context/Provider';
import {EDIT_MENS, EDIT_WOMENS} from '../../constants/actionTypes';

const Header = ({navigation}) => {
  const {globalDispatch} = useContext(GlobalContext);
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
            globalDispatch({type: EDIT_MENS});
            navigation.navigate('Products');
          }}>
          <Text style={styles.genderText}>Mens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            globalDispatch({type: EDIT_WOMENS});
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
