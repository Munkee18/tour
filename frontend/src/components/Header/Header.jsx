import React from 'react'
import { Container, Row,Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom';

import logo from "../../assets/images/logo.png"
import './header.css'; // Relative path to your CSS file


const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About' 
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const Header = () => {
  return <Header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center 
        justify-content-between" >
          {/* =========== logo =========== */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* =========== logo end=========== */}

          {/* =========== menu start=========== */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item,index)=>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}
                    className={navClass =>
                      navClass.isActive ? "active__link" : ""
                    }
                     >
                      {item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* =========== menu end=========== */}

          <div className="nav__right d-flex align-items-center gap4">
            <div className="nav__ntns d-flex align-items-center gap4">
              <Button className='btn secondary__btn'><Link to='/
              login'>Login</Link></Button>
              <Button className='btn primary__btn'><Link to='/
              register'>Register</Link></Button>
            </div>

            <span className="mobile_menu">
            <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </Header>
};

export default Header;