import bookmarkIcon from "../assets/bookmark.svg";
import shareIcon from "../assets/share.svg";
import viewIcon from "../assets/view.svg";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, rating, url, name, isRecommended = false}) => {
  return (
    <div className="card">
      <div className="flex flex-col p-3 bg-slate-700 w-[280px] h-[460px] rounded-[12px]">
        {/* image and floating button */}
        <div className="h-[320px] relative overflow-hidden rounded-md">
          <div className="absolute right-0 top-0 z-10">
            <div className="flex flex-col text-end gap-1">
              {isRecommended && (
                <p className="bg-red-700 text-[12px] text-white px-2 py-[2px] rounded-md">
                  Recommended
                </p>
              )}
              <p className="text-white pr-2">
                <span className="bg-green-500 text-[12px] px-2 py-[2px] rounded-md">
                  {rating || "0"}
                </span>
              </p>
              <div className="flex justify-end pr-1 pt-1 ">
                <button>
                  <img className="w-6" src={shareIcon} alt="share" />
                </button>
              </div>
            </div>
          </div>
          <img
            src={url}
            className="w-full object-cover hover:scale-105 transition-all duration-200 "
            alt={name}
          />
        </div>
        {/* content */}
        <div className="pt-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-green-500 text-xl font-bold truncate ">
              {title}
            </h2>
            <p className="text-sm text-gray-200 truncate">{description}</p>
            {/* buttons */}
            <div className="flex gap-4">
              <button className="flex justify-center items-center bg-green-500 w-full text-white px-2 py-1 mt-2 rounded-md hover:bg-green-400 transition-all duration-200">
                View{" "}
                <span>
                  <img className="w-5 ml-2" src={viewIcon} alt="view" />
                </span>
              </button>
              <button className="flex justify-center items-center border-2 border-green-300 w-full text-white px-2 py-1 mt-2 rounded-md hover:border-green-500 transition-all duration-150">
                Bookmark{" "}
                <span>
                  <img className="w-5 ml-1" src={bookmarkIcon} alt="bookmark" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
