"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProgramDetailsPage = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch("/programs.json")
        .then((response) => response.json())
        .then((data) => {
          const selectedProgram = data.find((p) => p.id === id);
          if (selectedProgram) {
            setProgram(selectedProgram);
            setError(null);
          } else {
            setError("Program not found.");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching program details:", error);
          setError("Error fetching program details.");
          setLoading(false);
        });
    }
  }, [id]);

  const handleRegister = () => {
    if (isLoggedIn) {
      if (program.registrationStatus === "Not Registered") {
        alert("You are now registered for this program!");
      } else {
        alert("You are already registered for this program.");
      }
    } else {
      alert("Please log in to register.");
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <section className="py-8 bg-gray-100">
      <div className="px-4 md:px-8">
        <div className="relative mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-72 md:h-96">
            <Image
              src={program.banner}
              alt={program.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 transform hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center p-6 text-center">
            <div className="bg-slate-400 rounded-md opacity-90 p-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {program.title}
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-6">
                {program.description}
              </p>
              <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md space-y-2">
                <p className="text-sm md:text-base font-semibold text-gray-800">
                  <strong>Duration:</strong> {program.duration}
                </p>
                <p className="text-sm md:text-base font-semibold text-gray-800">
                  <strong>Location:</strong> {program.location}
                </p>
                <p className="text-sm md:text-base font-semibold text-gray-800">
                  <strong>Application Deadline:</strong> {program.deadline}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Program Details
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Objectives
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {program.objectives.map((objective, index) => (
                  <li key={index} className="text-gray-700">
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Benefits
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {program.requirements.map((requirement, index) => (
                  <li key={index} className="text-gray-700">
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex items-end justify-center">
              <button
                onClick={handleRegister}
                className={`mt-4 py-2 px-6 rounded-lg text-white font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isLoggedIn
                    ? program.registrationStatus === "Registered"
                      ? "bg-green-500 hover:bg-green-600 focus:ring-green-300"
                      : program.registrationStatus === "Not Registered"
                      ? "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
                      : "bg-gray-500 hover:bg-gray-600 focus:ring-gray-300"
                    : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
                }`}
              >
                {isLoggedIn
                  ? program.registrationStatus === "Registered"
                    ? "Already Registered"
                    : program.registrationStatus === "Not Registered"
                    ? "Register Now"
                    : "Pending Registration"
                  : "Login to Enroll"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailsPage;
