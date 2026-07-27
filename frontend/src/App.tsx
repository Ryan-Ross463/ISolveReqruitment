import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import AboutPage from "./pages/AboutPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Home />} />
        
        {/* About Us Route */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;