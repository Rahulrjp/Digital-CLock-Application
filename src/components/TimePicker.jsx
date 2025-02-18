import React, { useState } from "react";
import  Select  from "react-select";

const hours = Array.from({ length: 24 }, (_, i) => ({ label: `${i} hours`, value: i }));
const minutes = Array.from({ length: 60 }, (_, i) => ({ label: `${i} minutes`, value: i }));
const seconds = Array.from({ length: 60 }, (_, i) => ({ label: `${i} seconds`, value: i }));

export default function TimePicker() {
  const [selectedHour, setSelectedHour] = useState(hours[2]);
  const [selectedMinute, setSelectedMinute] = useState(minutes[0]);
  const [selectedSecond, setSelectedSecond] = useState(seconds[0]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="flex space-x-4 bg-gray-800 p-4 rounded-xl shadow-lg">
        <Select
          value={selectedHour}
          onChange={setSelectedHour}
          options={hours}
          className="w-32"
        />
        <Select
          value={selectedMinute}
          onChange={setSelectedMinute}
          options={minutes}
          className="w-32"
        />
        <Select
          value={selectedSecond}
          onChange={setSelectedSecond}
          options={seconds}
          className="w-32"
        />
      </div>
    </div>
  );
}
