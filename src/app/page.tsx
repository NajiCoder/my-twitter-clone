import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MainComponent from "../components/MainComponent";

export default function Home() {
  // const supabasePassword = T6zfyjMcjCYE66ai

  return (
    <main className=" bg-black w-full h-full flex items-center justify-center">
      <div className="max-w-[85vw] w-full h-full flex justify-center">
        {/* left sidebar for navigation */}
        <LeftSidebar />
        {/* Infinite content scroll */}
        <MainComponent />
        {/* right sidebar for profile */}
        <RightSidebar />
      </div>
    </main>

    // <div className="w-full bg-rose-400">Hello world</div>
  );
}
