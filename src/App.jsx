import { useState, useRef } from "react";
import { gamesForSelect, storeGames } from "./data/games.js"
import { LinkedList } from "./data/linked-list.js";

export default function App() {

  // const gameList = new LinkedList();
  const gameList = useRef(new LinkedList());

  const [yourGames, setYourGames] = useState([]);


  const handleRemove = (data) => {
    console.log(data);
    // to do
  }

  const handleGameInstall = (key) => {
    console.log(key);
    const gameData = storeGames[key];
    console.log(gameData);

    // to do
  }

  const gameButtons = gamesForSelect.map(((game, index) => {
    return (
      <button
        key={index}
        className="bg-slate-300 w-36"
        onClick={() => handleGameInstall(game.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-'))}
      >
        {game}
      </button>
    )
  }));

  const yourGamesList = yourGames.map((game, index) => {
    return (
      <article className="relative" key={game.id}>
        <button
          className="w-6 text-white absolute right-0 drop-shadow-md"
          onClick={() => handleRemove(game)}
        >X</button>
        <img src={game.coverImg} className="w-16 md:w-36 h-16 md:h-36 object-cover" />
        <p className="w-16 md:w-36 text-center font-serif text-xs md:text-base">{game.name}</p>
      </article>
    )
  });

  return (
    <main>
      <section className="mt-8 px-10">
        <h2 className="text-center font-serif text-xl font-semibold">Select a Game for download!</h2>
        <article className="flex flex-wrap gap-3 mt-5 ">
          {gameButtons}
        </article>
      </section>
      <section className="mt-12 flex justify-center h-44 md:h-80">
        <img 
        src="/left_joy-con.png"
        className="h-44 md:h-80"
        />
        <article className="md:h-[98%] mt-2 pt-1 md:pt-5 px-8 w-[22rem] md:w-[40rem] bg-slate-100">
          <h2 className="text-center font-serif text-sm md:text-xl font-semibold">Your Games</h2>
          <section className="mt-2 md:mt-10 flex gap-6 overflow-x-auto h-[145px] md:h-[257px]">
            {yourGamesList}
          </section>
        </article>
        <img src="/right_joy-con.png"
        className="h-44 md:h-80"/>
      </section>
    </main>
  )
}