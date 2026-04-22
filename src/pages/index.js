import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Data Engineer Portfolio</title>
    <meta name="description" content="Data Engineer Portfolio showcasing data pipelines, architectures, and cloud solutions" />
  </>
);
