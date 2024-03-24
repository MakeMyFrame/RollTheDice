import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex h-full w-full p-4">
        <div tw="w-1/2 bg-green-200 rounded-2xl mr-4 text-5xl font-bold border-2 border-black flex flex-col justify-center items-center">
          10ETH 💰💰
          <p tw="text-4xl ">Winning Prize</p>
        </div>

        <div tw="w-1/2 flex flex-col">
          <div tw="border-2 bg-red-200 rounded-2xl mb-4 h-1/2 border-black flex justify-center items-center ">
            Enter to generate
          </div>

          <div tw="bg-yellow-200 rounded-2xl flex flex-col w-full border-2 border-black">
            <p tw="pl-4">Rolled Number</p>
            <div tw="flex justify-around ">
              <p tw="h-32 w-32 shadow-lg shadow-black flex justify-center items-center  rounded-2xl border-2 border-black">
                4
              </p>
              <p tw="h-32 w-32 shadow-lg shadow-black flex justify-center items-center  rounded-2xl border-2 border-black ">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target="/info">
        Info ℹ️
      </Button>,
      <Button action="post" key="2" target="/winner">
        Roll 🎲
      </Button>,
      <Button action="tx" key="3" target="/">
        Entry
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
