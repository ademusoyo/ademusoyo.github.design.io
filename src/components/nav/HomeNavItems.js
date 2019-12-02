import React from 'react';
import Scroll from '../Scroll'

export default function HomeNavItems({openMenu, toggleMenu}) {
    return(
        <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <a href="/#page-top">Design Portfolio</a>
        </li>
        <li className="sidebar-nav-item">
          <Scroll
            onClick={_ => toggleMenu(!openMenu)}
            type="class"
            element="page-top"
          >
            <a href="/#page-top">Home</a>
          </Scroll>
        </li>
        <li className="sidebar-nav-item">
          <Scroll
            onClick={_ => toggleMenu(!openMenu)}
            type="id"
            element="about"
          >
            <a href="#about">About Me</a>
          </Scroll>
        </li>
        <li className="sidebar-nav-item">
          <Scroll
            onClick={_ => toggleMenu(!openMenu)}
            type="id"
            element="services"
          >
            <a href="#services">Services</a>
          </Scroll>
        </li>
        <li className="sidebar-nav-item">
          <Scroll
            onClick={_ => toggleMenu(!openMenu)}
            type="id"
            element="process"
          >
            <a href="#process">Process</a>
          </Scroll>
        </li>
        <li className="sidebar-nav-item">
          <Scroll
            onClick={_ => toggleMenu(!openMenu)}
            type="id"
            element="portfolio"
          >
            <a href="#portfolio">Portfolio</a>
          </Scroll>
        </li>
      </ul>   
    );
}