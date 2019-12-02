import React from 'react';
import Scroll from '../Scroll';

export default function TravelixNavItems({openMenu, toggleMenu}) {
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
                element="travelix-top"
              >
                <a href="/travelix#travelix-top">Travelix Case Study</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="overview"
              >
                <a href="/travelix#overview">Overview</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="branding"
              >
                <a href="/travelix#branding">Branding</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => toggleMenu(!openMenu)}
                type="id"
                element="final"
              >
                <a href="/travelix#final">Final Designs</a>
              </Scroll>
            </li>
          </ul>   
    
    );
}