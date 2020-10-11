import React from 'react';
import './App.css';
import Aux from '../src/hoc/Aux';
import Projects from '../src/components/Projects/Projects';
import Contact from '../src/components/Contact/Contact';
import WorkExperience from '../src/components/WorkExperience/WorkExperience';
import Profile from '../src/components/Profile/Profile';
import ScrollToTop from '../src/containers/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Aux>
      <ScrollToTop />
      <Profile />
      <WorkExperience />
      <Projects />
      <Contact />
      
    </Aux>
  );
}

export default App;
