import React, { Component } from 'react';
import HomeNavItems from './nav/HomeNavItems';
import MagnegNavItems from './nav/MagnegNavItems';
import TravelixNavItems from './nav/TravelixNavItems';
import SocietyNavItems from './nav/SocietyNavItems';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    return (
      <>
        <a
          onClick={_ => this.toggleMenu(!openMenu)}
          className={`menu-toggle rounded ${openMenu ? 'active' : ''}`}
        >
          {openMenu ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </a>
        <nav id="sidebar-wrapper" className={` ${openMenu ? 'active' : ''}`}>
          {
            this.props.id === 'home' &&
            <HomeNavItems openMenu={this.state.openMenu} toggleMenu={this.toggleMenu}/>
          
          }
          {
            this.props.id === 'magneg' &&
            <MagnegNavItems openMenu={this.state.openMenu} toggleMenu={this.toggleMenu} />
          }
          {
            this.props.id === 'travelix' &&
            <TravelixNavItems openMenu={this.state.openMenu} toggleMenu={this.toggleMenu} />
          }
          {
            this.props.id === 'society' &&
            <SocietyNavItems openMenu={this.state.openMenu} toggleMenu={this.toggleMenu} />
          }
        </nav>
      </>
    );
  }
}
