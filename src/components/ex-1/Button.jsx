import { msgIcon } from '../../assets/ex-1/images';

const Button = ({
  isOpen,
  setIsOpen,
  handleOpenMenuAndCounClick,
  isTooltip,
  setIsTooltip,
}) => {
  if (isOpen) {
    return (
      <button
        type="button"
        className={`ex1-close text-white text-4xl rounded-full w-[60px] h-[60px]  flex items-center justify-center ${
          isOpen ? 'self-end' : ''
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        X
      </button>
    );
  } else {
    return (
      <>
        <button
          onClick={handleOpenMenuAndCounClick}
          onMouseEnter={() => setIsTooltip(true)}
          onMouseLeave={() => setIsTooltip(false)}
          type="button"
        >
          <img src={msgIcon} alt="icon" />
        </button>
        <div
          role="tooltip"
          className={`absolute top-1/2 z-10  inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm  dark:bg-gray-700 ${
            isTooltip ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          You can write message from us! Just Click!
        </div>
      </>
    );
  }
};

export default Button;
