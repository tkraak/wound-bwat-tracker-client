import React from 'react';
import {Link} from 'react-router-dom';
import './top-nav.css';

export default function TopNav (props) {
  return (
    <nav>
      <ul className="top-nav">
        <li>
          <div><Link to={`/`}>Home</Link></div>
        </li>
        <li>
          <div><Link to={`/new`}>New Form</Link></div>
        </li>
        <li>
          <div><Link to={`/forms`}>View All Forms</Link></div>
        </li>
      </ul>
    </nav>
  );
}
