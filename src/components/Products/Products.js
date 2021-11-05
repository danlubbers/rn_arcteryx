import React from 'react';
import styles from './ProductsStyles';
import {TouchableOpacity, Button, View, Text} from 'react-native';
import Container from '../Container/Container';

const Products = ({navigation}) => {
  return (
    <Container>
      <View style={styles.productsContainer}>
        <Text>Products</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Products;
