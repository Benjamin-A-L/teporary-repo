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
        } else if (entry.target.classList.contains('fade-target')){
          entry.target.classList.add('fade-active', entry.isIntersecting);
        }
        if (!entry.isIntersecting) {
          entry.target.classList.remove('slide-L-on', 'slide-R-on', 'fade-active');
        }
      });
    },{ threshold: 0.7 }); 
  
    const domTargets = [
      ...document.querySelectorAll('.slide-L-target'),
      ...document.querySelectorAll('.slide-R-target'),
      ...document.querySelectorAll('.fade-target'),
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
            <h1>Cabrera & Asociados</h1>
            <p className="header-subtitle">Proteja sus Activos y Negocio con Profesionales</p>
            <button className="header-cta-btn" onClick={()=>scrollTo('.calendly-section')}>llamada</button>
          </div>
        </div>
      </section>


      <section className='services-section'>
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
        <div className="about-us-container fade-target">
          <h1>Sobre Nosotros</h1>
          <p>En Cabrera & Asociados nos preocupamos de que su empresa optimice su información, de acuerdo a las normas Contables, Tributarias y Laborales, para que usted, cuente con la información necesaria requerida por sus dueños, accionistas o socios, también requerida por, Bancos, Proveedores, Clientes, el SII, Dirección del Trabajo, Banco Central y otros organismos, que permiten dar fe de resultados confiables, de gestión en la empresa y de un adecuado cumplimiento legal.
          </p>
          <p className="about-us-p-2">
          Cabrera & Asociados, posee una vasta experiencia asesorando a PYME y Grandes Empresas, en los temas Financieros Contables, Tributarios y Laborales, como son entre otros:
            <br/>
            <br/>
            <ul>
              <li>Actualización y presentación de Estados Financieros.</li>
              <li>Auditorias Financieras. </li>
              <li>Implementar IFRS. </li>
              <li>Iniciación de actividades y término de giro. </li>
              <li>Planificación y Diagnóstico Tributario.</li>
              <li>Diagnósticos de cumplimientos laborales. </li>
              <li>Coaching técnico para su personal.</li>
              <li>Selección, </li>
              <li>Capacitación, control y finiquitos del personal.</li>
            </ul>
          </p>
        <StaticImage className="about-us-image" src='../images/bull.jpg'></StaticImage>
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
        <ul className='locations-container'>
          <h3>Oficinas:</h3>
          <p>Santiago: </p>
          <li>Carmen 110 - 1 cuadra Sii </li>
          <p>Concepción: </p>
          <li>San Martin 42 Poniente Edificio Doña </li>
          <li>Paula Of.305 3er Piso </li>
        </ul>

        <ul className="social-media-container">
          <li className="li-Instagram"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon className='sm-icon' icon={faInstagram} /> Instagram</a></li>
          <li className="li-Facebook"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon className='sm-icon' icon={faFacebook} /> Facebook</a></li>
          <li className="li-LinkedIn"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/ornela_bienestarysalud/"><FontAwesomeIcon className='sm-icon' icon={faLinkedin} /> LinkedIn</a></li>
        </ul>

        <div className='other-contacts'>
          <p>Fono:</p> 
          <p>Santiago:+56 9 5421 2924</p> 
          <p>Concepción:+56 9 8775 2246</p>
          <a type='email' rel="noreferrer" target='_blank' href="https://www.cabrerayasociados.cl">www.cabrerayasociados.cl</a>
          <a type="email" rel="noreferrer" target='_blank' href="mailto:rcabreraasesoria@gmail.com">rcabreraasesoria@gmail.com</a>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
