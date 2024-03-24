import { Button } from "frames.js/next";
import { frames } from "../frames";

export const POST = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex">Info Page</div>
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target="/winnersList">
        Winners
      </Button>,

      // this can be click after the frame is liked.
      // if likes are complited then we can call this. this will make 3 random people winners.
      <Button action="tx" key="1" target="/">
        Distribute
      </Button>,
      <Button action="post" key="1" target="/play">
        Play
      </Button>,
    ],
  };
});
