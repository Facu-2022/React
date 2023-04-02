import React from 'react'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
<div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Ecommerce</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Salir</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><CartWidget/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
</div>

)
}
