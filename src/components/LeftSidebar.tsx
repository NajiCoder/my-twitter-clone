import Link from "next/link";

import { AiOutlineBell } from "react-icons/ai";
import { BiEnvelope, BiHomeCircle, BiSearch, BiUser } from "react-icons/bi";
import { BsFillBookmarkFill, BsThreeDots, BsTwitter } from "react-icons/bs";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: BiSearch,
  },
  {
    title: "Notifications",
    icon: AiOutlineBell,
  },
  {
    title: "Messages",
    icon: BiEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsFillBookmarkFill,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

export default function LeftSidebar() {
  return (
    <section className="sticky top-0 w-[23%] h-screen flex flex-col justify-between px-6">
      <div className="w-full flex flex-col items-stretch h-full space-y-4 mt-4 text-xl text-white/80">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            href={`/$item.title.toLowerCase()`}
            key={item.title}
            className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-2 py-2 px-6 rounded-3xl hover:text-white"
          >
            <item.icon className="w-6 h-6" />
            {item.title !== "Twitter" && <span>{item.title}</span>}
          </Link>
        ))}
        <button className="bg-primary w-full rounded-full p-4 mt-6 text-center hover:opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="bg-transparent w-full flex items-center justify-between gap-4 rounded-full p-4  mt-6 text-xl text-center hover:opacity-70 transition duration-200">
        <div className="flex gap-5">
          <div className="w-10 h-10 rounded-full bg-slate-300"></div>
          <div className="flex flex-col text-left text-xs text-white">
            <span className="font-semibold">Name</span>
            <span className="">@username</span>
          </div>
        </div>
        <BsThreeDots className="text-slate-300" />
      </button>
    </section>
  );
}
