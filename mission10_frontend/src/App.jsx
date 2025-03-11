import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import BowlerList from './BowlerList';

function App() {
  const [bowlerData, setBowlerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBowlerData = async () => {
      try {
        // Fetch only bowlers from Marlins and Sharks teams
        const response = await axios.get('http://localhost:5149/bowling/filter');
        setBowlerData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data: ' + err.message);
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchBowlerData();
  }, []);

  if (loading) {
    return <div className="container text-center mt-5"><h2>Loading...</h2></div>;
  }

  if (error) {
    return <div className="container text-center mt-5 text-danger"><h2>{error}</h2></div>;
  }

  return (
    <div className="container">
      <Header />
      <BowlerList bowlers={bowlerData} />
    </div>
  );
}

export default App;
