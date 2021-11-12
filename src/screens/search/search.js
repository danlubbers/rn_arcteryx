import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import styles from './searchStyles';
import SearchProducts from '../../components/SearchProducts/SearchProducts';
import RenderProducts from '../../components/RenderProducts/RenderProducts';
import {GlobalContext} from '../../context/Provider';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';

const Search = ({navigation}) => {
  const {products} = useContentful(query);
  const [inputValue, setInputValue] = useState('');
  const {globalDispatch} = useContext(GlobalContext);

  let filteredProductsArray = [];
  if (inputValue) {
    const filteredProducts = products.filter(item => {
      return inputValue.split(' ').every(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        const productTitle = item.title.replace("'", '').toLowerCase();
        return productTitle.match(regex);
      });
    });
    filteredProductsArray.push(filteredProducts);
  }

  return (
    <View style={styles.searchContainer}>
      <SearchProducts
        inputValue={inputValue}
        setInputValue={text => setInputValue(text)}
      />
      <RenderProducts
        filteredProductsArray={filteredProductsArray[0]}
        navigation={navigation}
        globalDispatch={globalDispatch}
      />
    </View>
  );
};

export default Search;
