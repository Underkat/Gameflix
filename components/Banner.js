import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = ({ popular }) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    setGame(popular[Math.floor(Math.random() * popular.length)]);
  }, [popular]);

  console.log(game);

  return (
    <div>
      <div>{/* <Image  height={100} width={100}/> */}</div>
    </div>
  );
};

export default Banner;
