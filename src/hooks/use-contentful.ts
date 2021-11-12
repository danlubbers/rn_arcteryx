import {useState, useEffect} from 'react';
import {REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN} from '@dotenv';

const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`;

function useContentful(query: string) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
        setProducts(data.arcteryxCollection.items);
      })
      .catch(err => console.error(err));
  }, [query]);

  return {products};
}

export default useContentful;
