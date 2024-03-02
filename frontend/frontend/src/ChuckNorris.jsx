import React, { useState, useEffect } from 'react';

function ChuckNorris({ token }) {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const getFact = async () => {
      // Implement fact fetching logic using the token
    };

    getFact();
  }, [token]);

  return (
    <div>
      <p>Chuck Norris Fact: {fact}</p>
    </div>
  );
}

export default ChuckNorris;
