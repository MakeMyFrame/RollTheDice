import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex">Play</div>
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target="/info">
        Info
      </Button>,
      <Button action="tx" key="2" target="/">
        Roll
      </Button>,
      <Button action="tx" key="3" target="/">
        Entry
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
