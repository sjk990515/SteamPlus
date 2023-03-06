import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

interface Game {
  external_games: any;
  id: number;
  name: string;
  background_image: string;
}

const GameSearch = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [games, setGames] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [steamId, setSteamId] = useState<any>();

  const fetchGames = async (): Promise<void> => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=212ed5f02b3040e8a0c27dd8d8f06486&page=${page}&search=${searchTerm}`
    );
    const data = response.data.results as Game[];
    setGames((games: any) => [...games, ...data]);
    // setSteamId((games: any) => [
    //   ...games,
    //   ...data?.map((game) => ({
    //     ...game,
    //     steam_id: game?.external_games.find((g: any) => g?.category === "steam")
    //       ?.uid,
    //   })),
    // ]);
    setPage((page) => page + 1);
  };
  console.log(steamId);
  const aaa = games.filter((i: any) => {
    return i?.stores && i?.stores[0].store.name === "Steam";
  });
  console.log(aaa);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    setGames([]);
    setPage(1);
  };

  useEffect(() => {
    fetchGames();
  }, [searchTerm]);

  // var steam = require("steam-searcher");

  // steam.find({ search: "Hitman 2" }, function (err: any, game: any) {
  //   if (err) console.log(err);
  //   //game is the data as a JSON.
  //   console.log(game.name);
  // });

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />

      <InfiniteScroll
        dataLength={games.length}
        next={fetchGames}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {aaa.map((game: any) => (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt={game.name} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default GameSearch;
