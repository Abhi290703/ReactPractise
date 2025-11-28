import React from "react";
import { Link, Outlet } from "react-router-dom";
import { teamMembers } from "./Teamdata";


export default function Team() {
  return (
    <section className="py-12 bg-white px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Our Team
      </h2>

      {/* Team cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            to={`/team/${member.id}`}
            className="flex flex-col items-center bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="rounded-full w-28 h-28 object-cover border-4 border-blue-500"
            />
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </Link>
        ))}
      </div>

      {/* Nested route: person full info */}
      <div className="max-w-3xl mx-auto mt-12">
        <Outlet />
      </div>
    </section>
  );
}