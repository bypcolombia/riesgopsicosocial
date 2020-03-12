import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/bienestaryproductividad/">@bienestaryproductividad</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Todos los derechos reservados.  Desarrollada por{' '}
          <a href="mailto:correogary@outlook.com">Gary Pinto</a>.
        </span>
      </div>
    </footer>
  </div>
)
