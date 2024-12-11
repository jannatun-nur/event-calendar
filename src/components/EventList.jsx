import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
function EventList({ events, onAdd, onEdit, onDelete }) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-bold mb-2 text-pink-800">Add your important events</h2>
      <button
        onClick={onAdd}
        className="bg-pink-800  font-semibold text-white px-4 py-2 rounded mb-4
        hover:bg-pink-500"
      >
        Add Event
      </button>
      {events.length === 0 ? (
        <p>No events for this day.</p>
      ) : (
        <ul className="space-y-2">
          {events.map((event, index) => (
            <li
              key={index}
              className=" shadow-xl shadow-pink-400 border border-pink-800 p-4 rounded-lg  columns-1 lg:flex lg:justify-between md:flex md:justify-between items-center"
            >
              <div>
                <p className="font-bold text-pink-800 lg:text-xl">{event.eventName}</p>
                <p className="py-2 font-semibold">
                  {event.startTime} - {event.endTime}
                </p>
                <p className="text-xs text-gray-800">{event.description}</p>
              </div>
              <div className="space-x-6 mt-5">
                <button
                  onClick={() => onEdit(index)}
                  className="text-green-700 lg:ext-2xl text-xl"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-600 lg:ext-2xl text-xl"
                >
                  <FaRegTrashCan />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventList;
