import { BiX } from 'react-icons/bi';
import { notify } from '../../helpers';

const ShareModal = ({ onClose }) => {
  const url = window.location.href;

  const handleShare = (e) => {
    e.preventDefault();
    notify(true, 'registered-success', `Share success`);
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Share something awesome
            </h3>
            <button onClick={onClose} className="text-2xl">
              <BiX />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              quod?
            </p>
            <form>
              <div className="flex gap-3 justify-between">
                <input
                  type="text"
                  defaultValue={url}
                  placeholder={`Eg. ${url}`}
                  className="text-black text- w-[90%] pl-3"
                />
                <button
                  className="p-3 bg-blue-300 text-white rounded-lg"
                  onClick={handleShare}
                >
                  Share
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <div className="bg-gray-200  dark:bg-gray-600 w-full px-4 py-2">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-semibold">
                Sharing guideness
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quod? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita, commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
