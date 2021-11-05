import React from 'react';
import {ImageBackground, Button, View, Text} from 'react-native';
import styles from './HomeScreenStyles';
import image from '../../assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homescreenContainer}>
      <Button
        title="View Products"
        onPress={() => {
          navigation.navigate('Products');
        }}
      />
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
    </View>
  );
};

export default HomeScreen;
