import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gamecard from "./Gamecard";


const Game = () => {


  const [game, setGame] = useState({});

  const { id } = useParams();

  const games = useLoaderData();

  useEffect(() => {


    const findgame = games?.find((game) => game.id === id);

    setGame(findgame);
  }, [id, games]);


  return (
    <div>
      <Gamecard game={game}></Gamecard>
    </div>
  );
};

export default Game;