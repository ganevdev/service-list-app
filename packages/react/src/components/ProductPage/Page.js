import React, { useEffect, useState } from 'react';

import ErrorMessage from '../ErrorMessage';
import LoadingSpinner from '../LoadingSpinner';

function ProductPage({ match }) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:7070/api/services/${match.params.id}`)
      .then((response) => response.json())
      .then((response) => setProduct(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [match.params.id, update]);

  const updateClick = () => {
    setUpdate(update ? false : true);
    setError(false);
  };

  // @ts-ignore
  const { name, price, content } = product;
  return (
    <div>
      {error ? <ErrorMessage onClick={updateClick} /> : ''}
      {!error && !loading && product ? (
        <div>
          <h1>{name}</h1>
          <h3 style={{ color: 'grey' }}>{price}p</h3>
          <p>{content}</p>
        </div>
      ) : (
        ''
      )}
      {loading ? <LoadingSpinner /> : ''}
    </div>
  );
}

export default ProductPage;
