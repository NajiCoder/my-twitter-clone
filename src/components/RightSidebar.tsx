import { BsSearch, BsThreeDots } from "react-icons/bs";

const TRENDING_WORDS = [
  {
    genre: "Politics",
    title: "Obama",
    tweets: 7.234,
  },
  {
    genre: "Sports",
    title: "Leo Messi",
    tweets: 10.234,
  },
  {
    genre: "Sports",
    title: "Leo Messi",
    tweets: 10.234,
  },
  {
    genre: "Sports",
    title: "Penaldo",
    tweets: 4.678,
  },
  {
    genre: "Entertainment",
    title: "Taylor Swift",
    tweets: 101.234,
  },
  {
    genre: "Sports",
    title: "Football",
    tweets: 89.056,
  },
  {
    genre: "Sports",
    title: "Leo Messi",
    tweets: 10.234,
  },
  {
    genre: "Entertainment",
    title: "IU",
    tweets: 134.234,
  },
];

export default function RightSidebar() {
  return (
    <section className="w-[32%] flex flex-col space-y-4 px-2 py-4 border-r-4">
      <div className="w-full bg-[#202327] flex items-center justify-center gap-2 p-2 rounded-full">
        <label htmlFor="Search box">
          <BsSearch className="w-5 h-5 text-gray-500" />
        </label>
        <input
          id="Search box"
          type="text"
          placeholder="Search"
          className="bg-inherit w-full focus:outline-none  caret-slate-50 placeholder:text-gray-500 placeholder:text-md"
        />
      </div>
      <div className="bg-[#191b1c] flex flex-col p-2 gap-3 rounded-2xl">
        <h2 className="text-white text-lg font-bold">Trends for you</h2>
        <div>
          {
            // trends
            TRENDING_WORDS.map((trend) => (
              <div
                key={trend.title}
                className=" w-full flex flex-col mb-3 text-white hover:bg-[#282c30] transition duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-sm">
                      {trend.genre} . Trending
                    </span>
                    <h3>{trend.title}</h3>
                    <span className="text-gray-400 text-sm">
                      {trend.tweets} Tweets
                    </span>
                  </div>
                  <div className="text-gray-400">
                    <BsThreeDots />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div></div>
    </section>
  );
}
