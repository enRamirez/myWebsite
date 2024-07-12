import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentComponent, setCurrentComponent] = useState('home');

  return (
    <div className="App">
      <NavBar setCurrentComponent={setCurrentComponent} />
      {currentComponent === 'home' && (
        <>
          <Banner setCurrentComponent={setCurrentComponent} />
          <Skills />
          <Projects />
        </>
      )}
      {currentComponent === 'skills' && <Skills />}
      {currentComponent === 'projects' && <Projects />}
      {currentComponent === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';
// import { NavBar } from './components/NavBar';
// import { Banner } from './components/Banner';
// import { Skills } from './components/Skills'
// import { Projects } from './components/Projects'
// import { Footer } from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />
//       <Skills />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }

// export default App;
