import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// components/pages
import Home from './components/home/Home';
import Exercise1 from './components/ex-1/Exercise1';
import PageNotFound from './components/page-not-found/ex-2/PageNotFound';

function App() {
  const [showExNum, setShowExNum] = useState(0);

  const handleClickPrev = () => {
    if (showExNum > 1) {
      setShowExNum(showExNum - 1);
    } else {
      setShowExNum(0);
    }
  };
  const handleClickNext = () => {
    setShowExNum(showExNum + 1);
  };

  return (
    <section>
      <BrowserRouter>
        <nav className="container px-6 mx-auto nav">
          <ul className="flex items-center justify-between p-4">
            <Link
              to={showExNum > 1 ? `ex${showExNum - 1}` : '/'}
              className={`${
                showExNum === 0
                  ? 'opacity-50 cursor-not-allowed pointer-events-none'
                  : ''
              }`}
            >
              <li onClick={() => handleClickPrev()}>prev</li>
            </Link>
            <Link to={`ex${showExNum + 1}`}>
              <li onClick={() => handleClickNext()}>next</li>
            </Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<Exercise1 />} />
          <Route path="/ex2" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
