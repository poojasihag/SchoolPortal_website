import { useState, ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { GoSearch } from "react-icons/go";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

// Define the Notice type
interface Notice {
  id: number;
  title: string;
  date: string;
  attachments: number;
  links: number;
  isNew: boolean;
}

const allNotices: Notice[] = [
  {
    id: 2883,
    title: "New the 3D Design Course is Available",
    date: "17 Jan 2024",
    attachments: 1,
    links: 1,
    isNew: true,
  },
  {
    id: 2882,
    title: "Annual Sports Event Registration Open",
    date: "15 Jan 2024",
    attachments: 2,
    links: 0,
    isNew: false,
  },
  {
    id: 2881,
    title: "Library Timing Change Notice",
    date: "12 Jan 2024",
    attachments: 0,
    links: 1,
    isNew: false,
  },
  {
    id: 2880,
    title: "Campus Maintenance Schedule Update",
    date: "10 Jan 2024",
    attachments: 1,
    links: 1,
    isNew: false,
  },
  {
    id: 2879,
    title: "Hostel Room Allotment Updates",
    date: "08 Jan 2024",
    attachments: 2,
    links: 0,
    isNew: false,
  },
  {
    id: 2878,
    title: "Updated Cafeteria Menu Notice",
    date: "06 Jan 2024",
    attachments: 0,
    links: 2,
    isNew: false,
  },
  {
    id: 2877,
    title: "Blood Donation Camp Details",
    date: "04 Jan 2024",
    attachments: 1,
    links: 1,
    isNew: true,
  },
  {
    id: 2876,
    title: "IT Workshop Rescheduled",
    date: "02 Jan 2024",
    attachments: 1,
    links: 0,
    isNew: false,
  },
  {
    id: 2875,
    title: "Winter Holidays Extended",
    date: "31 Dec 2023",
    attachments: 0,
    links: 0,
    isNew: false,
  },
  {
    id: 2874,
    title: "Fee Payment Last Date Reminder",
    date: "29 Dec 2023",
    attachments: 1,
    links: 1,
    isNew: false,
  },
];

export default function NoticeBoard() {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const noticesPerPage = 4;

  const navigate = useNavigate();

  const handleBackClick = () => {
    if (page === 1) {
      navigate("/"); 
    } else {
      setPage((prev) => prev - 1); 
    }
  };

  // Filter notices based on search term (Notice No)
  const filteredNotices: Notice[] = allNotices.filter((notice) =>
    notice.id.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const paginatedNotices = filteredNotices.slice(
    (page - 1) * noticesPerPage,
    page * noticesPerPage
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <header className="flex items-center justify-between flex-wrap gap-4 p-4 bg-white shadow mb-6 relative">
        <SlArrowLeft className="absolute left-4 font-bold  cursor-pointer " 
         onClick={handleBackClick}/>
        <div className="text-2xl font-bold pl-4">Notice Board</div>
      </header>

      {/* Search Input */}
      <div className="w-full mb-4 relative">
        <GoSearch className="absolute left-3 top-2.5" />
        <Input
          placeholder="Search Notice No"
          className="pl-8 border-gray-200"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Notice List */}
      <div className="flex flex-col md:flex-row gap-6">
        <main className="flex-1 grid grid-rows-1 md:grid-rows-2 gap-4">
          {paginatedNotices.length > 0 ? (
            paginatedNotices.map((notice) => (
              <Card key={notice.id} className="p-4 space-y-2 border-0">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">Notice No - {notice.id}</div>
                  <span className="text-sm text-blue-600">{notice.date}</span>
                </div>
                {notice.isNew && (
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5  rounded-full">
                    New
                  </span>
                )}
                <div className="text-gray-800 font-medium">{notice.title}</div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Attachments ({notice.attachments})</span>
                  <span className="text-blue-600">
                    URL Links ({notice.links})
                  </span>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center w-full text-gray-500 mt-4">
              No results found
            </div>
          )}
        </main>
      </div>

      {/* Pagination */}
      {filteredNotices.length > 0 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (num) => (
              <Button
                key={num}
                variant={page === num ? "default" : "outline"}
                onClick={() => setPage(num)}
                className="hover:bg-blue-500 active:bg-blue-600 hover:text-white active:text-white"
              >
                {num}
              </Button>
            )
          )}

          <Button
            variant="outline"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
