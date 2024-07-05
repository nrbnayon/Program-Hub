// src/components/Registration.js
"use client";

import Link from "next/link";

const Registration = ({ isLoggedIn, enrollmentStatus, onRegister }) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Registration</h2>
        {isLoggedIn ? (
          <>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg"
              onClick={onRegister}
            >
              Register
            </button>
            <p className="mt-2">Status: {enrollmentStatus}</p>
          </>
        ) : (
          <p className="mt-2">
            <Link href="/login">
              <a className="text-blue-500 underline">Log in</a>
            </Link>{" "}
            or{" "}
            <Link href="/register">
              <a className="text-blue-500 underline">register</a>
            </Link>{" "}
            to enroll.
          </p>
        )}
      </div>
    </section>
  );
};

export default Registration;
