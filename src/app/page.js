import ProgramCard from "./program/page";
import ProgramOverview from "./../components/ProgramOverview";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto overflow-x-auto">
      <div className="min-h-screen">
        <ProgramOverview />
        <div>
          <ProgramCard />
        </div>
      </div>
    </main>
  );
}
