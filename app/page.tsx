import Sidebar from "@/components/Sidebar";
import HomeImaginationBloc from "@/components/HomeImaginationBloc";
import StartWorldBloc from "@/components/StartWorldBlocs";
import ExplorLink from "@/components/ExplorLink";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-[#05363B]">
      {/* Background image behind the entire page */}
      <div
        className="fixed inset-0 -z-10 bg-[#05363B] bg-[url('/assets/3ccc7.png')] bg-top bg-no-repeat bg-cover"
        aria-hidden="true"
      />

      <Sidebar />

      <div className="relative ml-20 min-w-0 md:ml-64">
        <HomeImaginationBloc />
        <StartWorldBloc />
        <ExplorLink />
      </div>
    </main>
  );
}
