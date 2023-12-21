import { HiCheck } from "react-icons/hi2";
import PropTypes from "prop-types";

function Card({ cardInfo, selected, onHandleSelected }) {
  const { options } = cardInfo;

  return (
    <div
      className={`border-6 flex flex-1 cursor-pointer flex-col gap-6 rounded-lg border-8 ${
        selected ? "border-teal-400" : "border-gray-700 "
      } py-6`}
      onClick={() => onHandleSelected(cardInfo.type)}
    >
      <h4 className="text-normal text-center font-semibold uppercase text-white">
        {cardInfo.type}
      </h4>
      <div className="flex flex-col gap-4">
        <h1 className="text-center font-serif text-6xl font-bold text-white">
          {options.storage}
        </h1>
        <p className="text-normal text-center font-serif font-semibold">
          1 month, then {options.costPerMonth}/month
        </p>
        <button
          className={`mx-auto w-full max-w-[150px] rounded-lg border border-indigo-600 ${
            selected ? "bg-teal-400 text-blue-950" : "bg-blue-950"
          } p-4 font-semibold transition-colors hover:bg-teal-300 hover:text-blue-950`}
        >
          Purchase
        </button>
      </div>
      <div className="h-[1px] w-full bg-blue-800"></div>
      <div className="flex flex-col items-center gap-3">
        {options.features.map((item, index) => (
          <div
            key={index}
            className="grid max-w-[300px] grid-cols-[15px_max-content] items-center justify-center gap-3"
          >
            <div className="w-full">
              <HiCheck />
            </div>
            <div className="w-full font-serif font-semibold">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  cardInfo: PropTypes.array,
  selected: PropTypes.string,
  onHandleSelected: PropTypes.func,
};
