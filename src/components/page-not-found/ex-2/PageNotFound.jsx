import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className="text-white bg-gradient-to-r from-purple-200 to-pink-500 ">
      <div className="flex flex-col items-center justify-center gap-10 h-[calc(100vh-56px)]">
        <h1 className="text-[120px] leading-none">404</h1>
        <h2 className="text-5xl">Page Not Found</h2>
        <div className="text-center">
          <p>The page you are looking for doesn`t exist or an other</p>
          <p>
            Error occurred. Go to
            <Link to="/">
              {' '}
              <span className="text-indigo-600 underline">Home</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
