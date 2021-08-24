import React from 'react';
import { useSelector } from 'react-redux';

import { selector } from '../../features/loading';
import logo from './logo.svg';
import './styles.scss';

function Loading() {
  const requestsCount = useSelector(selector);

  if (requestsCount === 0) {
    return null;
  }

  return (
    <div>
      <div className="Loading">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="overlay" />
    </div>
  );
}

export default Loading;
