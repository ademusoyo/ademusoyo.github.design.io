import React from 'react';
import Scroll from '../Scroll';

export default function SocietyNavItems({openMenu, toggleMenu}) {
    return(
            <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="/">Design Portfolio</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="/">Home</a>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="society-top"
              >
                <a href="/society#society-top">Society x Tech Case Study</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="overview"
              >
                <a href="/society#overview">Overview</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="branding"
              >
                <a href="/society#branding">Branding</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="final"
              >
                <a href="/society#final">Web Development</a>
              </Scroll>
            </li>
          </ul>   
    
    );
}