import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exercise1 from './components/ex-1/Exercise1';

function App() {
  return (
    <section>
      <nav className="nav">
        <ul>
          <li>prev</li>
          <li>next</li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/1" element={<Exercise1 />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
