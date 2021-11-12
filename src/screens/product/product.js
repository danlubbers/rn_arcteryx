import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './productStyles';
import {GlobalContext} from '../../context/Provider';
import RenderProduct from '../../components/RenderProduct/RenderProduct';

const Product = () => {
  const {globalState} = useContext(GlobalContext);
  const [heroImage, setHeroImage] = useState('');
  const [color, setColor] = useState('');
  const productObj = globalState.filteredProduct;

  const image = heroImage || productObj.imagesCollection.items[0].url;
  const description = productObj.description.json.content[0].content[0].value;
  const price = productObj.price;

  useEffect(() => {
    setHeroImage(productObj.imagesCollection.items[0].url);
    setColor(productObj.imagesCollection.items[0].description);
  }, [productObj.imagesCollection.items]);

  const changeColor = productDescription => {
    const filteredHero = productObj.imagesCollection.items
      .filter(heroProduct => heroProduct.title.includes('hero'))
      .filter(item => item.description === productDescription);

    setColor(filteredHero[0].description);
    setHeroImage(filteredHero[0].url);
  };

  const thumbnailImages =
    productObj &&
    productObj.imagesCollection.items
      .filter(product => {
        return product.title.includes('thumbnail');
      })
      .map(product => {
        return product;
      });

  return (
    <View style={styles.productsContainer}>
      <RenderProduct
        image={image}
        description={description}
        price={price}
        color={color}
        changeColor={changeColor}
        thumbnailImages={thumbnailImages}
      />
    </View>
  );
};

export default Product;
