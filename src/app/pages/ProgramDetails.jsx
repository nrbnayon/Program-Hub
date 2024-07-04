import React from "react";
import Sidebar from "../components/Sidebar";

const ProgramDetails = () => {
  return (
    <div>
      <main className="flex flex-col md:flex-row max-w-6xl mx-auto p-6">
        <div className="md:w-2/3">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Program Details</h2>
            <p className="mt-2">
              Detailed description of the program, including objectives,
              benefits, and requirements.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Objective 1</li>
              <li>Objective 2</li>
              <li>Objective 3</li>
            </ul>
          </section>
          <section className="mb-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Register Now
            </button>
          </section>
        </div>
        <Sidebar />
      </main>
    </div>
  );
};

export default ProgramDetails;
