import React, { useEffect, useState } from 'react';

interface Record {
  id: number;
  name: string;
}

function App() {
  const [data, setData] = useState<Record[]>([]);
const [error, setError] = useState<string | null>(null);

  
useEffect(() => {
  fetch('http://127.0.0.1:8000/api/records/')
    .then(response => response.json())
    .then(data => {
      // Transform data if needed
      const formattedData = data.map((item: any) => ({
        id: item.id,
        name: item.name
      }));
      setData(formattedData);
      setError(null);
    })
    .catch(error => {
      setError(error.message);
      setData([]);
    });
}, []);

  

return (
  <div>
    <h1>Records</h1>
    {error ? (
      <p>Error: {error}</p>
    ) : (
      <>
        <p>Data: {JSON.stringify(data)}</p> {/* Display data for debugging */}
        <ul>
          {data.length === 0 ? (
            <li>No records found</li>
          ) : (
            data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))
          )}
        </ul>
      </>
    )}
  </div>
);

}

export default App;
