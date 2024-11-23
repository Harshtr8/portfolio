import { useState } from 'preact/hooks';
import { Helmet } from 'react-helmet';
import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Testimonials from './components/testimonials/Testimonials';

export function App() {
  return (
    <>
      <Helmet>
        <title>Harsh Tripathi Portfolio</title>
        <meta name="description" content="I am a MERN stack developer dedicated to creating impactful web applications. Explore my portfolio and projects." />
        <meta name="keywords" content="Harsh, web development, MERN stack, portfolio, projects, React, Node.js, MongoDB, Express" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Harsh Tripathi",
              "url": ""https://harshtr8.netlify.app/"",
              "sameAs": [
                "https://www.linkedin.com/in/harshtr8/",
                "https://github.com/harshtr8",
                 ""https://harshtr8.netlify.app/""
              ],
              "jobTitle": "Fullstack Developer",
              "description": "Harsh is a MERN stack developer dedicated to creating impactful web applications. Explore my portfolio and projects."
            }
          `}
        </script>
      </Helmet>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
