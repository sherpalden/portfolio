import PrivateRoute from "../../components/hoc/withPrivateRoute";
import AdminRoute from "../../components/hoc/withAdminRoute";

const Admin = () => {
  return <>Hello from Admin Dashboard</>;
};

export default AdminRoute(PrivateRoute(Admin));
