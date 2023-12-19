import { useState, Suspense, lazy, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// components/pages
const Home = lazy(() => import("./components/home/Home"));
const PageNotFound = lazy(
  () => import("./components/page-not-found/ex-2/PageNotFound"),
);
const Exercise1 = lazy(() => import("./components/ex-1/Exercise1"));
const Exercise3 = lazy(() => import("./components/ex-3/Exercise3"));
const Exercise4 = lazy(() => import("./components/ex-4/Exercise4"));
const Exercise5 = lazy(() => import("./components/ex-5/Exercise5"));
const Exercise6 = lazy(() => import("./components/ex-6/Exercise6"));
const Exercise7 = lazy(() => import("./components/ex-7/Exercise7"));
const Exercise8 = lazy(() => import("./components/ex-8/Exercise8"));
const Exercise9 = lazy(() => import("./components/ex-9/Exercise9"));

import Spinner from "./components/spinner/Spinner";

function App() {
  const [showExNum, setShowExNum] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowExNum(0);
    } else {
      const extractedNumber = location.pathname.slice(3);
      setShowExNum(Number(extractedNumber));
    }
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
        <nav className="nav container mx-auto px-6">
          <ul className="flex items-center justify-between p-4">
            <Link
              to={showExNum > 1 ? `ex${showExNum - 1}` : "/"}
              className={`${
                showExNum === 0
                  ? "pointer-events-none cursor-not-allowed opacity-50"
                  : ""
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
          <Route path="/ex3" element={<Exercise3 />} />
          <Route path="/ex4" element={<Exercise4 />} />
          <Route path="/ex5" element={<Exercise5 />} />
          <Route path="/ex6" element={<Exercise6 />} />
          <Route path="/ex7" element={<Exercise7 />} />
          <Route path="/ex8" element={<Exercise8 />} />
          <Route path="/ex9" element={<Exercise9 />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
