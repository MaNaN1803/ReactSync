import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Home from './Components/Home';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import Users from './Components/Users';

// Lazy load About component
const AboutLazy = React.lazy(() => import('./Components/About'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1 className='text-black bg-black'>Home</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feature' element={<Feature />} />
          {/* Use Suspense to display a loading indicator while About is loading */}
          <Route
            path='/about'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AboutLazy />
              </Suspense>
            }
          />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
