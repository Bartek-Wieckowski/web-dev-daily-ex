import { useState } from 'react';
import { createPortal } from 'react-dom';
import { BiShareAlt } from 'react-icons/bi';
import { ToastContainer } from 'react-toastify';

import ShareModal from './ShareModal';

const Exercise8 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ToastContainer />
      <section className="bg-stone-100 text-black flex flex-col justify-center items-center mx-auto no_scroll">
        <div className="max-w-[500px] w-full mx-auto relative">
          <div className="bg-blue-300 max-w-[400px] w-full h-[400px] mx-auto rounded-full"></div>
          <button
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-indigo-800 text-white rounded-xl px-6 py-4 flex items-center justify-center gap-3 hover:bg-indigo-950 transition-colors"
            onClick={() => setModalOpen(true)}
          >
            <span>
              <BiShareAlt />
            </span>
            <span>Click to share</span>
          </button>
        </div>
        {modalOpen &&
          createPortal(
            <ShareModal onClose={() => setModalOpen(false)} />,
            document.body
          )}
      </section>
    </>
  );
};

export default Exercise8;
