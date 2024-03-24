import { Button } from "frames.js/next";
import { frames } from "../frames";

export const POST = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex h-screen w-full justify-center items-center">
        <div tw="flex">Yayyy! npWinner</div>
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target="/info">
        Info
      </Button>,
      <Button action="post" key="2" target="/play">
        Play Again
      </Button>,
      <Button action="post" key="3" target="/winnersList">
        Winners
      </Button>,
    ],
  };
});
