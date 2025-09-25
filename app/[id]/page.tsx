"use client";

import { AllEvents } from "@/lib/generateEvents";


import { useParams } from "next/navigation";

import React, {  useState } from "react";


function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const [attendanceShow, setAttendanceShow] = useState<boolean>(false);

  const selectedEvent = AllEvents.find((eventFind) => eventFind.id === id);

  if (!selectedEvent) {
    return (
      <div className="mx-16 mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow">
        <p className="text-red-600 font-semibold text-center">
          ⚠️ Event not found
        </p>
      </div>
    );
  }

  return (
    <div className="mx-16  mt-10 bg-white shadow-lg rounded-xl overflow-hidden border">
      <div className="bg-indigo-600 text-white px-6 py-4">
        <h1 className="text-xl font-bold">{selectedEvent.name}</h1>
        <p className="text-sm opacity-80">{selectedEvent.type}</p>
      </div>

      <div className="p-6 space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">📌 ID:</span> {selectedEvent.id}
        </p>
        <p>
          <span className="font-semibold">📅 Date:</span> {selectedEvent.date}
        </p>
        <p>
          <span className="font-semibold">📍 Location:</span>{" "}
          {selectedEvent.location}
        </p>
        <p>
          <span className="font-semibold">👥 Attendees:</span>{" "}
          {selectedEvent.attendeeCount}
        </p>

        <button
          className="bg-black text-white p-4 rounded-2xl"
          onClick={() => setAttendanceShow(!attendanceShow)}
        >
          {" "}
          Show Attendence{" "}
        </button>

        
      </div>
    </div>
  );
}

export default EventDetail;
