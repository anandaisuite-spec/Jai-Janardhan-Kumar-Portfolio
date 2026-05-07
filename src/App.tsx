import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './data/projects';

function App() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div className="bg-ink-900 text-ink-50 min-h-screen">
      <Nav />
      <Hero />
      <Work onOpen={setActive} />
      <Stats />
      <Timeline />
      <Achievements />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}

export default App;
