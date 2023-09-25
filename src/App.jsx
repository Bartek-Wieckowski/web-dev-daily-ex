import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exercise1 from './components/ex-1/Exercise1';

function App() {
  return (
    <section>
      <nav className="container px-6 mx-auto nav">
        <ul className="flex items-center justify-between p-4">
          <li>prev</li>
          <li>next</li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/ex1" element={<Exercise1 />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
