// src/components/Sidebar.jsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Related Programs</h2>
      <ul>
        <li>
          <Link
            href="/programs/related-program-1"
            className="block py-2 hover:bg-gray-200"
          >
            Related Program 1
          </Link>
        </li>
        <li>
          <Link
            href="/programs/related-program-2"
            className="block py-2 hover:bg-gray-200"
          >
            Related Program 2
          </Link>
        </li>
        <li>
          <Link
            href="/programs/related-program-3"
            className="block py-2 hover:bg-gray-200"
          >
            Related Program 3
          </Link>
        </li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-4">Upcoming Events</h2>
      <ul>
        <li>
          <Link href="/events/event-1" className="block py-2 hover:bg-gray-200">
            Event 1
          </Link>
        </li>
        <li>
          <Link href="/events/event-2" className="block py-2 hover:bg-gray-200">
            Event 2
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
