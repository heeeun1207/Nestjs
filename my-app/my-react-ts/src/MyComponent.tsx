import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
