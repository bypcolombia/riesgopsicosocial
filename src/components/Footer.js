import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'


export default () => (
  <div>
  <div className="social-container">
  <a href="https://api.whatsapp.com/send?phone=573015103946"><img className="img-social" src="/images/whatsapp.svg" alt="Whatsapp Bienestar y Productividad"/> </a>
  <a href="https://www.facebook.com/bienestaryproductividad/"><img className="img-social" src="/images/facebook.svg" alt="Facebook Bienestar y Productividad"/> </a>
  <a href="https://www.youtube.com/playlist?list=PLya0MpsDrUt20BFwFKPLyoiU5cWSszc4k"><img className="img-social" src="/images/youtube.svg" alt="Youtube Bienestar y Productividad"/> </a>
  <a href="https://instagram.com/bienestaryproductividad/"><img className="img-social" src="/images/instagram.svg" alt="Instagram Bienestar y Productividad"/> </a>
  <a href="https://www.linkedin.com/company/16260312/"><img className="img-social" src="/images/linkedin.svg" alt="Instagram Bienestar y Productividad"/> </a>
  </div>
  <h3 className="taCenter">
      Visítanos en {' '}
      <a href="https://bienestaryproductividad.com.co" target="_blank" rel="noopener"> www.bienestaryproductividad.com.co</a>
    </h3>
  <h3 className="taCenter">
      Síguenos en{' '}
      <a href="https://instagram.com/bienestaryproductividadsas/" target="_blank" rel="noopener"> @bienestaryproductividadsas</a>
    </h3>
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
