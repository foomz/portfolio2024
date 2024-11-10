import React from 'react';
import { Shield, Code, Building2, GraduationCap, Award, Briefcase, Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="bg-gray-900 py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Johnray M. De Luna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;