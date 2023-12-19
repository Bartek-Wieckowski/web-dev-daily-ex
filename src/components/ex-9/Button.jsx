function Button({ id, label, emoji, disabled, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      disabled={disabled}
      className={`flex cursor-pointer flex-col items-center gap-3 rounded-lg p-3 transition-shadow hover:shadow-xl ${
        selected ? "border border-solid border-gray-300" : ""
      }`}
    >
      <div className="text-4xl">{emoji}</div>
      <p
        className={`text-center text-lg font-bold ${
          selected ? "text-slate-800" : "text-gray-300"
        }`}
      >
        {label}
      </p>
    </button>
  );
}

export default Button;
