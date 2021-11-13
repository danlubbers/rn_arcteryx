import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './SearchProductsStyles';

const SearchProducts = ({
  inputValue,
  setInputValue,
  filteredProductslength,
}) => {
  return (
    <View style={styles.searchProductContainer}>
      <TextInput
        style={styles.inputField}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Ex. Mens Alpha SV"
      />
      <Text style={styles.numOfProductsText}>
        {filteredProductslength} products found!
      </Text>
    </View>
  );
};

export default SearchProducts;
