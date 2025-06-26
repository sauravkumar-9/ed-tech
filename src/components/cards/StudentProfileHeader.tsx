import React from "react";
import { type StudentProfile } from "@/types/student";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
  UserIcon,
  CalendarIcon,
  PhoneIcon,
  MailIcon,
  IdCardIcon,
  GraduationCapIcon,
  BadgeCheckIcon,
} from "lucide-react"; // Add more icons if needed

const infoCards = [
  {
    icon: <IdCardIcon className="h-4 w-4" />, // Smaller icon
    title: "Register No.",
    value: "REG20250983",
  },
  {
    icon: <GraduationCapIcon className="h-4 w-4" />,
    title: "Department",
    value: "Computer Science",
  },
  {
    icon: <CalendarIcon className="h-4 w-4" />,
    title: "Year",
    value: "3rd Year",
  },
  {
    icon: <PhoneIcon className="h-4 w-4" />,
    title: "Contact",
    value: "9929939993",
  },
  {
    icon: <MailIcon className="h-4 w-4" />,
    title: "Email",
    value: "john.doe@example.com",
  },
];

// import { Button } from "@/components/ui/button";
// import { PencilIcon } from "lucide-react";

interface StudentProfileHeaderProps {
  student: StudentProfile;
}

const StudentProfileHeader: React.FC<StudentProfileHeaderProps> = ({
  student,
}) => {
  return (
    <Card className={cn("gap-6 py-6")}>
      <CardContent>
        {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Student Profile</h2>
          </div>
          <Button variant="outline" className="gap-2">
            <PencilIcon className="h-4 w-4" />
            Edit
          </Button>
        </div> */}

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0">
            <img
              src={student.profileImage || "https://github.com/shadcn.png"}
              alt={student.name}
              className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
            />
          </div>
          <div>
            {/* <h3 className="text-sm text-gray-500 mb-1">Name</h3> */}
            <h2 className="text-2xl font-semibold mb-4">{student.name}</h2>
            <div className="flex flex-wrap gap-9">
              {infoCards.map((card, index) => (
                <InfoCard
                  key={index}
                  icon={
                    <div className="bg-purple-100 p-2 rounded-full">
                      {card.icon}
                    </div>
                  }
                  title={card.title}
                  value={card.value}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentProfileHeader;

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
};

// const UserIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#7E69AB"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//     <circle cx="12" cy="7" r="4"></circle>
//   </svg>
// );

// const CalendarIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#7E69AB"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//     <line x1="16" y1="2" x2="16" y2="6"></line>
//     <line x1="8" y1="2" x2="8" y2="6"></line>
//     <line x1="3" y1="10" x2="21" y2="10"></line>
//   </svg>
// );

// const IDCardIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#7E69AB"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="3" y="4" width="18" height="16" rx="2"></rect>
//     <path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
//     <path d="M15 8h2"></path>
//     <path d="M15 12h2"></path>
//     <path d="M7 16h10"></path>
//   </svg>
// );

// const PhoneIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#7E69AB"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//   </svg>
// );

// const MailIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#7E69AB"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//     <polyline points="22,6 12,13 2,6"></polyline>
//   </svg>
// );
