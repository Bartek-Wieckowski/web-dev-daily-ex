import PropTypes from "prop-types";

function Card({ data }) {
  const { userName, socialAt, desc, views, rank, downloads, image } = data;

  return (
    <div className="flex items-start gap-6 p-6">
      <img
        src={image}
        alt={userName}
        className="w-full max-w-[100px] rounded-full border-2 border-white"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold text-black">{userName}</h1>
        <h2 className="text-xl font-semibold text-black">{socialAt}</h2>
        <p className="text-sm font-semibold text-black">{desc}</p>
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col text-left text-black">
            <p className="font-serif font-semibold ">{views}M</p>
            <small className="font-semibold">Views</small>
          </div>
          <div className="h-[45px] w-[2px] bg-white"></div>
          <div className="flex flex-col text-left text-black">
            <p className="font-serif font-semibold ">{rank}M</p>
            <small className="font-semibold">Rank</small>
          </div>
          <div className="h-[45px] w-[2px] bg-white"></div>
          <div className="flex flex-col text-left text-black">
            <p className="font-serif font-semibold ">{downloads}M</p>
            <small className="font-semibold">Downloads</small>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="flex-1 rounded-lg bg-white p-4 text-lg font-semibold text-black shadow transition-colors hover:bg-stone-100">
            Follow
          </button>
          <button className="flex-1 rounded-lg bg-white p-4 text-lg font-semibold text-black shadow transition-colors hover:bg-stone-100">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  userName: PropTypes.string,
  socialAt: PropTypes.string,
  desc: PropTypes.string,
  views: PropTypes.number,
  rank: PropTypes.number,
  downloads: PropTypes.number,
  image: PropTypes.string,
};
