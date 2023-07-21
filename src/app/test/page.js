'use client';

import DashboardForm from '@/components/forms/dashboard/createNewGame';
import { useState } from 'react';

export default function Dashboard() {
  const [date, setDate] = useState();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Sidebar /> */}
      {/* <DashboardForm /> */}
      {/* <DropdownMenuDemo /> */}
      {/* <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      /> */}
      {/* <h1 className="text-9xl font-Formula">Creating A New Event</h1> */}
      {/* <DriverCard /> */}
      <DashboardForm />
    </main>
  );
}
