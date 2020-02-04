import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../ErrorMessage';
import LoadingSpinner from '../LoadingSpinner';

function List() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:7070/api/services')
      .then((response) => response.json())
      .then((response) => setLinks(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [update]);

  const updateClick = () => {
    setUpdate(update ? false : true);
    setError(false);
  };

  return (
    <div>
      {error ? <ErrorMessage onClick={updateClick} /> : ''}
      {!loading && links && links.length
        ? links.map(({ id, name, price }) => (
            <div key={id}>
              <Link to={`/${id}/details`}>
                <h3>{name}</h3>
                <p style={{ color: 'grey' }}>{price}p</p>
              </Link>
            </div>
          ))
        : ''}
      {loading ? <LoadingSpinner /> : ''}
    </div>
  );
}

export default List;
