import imageIcon from "../../assets/image.svg";

const CardSkeleton = () => {
  return (
    <div className="class-skeleton">
      <div className="p-3 bg-slate-700 w-[280px] h-[460px] rounded-[12px] ">
        {/* image */}
        <div className="flex justify-center items-center h-[320px] w-[256px] rounded-md bg-gray-400 animate-pulse">
          <img src={imageIcon} className="w-20" alt="image svg" />
        </div>
        {/* content */}
        <div className="pt-6">
          <div className="flex flex-col gap-2">
            <div className="bg-gray-400 h-5 w-full rounded-md animate-pulse"></div>
            <div className="bg-gray-400 h-3 w-full rounded-md animate-pulse"></div>
            {/* buttons */}
            <div className="flex gap-4 animate-pulse">
              <div className="bg-gray-400 w-full h-9 mt-2 rounded-md"></div>
              <div className="bg-gray-400 w-full h-9 mt-2 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
