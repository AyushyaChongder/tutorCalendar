import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="mx-5 border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
       Create Event
    </button>
  );
}
