import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './shared/Header';
import Main from './pages/Main';
import Shopping from './pages/Shopping';
import Detail from './pages/Detail';
import MyCart from './pages/MyCart';

import theme from './style/theme';
import { CartProvider } from './shared/CartContext';

function App() {
  return (
    <React.Fragment>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/shopping' component={Shopping} />
            <Route exact path='/detail/:id' component={Detail} />
            <Route exact path='/mycart' component={MyCart} />
            <Route component={NotFound} />
          </Switch>
        </ThemeProvider>
      </CartProvider>
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
