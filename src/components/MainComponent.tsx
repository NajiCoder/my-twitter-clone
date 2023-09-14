import { AiOutlineHeart } from "react-icons/ai";

import { FaRegComment, FaRetweet } from "react-icons/fa";
import { BiUpload } from "react-icons/bi";
import { RxBarChart } from "react-icons/rx";

export default function MainComponent() {
  return (
    <main className="w-[45%] h-full min-h-screen flex flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="bg-black/10 backdrop-blur sticky top-0 text-white text-xl font-bold p-6">
        Home
      </h1>
      <div className="relative border-t-[0.5px] border-b-[0.5px] border-gray-600">
        {/* Avatar */}

        <div className="w-10 h-10 rounded-full bg-slate-300 m-2"></div>

        <div className="flex flex-col pt-5 px-5 text-white">
          <div className="border-b-[0.5px] border-gray-600 mb-2">
            <input
              type="text"
              placeholder="What's happening"
              className="w-full h-full placeholder:text-gray-300 placeholder:text-xl bg-transparent mb-4 outline-none border-none"
            />
          </div>
          <div className="w-full flex items-center justify-between mb-2">
            <div className="flex items-center justify-between gap-4">
              {/* later */}
            </div>
            <div className="w-full max-w-[100px]">
              <button className="bg-primary w-full rounded-full px-4 py-2 text-center text-lg font-semibold hover:opacity-70 transition duration-200">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full">
        {
          // tweets
          Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-3 py-2 px-3 border-b-[0.5px] border-gray-600"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              </div>
              <div className="flex flex-col gap-1 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">Jane</span>
                  <span className="text-gray-400">@janeDoe</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-400">1h</span>
                </div>
                <div className="text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium incidunt dolor sequi. Quidem non minima, cum sed
                  perferendis officia nesciunt, doloribus dolorem ratione
                  aperiam, odio aut vitae aliquid qui eos.
                </div>
                <div className="bg-slate-400 w-full h-96 aspect-square rounded-xl mt-2"></div>
                <div className="flex items-center justify-between gap-4 mt-2 text-blue-300">
                  <div className="flex items-center gap-2">
                    <FaRegComment />
                    <span>1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRetweet className="hover:scale-110" />
                    <span>1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineHeart />
                    <span>45</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RxBarChart />
                    <span>145</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiUpload />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
