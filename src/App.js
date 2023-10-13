import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reads from './components/Reads';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="p-4"> {/* Add padding to create space between Navbar and components */}
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route path="/read" element={<Reads />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
