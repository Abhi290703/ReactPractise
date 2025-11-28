import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { teamMembers } from "./Teamdata";   // ✅ FIXED PATH

export default function TeamMemberDetail() {
  const { id } = useParams();               // ✅ FIXED PARAM NAME
  const navigate = useNavigate();

  const member = teamMembers.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center text-gray-500">
          <p>No member found. 😢</p>
          <button
            onClick={() => navigate("/Team")}
            className="mt-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700"
          >
            ⬅ Back to Team
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-white text-sm hover:bg-gray-700"
        >
          ⬅ Back
        </button>

        <div className="bg-gray-50 rounded-xl shadow-md p-6 border">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
            />

            <div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>

              {member.location && (
                <p className="text-sm text-gray-500">{member.location}</p>
              )}
            </div>
          </div>

          <p className="mb-4 text-gray-700">
            {member.bio || member.description || "No description available."}
          </p>

          {member.email && (
            <div className="mb-3">
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-sm text-gray-800">{member.email}</p>
            </div>
          )}

          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <div>
              <h4 className="font-semibold mb-1">Skills</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
