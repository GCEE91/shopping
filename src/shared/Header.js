import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div>
      <nav className='navBar'>
        <div
          className='navBar_toggleBtn'
          onClick={() => {
            setToggle(!toggle);
          }}>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </div>

        <div
          className='navBar_logo'
          onClick={() => {
            history.push('/');
          }}>
          <FontAwesomeIcon icon={faUserSecret} size='3x' />
        </div>

        <ul className='navBar_menu'>
          <li
            className='navBar_menu_item'
            onClick={() => {
              history.push('/shopping');
            }}>
            Shopping
          </li>
          <li className='navBar_menu_item'>Cart</li>
          <li className='navBar_menu_item'>MyPage</li>

          {login === false ? (
            <li className='navBar_menu_item'>Login</li>
          ) : (
            <li className='navBar_menu_item'>Logout</li>
          )}
          {login === false ? (
            <li className='navBar_menu_item'>SignUp</li>
          ) : null}
        </ul>

        {/* 로그인되면 로그아웃으로 바꿔주고, */}
        {toggle === true ? (
          <ul className='navBar_menu2'>
            <li
              className='navBar_menu_item'
              onClick={() => {
                history.push('/shopping');
              }}>
              Shopping
            </li>
            <li className='navBar_menu_item'>Cart</li>
            <li className='navBar_menu_item'>MyPage</li>
            {login === false ? (
              <li className='navBar_menu_item'>Login</li>
            ) : (
              <li className='navBar_menu_item'>Logout</li>
            )}
            {login === false ? (
              <li className='navBar_menu_item'>SignUp</li>
            ) : null}
          </ul>
        ) : null}

        {/* 반응형 로고 가운데로 놓기위해서 */}
        <div className='navBar_cart'>
          <FontAwesomeIcon icon={faShoppingBag} size='2x' color='black' />
        </div>
      </nav>
    </div>
  );
};

export default Header;
