import { useState } from "react";

function EventModal({ date, onClose, onSave }) {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (startTime >= endTime) {
      alert("Start time must be before end time!");
      return;
    }
    onSave({ eventName, startTime, endTime, description });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 shadow-pink-800 shadow-lg ">
        <h2 className="text-lg font-bold mb-4 text-pink-800 text-center font-serif">Add Event</h2>
        <p className="mb-2 text-pink-800 font-bold">Date: {date}</p>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full p-2 mb-2 border border-pink-800 rounded-md"
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full border p-2 mb-2 border-pink-800 rounded-md"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full border p-2 mb-2 border-pink-800 rounded-md"
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 mb-4 border-pink-800 rounded-md"
        ></textarea>
        <button
          onClick={handleSave}
          className="bg-pink-800 text-white px-4 py-2 rounded mr-2 font-serif"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-pink-800 px-4 py-2 rounded  font-serif"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EventModal;
