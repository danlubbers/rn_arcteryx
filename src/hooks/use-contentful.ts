import {useState, useEffect} from 'react';
import {queryProps} from '../utils/contentful-query-props';
import {REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN} from '@dotenv';

const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`;

function useContentful(query: string, slug: string | null) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let mounted = false;

    fetch(graphqlURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
      },
      body: JSON.stringify({query}),
    })
      .then(res => res.json())
      .then(({data}) => {
        if (slug) {
          let filteredProduct = data.arcteryxCollection.items.filter(
            (item: queryProps) => {
              return item.slug === slug;
            },
          );
          setProduct(filteredProduct);
        } else if (!mounted) {
          setProducts(data.arcteryxCollection.items);
        }
      })
      .catch(err => console.error(err));
  }, [query, slug]);

  return {product, products};
}

export default useContentful;
