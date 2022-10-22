import { useEffect } from 'react';
import axios from 'axios';

const Products = () => {

  const fetchData = async () => {
    const response  = await axios.get('https://api.airtable.com/v0/appdpf7By5zmgmYOI/products', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
      }
    });

    console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div></div>
  );
}

export { Products };
