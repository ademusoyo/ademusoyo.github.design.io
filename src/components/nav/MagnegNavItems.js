import React from 'react';
import Scroll from '../Scroll';

export default function MagnegNavItems({openMenu, toggleMenu}) {
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
                type="class"
                element="magneg-top"
              >
                <a href="/magneg#magneg-top">Magneg Case Study</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="overview"
              >
                <a href="/magneg#overview">Overview</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="branding"
              >
                <a href="/magneg#branding">Branding</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="final"
              >
                <a href="/magneg#final">Final Designs</a>
              </Scroll>
            </li>
          </ul>   
    
    );
}