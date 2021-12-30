import React, { useContext } from 'react';
import DataContext from '../shared/DataContext';

const MyCart = () => {
  let cart = useContext(DataContext);
  console.log(cart);
  return <div>안녕 난 카트야</div>;
};

export default MyCart;
