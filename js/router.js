import { renderDashboard } from "./dashboard/dashboardHome.js";
import { renderStudents } from "./dashboard/students.js";
import { renderFees } from "./dashboard/fees.js";
import { renderAttendance } from "./dashboard/attendance.js";
import { renderGrades } from "./dashboard/grades.js";
import { renderApplications } from "./dashboard/applications.js";

export function navigate(view) {

  switch(view) {
    case "dashboard":
      renderDashboard();
      break;

    case "students":
      renderStudents();
      break;

    case "fees":
      renderFees();
      break;

    case "attendance":
      renderAttendance();
      break;

    case "grades":
      renderGrades();
      break;

    case "applications":
      renderApplications();
      break;

    default:
      renderDashboard();
  }
}