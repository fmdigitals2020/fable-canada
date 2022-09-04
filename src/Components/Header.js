import React,{useState} from 'react'
import {Logo,Search,User,ToggleButton} from "../Imports/ImportImages";
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap';

const Header = (props) => {

  // Mobile Menu Active

  const [navActive, setNavActive] = useState(false);

    return (
      <React.Fragment>
            <header>
              <Container>
              <div className="header-wrapper">
                <div className='toggle-menu'>
                  <div className='toggle' onClick={() => setNavActive(!navActive)}>
                    <img src={ToggleButton}/>
                  </div>
                </div>
                <div className='logo'>
                  <a href=''>
                    <img src={Logo} alt="" />
                  </a>
                </div>
                <div className={`navigation-items ${navActive? 'active' : ''}`}>
                  <ul className='nav'>
                    <li><a href=''>Home</a> </li>
                    <li><a href=''>Club List</a></li>
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>Contact</a></li>
                  </ul>
                </div>
                <div className='search-user'>
                  <a href='' className='search'>
                    <img src={Search}/>
                  </a>
                  <a href='' className='user'>
                    <img src={User}/>
                  </a>
                </div>
              </div>
              </Container>
          </header>
    </React.Fragment>
    )
}

export default Header