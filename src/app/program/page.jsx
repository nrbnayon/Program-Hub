"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProgramCard = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("/programs.json")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
      });
  }, []);

  return (
    <section className="py-6 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-40">
              <Image
                src={program.banner}
                alt={program.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <Link
                href={`/program/${program.id}`}
                className="bg-blue-500 text-white hover:underline btn"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramCard;
