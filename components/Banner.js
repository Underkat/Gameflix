import Image from "next/image";
import { useEffect, useState } from "react";
import { IoGameController, IoInformationCircleOutline } from "react-icons/io5";

const Banner = ({ popular }) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    setGame(popular[Math.floor(Math.random() * popular.length)]);
  }, [popular]);

  // console.log(game);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        {game ? (
          <Image src={`${game.thumbnail}`} layout="fill" objectFit="cover" />
        ) : (
          <Image
            src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>

      <h1 className="text-2xl font-bold lg:text-7xl md:text-4xl transition-all">
        {game ? game.title : "Not Found"}
      </h1>
      <p className="max-w-xs text-shadow-xl text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {game ? game.short_description : "Not Found"}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <IoGameController className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info
          <IoInformationCircleOutline className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
