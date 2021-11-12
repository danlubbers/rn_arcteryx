import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './searchStyles';
import SearchProducts from '../../components/SearchProducts/SearchProducts';
import RenderProducts from '../../components/RenderProducts/RenderProducts';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';

const Search = () => {
  const {products} = useContentful(query);
  const [inputValue, setInputValue] = useState('');

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
      <RenderProducts filteredProductsArray={filteredProductsArray[0]} />
    </View>
  );
};

export default Search;
