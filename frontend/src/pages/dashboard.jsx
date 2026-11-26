import { useLocation } from "react-router-dom";
function Dashboard() {
  const location = useLocation();
  const userdata = location.state;
  return (
    <div className="text-center">
      <p className="text-5xl font-bold">Welcome Back!</p>
      <br />
      <p className="text-4xl">Manage your campus resources easily</p>
      </div>
  );
}
export default Dashboard;
