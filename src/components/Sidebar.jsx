import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64 mr-3 ml-2 rounded-xl bg-slate-100">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
