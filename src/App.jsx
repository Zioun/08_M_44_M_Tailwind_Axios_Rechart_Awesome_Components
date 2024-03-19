import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

function App() {
  const [gold, setGold] = useState([]);
  useEffect(()=>{
    axios.get("Gold.json")
    .then(data => {
      setGold(data.data)
    });
  },[])

  return (
    <div className='flex justify-center h-screen items-center'>
      <LineChart width={1200} height={500} data={gold}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" strokeWidth={1} stroke="#8884d8" />
    </LineChart>
    </div>
  );
}

export default App;
