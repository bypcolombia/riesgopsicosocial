import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'


export default () => (
  <div>
  <div className="social-container">
  <a href="https://www.facebook.com/bienestaryproductividad/"><img className="img-social" src="/images/facebook.svg" alt="Facebook Bienestar y Productividad"/> </a>
  <a href="https://www.youtube.com/playlist?list=PLya0MpsDrUt20BFwFKPLyoiU5cWSszc4k"><img className="img-social" src="/images/youtube.svg" alt="Youtube Bienestar y Productividad"/> </a>
  <a href="https://instagram.com/bienestaryproductividad/"><img className="img-social" src="/images/instagram.svg" alt="Facebook Bienestar y Productividad"/> </a>
  <a href="https://www.linkedin.com/company/16260312/"><img className="img-social" src="/images/linkedin.svg" alt="Facebook Bienestar y Productividad"/> </a>
  </div>
  <h2 className="taCenter">
      Síguenos en{' '}
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
