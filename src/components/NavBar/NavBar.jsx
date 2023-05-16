import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import Nav from 'react-bootstrap/Nav';
import logo from '../CartWidget/imagen/lgo1.png'




export const NavBar = () => {

    return (
      <Nav className='navv'>
        <Nav.Item>
        <Link className='link' to="/"><img src={logo} class="logo1" alt="" /></Link>
        </Nav.Item>
        <Nav.Item>
          <Link  className='link' to="/">Inicio</Link>
        </Nav.Item>
        <Nav.Item>
        <Link  className='link' to="/Pika">Pika</Link>
        </Nav.Item>
        <Nav.Item>
        <Link  className='link' to="/carreras/carrera">Carreras</Link>
        </Nav.Item>
        <Nav.Item>
        <Link  className='link' to="/carreras/curso">Cursos</Link>
        </Nav.Item>
        <Nav.Item>
        <Link  className='link' to="/Cart"><CartWidget/></Link>
        </Nav.Item>
      </Nav>
    );
}

