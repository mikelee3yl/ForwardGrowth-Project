import React from 'react';
import './Header.css';
import { slide as Menu } from 'react-burger-menu' //https://www.npmjs.com/package/react-burger-menu
import _logo from '../../assets/OrchardGroveLogo.png';
import menuButton from '../../assets/Hamburger_icon.png';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: null,

    };
  }
  componentDidMount() {
    fetch('/api/get_header')
      .then(res => {
        return res.text();
      })
      .then(res => {
        this.setState({
          logo: `data:${res.img.contentType};base64,${Buffer.from(res.img.data).toString('base64')}`
        })
      })
  }

  render() {
    return (
    < div class="wrapper" >
      <div class="header" align="center">
        <a href="/Home"><img src={_logo} width={'100 px'} alt="logo"></img></a>
        <a id="login" href="/login" className="login">Login</a>
      </div>


      <Menu width={'15rem'} customBurgerIcon={<img src={menuButton} />}>
        <a id="home" className="menu-item" href="/" style={{ textDecoration: 'none' }}>Home</a>
        <a id="about" className="menu-item" href="/about" style={{ textDecoration: 'none' }}>About the Team</a>
        <a id="contact" className="menu-item" href="/blog" style={{ textDecoration: 'none' }}>Blog</a>

      </Menu>
    </div >
    );
  };
}

export default Header;
