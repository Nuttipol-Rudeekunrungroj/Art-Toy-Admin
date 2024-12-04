import { HousePlug, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

function UnauthPage() {
  return (
    <div>
      <Link to="/auth/login" className="flex items-center gap-2">
        <LayoutDashboard className="h-6 w-6" />
        <span className="font-bold">Return to Dashboard</span>
      </Link>
      <h1>You don't have access to view this page</h1>
    </div>
  );
}

export default UnauthPage;
