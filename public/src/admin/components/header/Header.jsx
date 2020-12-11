import React from 'react';
import './header.css';

export function Header(props) {
    return (
        <div className="header">
          <ul className="navItems">
              {(props.navItems).map((item, index) => {
                  return (
                      <li key={index}>
                          <a href={item.url}>
                              {item.name}
                          </a>
                      </li>
                  )
              })}
            <button onClick={props.onClick}>Logout</button>
          </ul>
        </div>
    );
}