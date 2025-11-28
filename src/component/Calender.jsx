import React, { useState } from "react";

export default function Calender() {
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  const changeMonth = (direction) => {
    if (direction === "next") {
      setCurrentMonth((prev) => {
        if (prev === 11) {
          setCurrentYear((y) => y + 1);
          return 0;
        }
        return prev + 1;
      });
    } else {
      setCurrentMonth((prev) => {
        if (prev === 0) {
          setCurrentYear((y) => y - 1);
          return 11;
        }
        return prev - 1;
      });
    }
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold text-indigo-600">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => changeMonth("prev")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Prev
        </button>
        <button
          onClick={() => changeMonth("next")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Next
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-700 mb-2">
        {daysInWeek.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Empty spaces for start offset */}
        {Array(firstDay)
          .fill(null)
          .map((_, idx) => (
            <div key={idx}></div>
          ))}

        {/* Actual Dates */}
        {Array.from({ length: lastDate }, (_, i) => {
          const day = i + 1;

          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();

          return (
            <div
              key={day}
              className={`p-2 rounded-md border cursor-pointer transition ${
                isToday
                  ? "bg-indigo-600 text-white font-bold border-indigo-600"
                  : "bg-gray-100 hover:bg-indigo-200 border-gray-300"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
