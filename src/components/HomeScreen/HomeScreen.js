import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './HomeScreenStyles';
import image from '../../assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg';

import HeroImageComponent from '../HeroImage/HeroImage';

const HomeScreen = ({randomProduct}) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <HeroImageComponent randomProduct={randomProduct} />
    </ImageBackground>
  );
};

export default HomeScreen;
