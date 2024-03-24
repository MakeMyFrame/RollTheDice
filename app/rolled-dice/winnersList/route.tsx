import { Button } from "frames.js/next";
import { frames } from "../frames";

export const POST = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex flex-col h-full w-full p-4 items-center">
        <p>Winners List</p>

        <div tw="flex w-full border-2 border-black">
          <div tw="flex justify-center w-1/2 border-2 border-black bg-slate-200">
            <p>Rolled Winners</p>
          </div>
          <div tw="flex justify-center w-1/2 border-2 border-black bg-slate-200">
            <p>Distributed Winners</p>
          </div>
        </div>

        <div tw="flex w-full border-2 border-black ">
          <div tw="flex justify-center w-1/2 border-2 border-black">
            <p>Sandeep</p>
          </div>
          <div tw="flex justify-center w-1/2 border-2 border-black">
            <p>Shakti</p>
          </div>
        </div>

        <div tw="flex w-full border-2 border-black">
          <div tw="flex justify-center w-1/2 border-2 border-black">
            <p>Akshay</p>
          </div>
          <div tw="flex justify-center w-1/2 border-2 border-black">
            <p>Mulla</p>
          </div>
        </div>
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target="/info">
        Info
      </Button>,
      <Button action="post" key="2" target="/play">
        Play
      </Button>,
    ],
  };
});
