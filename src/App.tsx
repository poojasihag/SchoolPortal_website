import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Academic from "./pages/Academic";
import Calender from "./pages/Calender";
import Communication from "./pages/Communication";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;