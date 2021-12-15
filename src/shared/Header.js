import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div>
      <nav className='navBar'>
        <div className=''>
          <FontAwesomeIcon icon={faUserSecret} color='white' size='2x' />
        </div>
        <ul className='navBar_menu'>
          <li>T-shirt</li>
          <li>Shirt</li>
          <li>Shose</li>
          <li>Etc</li>
        </ul>

        <div>
          <FontAwesomeIcon icon={faShoppingBag} color='white' size='2x' />
        </div>
      </nav>
    </div>
  );
};

export default Header;
