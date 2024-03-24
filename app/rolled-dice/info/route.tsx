import { Button } from "frames.js/next";
import { frames } from "../frames";

export const POST = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex flex-col h-full w-full p-4">
        <p tw="text-4xl">How to play !</p>
        <p>
          This is Roll The Deice. you can win by rolling the dice or you can be
          one of the lucky who will get reward after the likes are completed
          click on distribute if you feeling lucky it will check if the likes
          goal is completed then you will get a reward.
        </p>
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target="/winnersList">
        Winners 🥇
      </Button>,

      // this can be click after the frame is liked.
      // if likes are complited then we can call this. this will make 3 random people winners.
      <Button action="tx" key="1" target="/">
        Distribute
      </Button>,
      <Button action="post" key="1" target="/play">
        Play 🎲
      </Button>,
    ],
  };
});
