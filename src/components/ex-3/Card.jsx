import { useEffect, useState } from 'react';

function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

function isLightColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
}

const Card = (card) => {
  const { imgSrc, category, description, author, date, title } = card;
  const [backgroundColor, setBackgroundColor] = useState(generateRandomColor());

  const textColor = isLightColor(backgroundColor) ? 'black' : 'white';

  useEffect(() => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor);
  }, []);

  return (
    <div className="col-span-1 flex flex-col max-w-xs gap-2 mx-auto bg-white shadow-slate-400 shadow-md">
      <img
        src={imgSrc}
        alt={title}
        className="w-[320px] h-[215px] object-cover"
      />
      <div
        className="px-3 py-2 ml-3 max-w-[100px] rounded-3xl flex items-center justify-center text-sm"
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        {category}
      </div>
      <h1 className="px-3 font-semibold text-lg">{title}</h1>
      <p className="px-3 text-sm font-normal">{description}</p>
      <p className="flex mt-auto p-3 text-lg font-semibold">{author}</p>
      <p className="px-3 pb-2 text-sm font-normal">{date}</p>
    </div>
  );
};

export default Card;
