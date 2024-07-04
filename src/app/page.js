import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgramOverview from "./components/ProgramOverview";
import ProgramDetails from "./pages/ProgramDetails";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto overflow-x-auto">
      <div className="sticky w-full top-0 z-50 h-20">
        <Header />
      </div>
      <div className="min-h-screen">
        <ProgramOverview />
        <p>Program Hub</p>
        <ProgramDetails />
      </div>
      <Footer />
    </main>
  );
}
