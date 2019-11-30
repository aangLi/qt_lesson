import React from 'react';
import BaseComponent from './BaseComponent'

class Header extends BaseComponent {
  state = { 

  }

  render() { 
    window.c ++;
    return ( 
      <div>
        {this.props.value}
      </div>
    )
  }
}
 
export default Header;