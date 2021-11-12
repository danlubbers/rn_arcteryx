import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchProductsStyles';

const SearchProducts = ({inputValue, setInputValue}) => {
  return (
    <View style={styles.searchProductContainer}>
      <TextInput
        style={styles.inputField}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Ex. Mens Alpha SV"
      />
    </View>
  );
};

export default SearchProducts;
