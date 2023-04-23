import React from 'react'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import Nav from 'react-bootstrap/Nav';
import logo from '../CartWidget/imagen/lgo1.png'


export const NavBar = () => {

    return (
      <Nav>
        <Nav.Item>
        <Nav.Link href="/"><img src={logo} class="logo1" alt="" /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contador">Contador</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Pika">Pika</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/carreras/carrera">Carreras</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/carreras/curso">Cursos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/"><CartWidget/></Nav.Link>
        </Nav.Item>
      </Nav>
    );
}

