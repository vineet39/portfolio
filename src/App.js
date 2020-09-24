import React from 'react';
import './App.css';
import Aux from '../src/hoc/Aux';
import Projects from '../src/components/Projects/Projects';
import Contact from '../src/components/Contact/Contact';
import WorkExperience from '../src/components/WorkExperience/WorkExperience';
import Profile from '../src/components/Profile/Profile';

function App() {
  return (
    <Aux>
      <Profile />
      <Projects />
      <WorkExperience />
      <Contact />
    </Aux>
  );
}

export default App;
