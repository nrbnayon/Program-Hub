"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [sidebarData, setSidebarData] = useState({ upcomingEvents: [] });
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // Fetch programs data
    fetch("/programs.json")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
      });

    // Fetch sidebar data
    fetch("/sidebarData.json")
      .then((response) => response.json())
      .then((data) => {
        setSidebarData(data);
      })
      .catch((error) => {
        console.error("Error fetching sidebar data:", error);
      });
  }, []);

  // Filter upcoming events that are not in the programs list
  const filteredEvents = sidebarData.upcomingEvents.filter(
    (event) => !programs.some((program) => program.title === event.title)
  );

  return (
    <aside className="w-64 bg-gray-100 p-4 hidden md:block">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
        Upcoming Events
      </h2>
      <ul className="space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <li
              key={event.id}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <Link href={event.link}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-xs text-gray-500 mt-1">Date: {event.date}</p>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No upcoming events</p>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
