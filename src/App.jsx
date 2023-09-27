import { useState, Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
// components/pages
const Home = lazy(() => import('./components/home/Home'));
const PageNotFound = lazy(() =>
  import('./components/page-not-found/ex-2/PageNotFound')
);
const Exercise1 = lazy(() => import('./components/ex-1/Exercise1'));

import Spinner from './components/spinner/Spinner';

function App() {
  const [showExNum, setShowExNum] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setShowExNum(0);
  }, [location.pathname]);

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
      <Suspense fallback={<Spinner />}>
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
          <Route path="/" exact element={<Home />} />
          <Route path="/ex1" element={<Exercise1 />} />
          <Route path="/ex2" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
