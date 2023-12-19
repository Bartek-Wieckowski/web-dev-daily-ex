import { useState } from "react";
import { createPortal } from "react-dom";
import { BiShareAlt } from "react-icons/bi";
import { ToastContainer } from "react-toastify";

import ShareModal from "./ShareModal";

const Exercise8 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ToastContainer />
      <section className="no_scroll mx-auto flex flex-col items-center justify-center bg-stone-100 text-black">
        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="mx-auto h-[400px] w-full max-w-[400px] rounded-full bg-blue-300"></div>
          <button
            className="absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-3 rounded-xl bg-indigo-800 px-6 py-4 text-white transition-colors hover:bg-indigo-950"
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
            document.body,
          )}
      </section>
    </>
  );
};

export default Exercise8;
