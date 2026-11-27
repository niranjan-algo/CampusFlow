import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (
        <>
          <div>AdminLayout</div>
          <nav>
            <Link to="admin-dashboard"> Admin Dashboard</Link>
            <Link to="settings"> Settings </Link>
            <Link to="manage-equipment"> Manage Equipment </Link>
            <Link to="manage-users"> Manage Users </Link>
            <Link to="reports"> Reports </Link>
          </nav>
          <Outlet/>
        </>
    );
}

export default Adminlayout;