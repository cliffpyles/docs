import { faker } from "@faker-js/faker";
// import * as users from './users';

const { date, lorem } = faker;
const today = new Date();
export const events = [
  {
    id: "event-1",
    name: "Some event",
    description: lorem?.paragraph(),
    date: today?.toISOString(),
  },
  {
    id: "event-2",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-3",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-4",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-5",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-6",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-7",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-8",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-9",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.recent({ days: 60 })?.toISOString(),
  },
  {
    id: "event-10",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
  {
    id: "event-11",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
  {
    id: "event-12",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
  {
    id: "event-13",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
  {
    id: "event-14",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
  {
    id: "event-15",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
  {
    id: "event-16",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
  {
    id: "event-17",
    name: "Some event",
    description: lorem?.paragraph(),
    date: date?.soon({ days: 60 })?.toISOString(),
  },
];

export const timeLabels = [
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
];
