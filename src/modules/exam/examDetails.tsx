import DashboardTabs from "@/components/other/tabs";
import ExamsOverview from "./examsOverview";
import ExamsSchedule from "./examsSchedule";

const tabsDetails: any = [
  {
    value: "schedule",
    label: "Schedule",
    component: ExamsSchedule,
  },
  {
    value: "overview",
    label: "Overview",
    component: ExamsOverview,
  },
];

function ExamDetails() {
  return (
    <div className="">
      <DashboardTabs tabs={tabsDetails} className="mt-0" />
    </div>
  );
}

export default ExamDetails;
