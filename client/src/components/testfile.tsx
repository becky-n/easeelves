import React, { useEffect, useState } from 'react';
import { fetchGreeting } from '../test';


const Greeting: React.FC = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetchGreeting().then((data) => setGreeting(data));
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;