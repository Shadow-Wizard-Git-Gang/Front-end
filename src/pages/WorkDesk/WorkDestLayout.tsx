import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { WorkDeskStore } from "./Store/WorkDeskStore";
import { WorkDeskSales } from "./Sales/WorkDeskSales";
import { WorkDeskCompany } from "./Company/WorkDeskCompany";


export const WorkDeskLayout = () => {
    return (
      <div style={{display: "flex"}}>
        <Sidebar />
        <Routes>
          <Route path="/store" element={<WorkDeskStore />} />
          <Route path="/sales" element={<WorkDeskSales />} />
          <Route path="/company" element={<WorkDeskCompany />} />
        </Routes>
      </div>
    );
};