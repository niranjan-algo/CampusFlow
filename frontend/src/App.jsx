import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/shared/dashboard";
import BrowseEquipments from "./pages/shared/browse-equipments";
import EquipmentDetails from "./pages/shared/equipment-details";
import BookingPage from "./pages/shared/booking-page";
import MyBookings from "./pages/shared/my-bookings";
import MyProfile from "./pages/shared/my-profile";
import ReportFault from "./pages/shared/report-fault";
import AdminLayout from "./pages/admin/admin-layout";
import AdminDashboard from "./pages/admin/admin-dashboard";
import ManageEquipment from "./pages/admin/manage-equipment";
import ManageUser from "./pages/admin/manage-ruser";
import Reports from "./pages/admin/reports";
import Settings from "./pages/admin/settings";
import ManagerDashboard from "./pages/manager/manager-dashboard";
import IssueEquipments from "./pages/manager/issue-equipments";
import ReturnEquipments from "./pages/manager/return-equipments";
import PendingApprovals from "./pages/manager/pending-approvals";
import FaultReports from "./pages/manager/fault-reports";
import MaintenanceList from "./pages/manager/maintenance-list";
function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/browse-equipments" element={<BrowseEquipments />} />
    <Route path="/equipment-details" element={<EquipmentDetails />} />
    <Route path="/booking" element={<BookingPage />} />
    <Route path="/my-bookings" element={<MyBookings />} />
    <Route path="/my-profile" element={<MyProfile />} />
    <Route path="/report-fault" element={<ReportFault />} />
    <Route path="/admin" element={<AdminLayout />}>
     <Route path="/admin" element={<AdminDashboard />} />
     <Route path="Adminlayout" element={<AdminLayout />} />
     <Route path="admin-dashboard" element={<AdminDashboard />} />
     <Route path="manage-equipment" element={<ManageEquipment />} />
     <Route path="manage-users" element={<ManageUser />} />
     <Route path="reports" element={<Reports />} />
     <Route path="settings" element={<Settings />} />
    </Route>
    <Route path="/manager/dashboard" element={<ManagerDashboard />} />
    <Route path="/manager/issue-equipments" element={<IssueEquipments />} />
    <Route path="/manager/return-equipments" element={<ReturnEquipments />} />
    <Route path="/manager/pending-approvals" element={<PendingApprovals />} />
    <Route path="/manager/fault-reports" element={<FaultReports />} />
    <Route path="/manager/maintenance-list" element={<MaintenanceList />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
