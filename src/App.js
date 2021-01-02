import React, { Component } from 'react';
import './App.css';
import Aux from '../src/hoc/Aux';
import Projects from '../src/components/Projects/Projects';
import Contact from '../src/components/Contact/Contact';
import WorkExperience from '../src/components/WorkExperience/WorkExperience';
import Profile from '../src/components/Profile/Profile';
import ScrollToTop from '../src/containers/ScrollToTop/ScrollToTop';
import { Helmet } from "react-helmet";
import axios from './axios';

export default class App extends Component {
  componentDidMount() {
    axios.post('/opened.json', JSON.stringify(new Date().toLocaleString()))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Aux>
        <Helmet>
          <html lang="en" />
          <title>Vineet Bugtani</title>
        </Helmet>
        <ScrollToTop />
        <Profile />
        <WorkExperience />
        <Projects />
        <Contact />

      </Aux>
    );
  }

}

// export default App;
