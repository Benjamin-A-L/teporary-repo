import * as React from "react"
import { Navbar } from "../components/nav"
import './styles.css'
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section className='hero-section main-section'>
        <h1>Cabrera y Asociados</h1>
      </section>


      <section className='services-section main-section'>
        <h1>Servicios</h1>
        
        <div className="services-container">
          <div>
            <h2>servicio 1</h2>
            <p>egestas quis ipsum. Sed sed risus pretium quam. Turpis egestas sed tempus urna et pharetra. Dolor sit amet consectetur adipiscing. Enim diam vulputate ut pharetra sit. Sed pulvinar proin gravida hendrerit lectus. In hac habitasse platea dictumst vestibulum rhoncus </p>
          </div>
          <div>
            <h2>servicio 2</h2>
            <p>lectus sit amet est. Tincidunt ornare massa eget egestas purus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Turpis massa tincidunt dui ut ornare lectus sit amet est. </p>
          </div>
        </div>
      </section>


      <section className='about-us-section main-section'>
        <div className="about-us-container">
          <h1>Sobre Nosotros</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Non tellus orci ac auctor augue mauris. Faucibus nisl tincidunt eget nullam non nisi est. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Quis vel eros donec ac. Blandit cursus risus at ultrices mi tempus. Ornare quam viverra orci sagittis eu volutpat. Varius quam quisque id diam. A diam sollicitudin tempor id. Commodo ullamcorper a lacus vestibulum sed arcu non.</p>
          <StaticImage src='../images/stock-2.jpg'></StaticImage>
        </div>
      </section>


      <section className='calendly-section'>
        <h1>Contactanos</h1>
        <div className="calendly-responsive-wrapper">
          <Helmet>
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
          </Helmet>
          <div id="calendly-imbed">
            <div className="calendly-inline-widget" data-url="https://calendly.com/holdtml-benjamin/reunion-inicial?primary_color=df7b1e" style={{ minWidth: '320px', height: '92dvh', width: '100%', margin: ' 0px 0px 120px 0px', padding: '0px' }}></div>
          </div>
        </div>
      </section>

      <footer>
        <ul className="social-media-container">
          <li className="li-Instagram"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon className='sm-icon' icon={faInstagram} /> Instagram</a></li>
          <li className="li-Facebook"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon className='sm-icon' icon={faFacebook} /> Facebook</a></li>
          <li className="li-LinkedIn"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon className='sm-icon' icon={faLinkedin} /> LinkedIn</a></li>
        </ul>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
