import  { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/Calendar";
import EventModal from "@/components/EventModal";
import EventList from "@/components/EventList";

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState(() => {


    //Save to local storage


    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : {};
  });

  const [showModal, setShowModal] = useState(false);



  // change update save on local storeage


  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (date, event) => {
    setEvents((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), event],
    }));
  };

  const editEvent = (date, updatedEvent, index) => {
    setEvents((prev) => {
      const updatedEvents = [...(prev[date] || [])];
      updatedEvents[index] = updatedEvent;
      return { ...prev, [date]: updatedEvents };
    });
  };

  const deleteEvent = (date, index) => {
    setEvents((prev) => {
      const updatedEvents = [...(prev[date] || [])];
      updatedEvents.splice(index, 1);
      return { ...prev, [date]: updatedEvents };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-pink-800 font-serif">Event Calendar</h1>
      <Calendar
        selected={selectedDay}
        onSelect={setSelectedDay}
        mode="single"
      />
      <EventList
        events={events[selectedDay?.toLocaleDateString()] || []}
        onAdd={() => setShowModal(true)}
        onEdit={(index) => setShowModal({ type: "edit", index })}
        onDelete={(index) => deleteEvent(selectedDay?.toLocaleDateString(), index)}
      />
      {showModal && (
        <EventModal
          date={selectedDay?.toLocaleDateString()}
          onClose={() => setShowModal(false)}
          onSave={(event) => {
            addEvent(selectedDay?.toLocaleDateString(), event);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
