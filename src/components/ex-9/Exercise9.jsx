import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";
import { createPortal } from "react-dom";
import ThanksModal from "./ThanksModal";

function Exercise9() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showWindow, setShowWindow] = useState(false);

  const buttons = [
    { id: 1, emoji: "😥", label: "Unhappy" },
    { id: 2, emoji: "😑", label: "Neutral" },
    { id: 3, emoji: "😁", label: "Satisfied" },
  ];
  const hiddenClass = "hidden";

  function handleButtonClick(buttonId) {
    if (selectedButton === null) {
      setSelectedButton(buttonId);
    }
  }

  function handleCloseWindow() {
    setShowWindow(true);
  }

  return (
    <section className="relative grid h-screen place-items-center bg-stone-100">
      <div
        className={`z-0 w-full max-w-[500px] rounded-lg bg-white shadow-lg ${
          showWindow ? hiddenClass : ""
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="ml-auto p-4">
            <HiMiniXMark
              className="cursor-pointer text-3xl font-bold text-gray-500"
              onClick={handleCloseWindow}
            />
          </div>
          <p className="mx-auto mb-6 w-full max-w-[350px] text-center font-bold text-slate-800">
            How satisfied are you with webdevdaily`s customer support
            performance
          </p>
          <div className="flex justify-around">
            {buttons.map((button) => (
              <Button
                key={button.id}
                id={button.id}
                emoji={button.emoji}
                label={button.label}
                onClick={handleButtonClick}
                selected={selectedButton === button.id}
                disabled={
                  selectedButton !== null && selectedButton !== button.id
                }
              />
            ))}
          </div>
          <div className="mx-auto my-6 w-full max-w-[150px]">
            <button
              className="block w-full rounded-md bg-slate-900 px-6 py-3 text-center capitalize text-white transition-colors hover:bg-slate-600"
              onClick={handleCloseWindow}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {selectedButton && createPortal(<ThanksModal />, document.body)}
    </section>
  );
}

export default Exercise9;
