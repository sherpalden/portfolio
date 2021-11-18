import AdminRoute from "../../../components/hoc/withAdminRoute";
import PrivateRoute from "../../../components/hoc/withPrivateRoute";

const Company = () => {
  return <>Hello from Company page</>;
};

export default AdminRoute(PrivateRoute(Company));
