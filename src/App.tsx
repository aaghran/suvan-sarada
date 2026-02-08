import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Contact from './pages/Contact';
import MusicProgram from './pages/programs/Music';
import DanceProgram from './pages/programs/Dance';
import AcademicProgram from './pages/programs/Academic';
import HobbyProgram from './pages/programs/Hobby';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/music" element={<MusicProgram />} />
          <Route path="/programs/dance" element={<DanceProgram />} />
          <Route path="/programs/academic" element={<AcademicProgram />} />
          <Route path="/programs/hobby" element={<HobbyProgram />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
