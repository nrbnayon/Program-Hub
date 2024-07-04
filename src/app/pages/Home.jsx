// pages/index.js
import Header from "../components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">
          Welcome to the Program Details Page
        </h1>
        <Link href="/program-details">
          <a className="text-blue-500 mt-4 inline-block">
            Go to Program Details
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
