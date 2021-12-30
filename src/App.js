import React, { useContext, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './shared/Header';
import Main from './pages/Main';
import Shopping from './pages/Shopping';
import Detail from './pages/Detail';
import MyCart from './pages/MyCart';
import DataContext from './shared/DataContext';

function App() {
  let [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <React.Fragment>
      <Header />
      <DataContext.Provider value={cart}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/shopping' component={Shopping} />
          <Route
            exact
            path='/detail/:id'
            render={(props) => (
              <Detail cart={cart} setCart={setCart} {...props} />
            )}
          />
          <Route exact path='/mycart' component={MyCart} />
          <Route component={NotFound} />
        </Switch>
      </DataContext.Provider>
    </React.Fragment>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={{ fontSize: '50px' }}>페이지가 없어요!</div>
    </div>
  );
}

export default App;
