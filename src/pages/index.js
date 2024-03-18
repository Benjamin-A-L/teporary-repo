import React, { useEffect } from "react"
import { MNavbar, Navbar } from "../components/nav"
import './styles.css'
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll";


const IndexPage = () => {
  
  // Add this function to your Gatsby site, for example in a custom hook or a utility file
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains('slide-L-target')) {
          entry.target.classList.add('slide-L-on', entry.isIntersecting);
        } else if (entry.target.classList.contains('slide-R-target')) {
          entry.target.classList.add('slide-R-on', entry.isIntersecting);
        }
        if (!entry.isIntersecting) {
          entry.target.classList.remove('slide-L-on', 'slide-R-on');
        }
      });
    },{ threshold: 0.7 }); 
  
    const domTargets = [
      ...document.querySelectorAll('.slide-L-target'),
      ...document.querySelectorAll('.slide-R-target'),
    ];
  
    domTargets.forEach((target) => {
      observer.observe(target);
    });
  
    return () => {
      domTargets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);
  

  return (
    <main>
      <Navbar></Navbar>
      <MNavbar></MNavbar>
      <section className='hero-section main-section'>
        <div class="hero-bg-img-container">
          <div class="cta-header-container">
            <h1>Cabrera y Asociados</h1>
            <p className="header-subtitle">Proteja sus Activos y Negocio con Profesionales</p>
            <button className="header-cta-btn" onClick={()=>scrollTo('.calendly-section')}>llamada</button>
          </div>
        </div>
      </section>


      <section className='services-section main-section'>
        <h1>Servicios</h1>
        
        <div className="services-container">
          <div className="slide-L-target">
              <h1>Planificación Tributaria</h1>
              <p>Trabajamos para optimizar y minimizar legalmente su carga tributaria, con una asesoria tributaria y una adecuada planificación que evitará las perdidas por doble tributación, además de la correcta aplicación de los beneficios que les entregan los incentivos y exenciones tributarias aplicadas a las singularidades de su empresa.</p>
          </div>

          <div className="slide-R-target">
              <h1>Asesoria tributaria</h1>
              <p>Cumplir es el primer paso. Asistimos a nuestros clientes en la revisión y/o preparación de sus declaraciones de impuestos anuales y sus respectivas declaraciones juradas, así como también en sus declaraciones de impuestos mensuales, que buscan la correcta presentación y pago de los impuestos resultantes de las operaciones financieras.</p>
          </div>

          <div className="slide-L-target">
              <h1>Acompañamiento Tributario</h1>
              <p>Tener una buena planificación tributaria es fundamental para que los emprendedor puedan tomar decisiones y estas sean las correctas Gran Pyme te acompaña en todo el proceso para que estés tranquilo en tus finanzas. ¡Dale un gran impulso a tu empresa!</p>
          </div>

          <div className="slide-R-target">
              <h1>Normalización Tributaria</h1>
              <p>Podemos ayudarte si dejaste inconclusa las obligaciones con el Servicio de Impuestos Internos (SII) y quieres normalizar tu situación, nos encargamos de la re-construcción de la información contable, la generación de los documentos pendientes y el envío de la información al sitio web del SII.</p>
          </div>
          <div className="slide-L-target">

            <h1>Asesoría Contable</h1>
            <p>Nuestros planes y asesoria contable se ajustan a la medida de tus necesidades como empresa  y de acuerdo a los requerimientos que tengas. Los valores de los planes varían según la cantidad de trabajadores.</p>
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
