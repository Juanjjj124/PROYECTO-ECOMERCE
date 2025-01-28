import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="content-app">
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;



