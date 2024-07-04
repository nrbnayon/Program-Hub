"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const ProgramOverview = () => {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-1 bg-gray-100 overflow-x-hidden">
      <div className="relative mb-8">
        <Slider {...sliderSettings} className="w-full">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={program.banner}
                alt={program.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center p-6 text-center">
                <div className="bg-slate-400 p-2 rounded-md opacity-90">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                    {program.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-900 mb-4 max-w-md">
                    {program.description}
                  </p>
                  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md space-y-2">
                    <p className="text-sm font-semibold text-gray-800">
                      <strong>Duration:</strong> {program.duration}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      <strong>Location:</strong> {program.location}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      <strong>Application Deadline:</strong> {program.deadline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProgramOverview;
