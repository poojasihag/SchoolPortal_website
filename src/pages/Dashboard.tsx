import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Calendar, BookOpen, CreditCard, Bell, Clipboard, Library, FileText, UserCheck, FilePenLine } from "lucide-react";

export default function Dashboard() {
  const [attendanceMarked, setAttendanceMarked] = useState<boolean>(false);

  const actions = [
    { name: "Inbox", icon: <Mail size={20} /> },
    { name: "Attendance", icon: <UserCheck size={20} /> },
    { name: "Timetable", icon: <Calendar size={20} /> },
    { name: "Fees", icon: <CreditCard size={20} /> },
    { name: "Notice", icon: <Bell size={20} /> },
    { name: "Homework", icon: <Clipboard size={20} /> },
    { name: "eLibrary", icon: <Library size={20} /> },
    { name: "Circular", icon: <FileText size={20} /> },
    { name: "Leave Request", icon: <FilePenLine size={20} /> },
    { name: "Examination", icon: <BookOpen size={20} /> },
  ];

  return (
    <div className="w-full h-screen bg-gray-200 p-0 m-0">
      <header className="flex justify-between items-center bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-blue-600">
          <div className="h-5 w-5 inline-block bg-blue-500"></div>SchoolPortal
        </h1>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
          <Link className="text-gray-700 hover:text-blue-500" to="/academic">Academic</Link>
          <Link className="text-gray-700 hover:text-blue-500" to="/communication">Communication</Link>
          <Link className="text-gray-700 hover:text-blue-500" to="/resources">Resources</Link>
          <Link className="text-gray-700 hover:text-blue-500" to="/calender">Calendar</Link>
        </nav>
      </header>

      <main className="mt-6 p-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Welcome Aman</h2>
          <p className="text-gray-500">Adm. No. 010 | II-A</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-sm font-semibold">Outstanding Fee</h3>
            <p className="text-red-600 text-xl font-bold">₹ 38,062</p>
            <Button className="mt-4 bg-black text-white">Pay Now</Button>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-sm font-semibold">Today's Attendance</h3>
            <p className="text-lg font-semibold">{attendanceMarked ? "Marked" : "Not Marked"}</p>
            <Button className="mt-4 bg-black text-white" onClick={() => setAttendanceMarked(true)}>
              Mark Now
            </Button>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-sm font-semibold">Overall Attendance</h3>
            <p className="text-green-600 text-xl font-bold">100.00%</p>
            <Button className="mt-4 bg-green-600 text-white">View Details</Button>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <div className="grid grid-cols-5 gap-8 mt-4">
            {actions.map((action) => (
              <div key={action.name} className="bg-white p-8 shadow-sm rounded-lg flex flex-col items-center justify-center space-x-2">
                <div className="rounded-full bg-gray-100 p-3">{action.icon}</div>
                <p className="text-gray-700 font-semibold">{action.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className=" text-black flex bg-gray-50 justify-evenly items-center  pt-8 pb-16 mt-5 ">
      <div>
        <h4 className="font-bold">SchoolPortal</h4>
        <p>&copy; 2024 School Portal. All Rights Reserved.</p>
      </div>
      <div>
        <h4 className="font-bold">Quick Links</h4>
        <p>About| Contact| Privacy Policy| Terms of Service</p>
      </div>
      <div>
        <h4 className="font-bold">Contact Us</h4>
        <p>support@schoolportal.com| +91 1234567890</p>
      </div>
      
      
    </footer>
    </div>
  );
}
