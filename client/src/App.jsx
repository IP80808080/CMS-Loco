/** import all components */
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
// import axios from "axios";
import Update from "./pages/Update.jsx";
import UserHistory from "./pages/UserHistory.jsx";
import Resetpassword from "./pages/Resetpassword.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ModeratorDashboard from "./pages/ModeratorDashboard.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import sectionData from "./components/sectionData.jsx";
import Promotion from "./pages/Promotion.jsx";
import Reverted from "./pages/Reverted.jsx";
import AdminVerify from "./pages/AdminVerify.jsx";
//historypage
import AdminHistory from "./pages/AdminHistory.jsx";
import ModeratorHistory from "./pages/ModeratorHistory.jsx";

//moderator view before approve
import TemplateOCB from "./checklistTemplate/OCB/TemplateOCB.jsx";
import TemplateMRB from "./checklistTemplate/MRB/TemplateMRB.jsx";
import TemplateEMC from "./checklistTemplate/EMC/TemplateEMC.jsx";
import TemplateEnglish from "./checklistTemplate/English/TemplateEnglish.jsx";
import TemplateFDCS from "./checklistTemplate/FDCS/TemplateFDCS.jsx";
import TemplateQD from "./checklistTemplate/QD/TemplateQD.jsx";
import Templateflasher from "./checklistTemplate/flasher/Templateflasher.jsx";
import TemplateVCBSBAREVA from "./checklistTemplate/VCBSBAREVA/TemplateVCBSBAREVA.jsx";
//AdminHistoryTemplate
import AdminHistoryTemplateOCB from "./checklistTemplate/OCB/AdminHistoryTemplateOCB.jsx";
import AdminHistoryTemplateMRB from "./checklistTemplate/MRB/AdminHistoryTemplateMRB.jsx";
import AdminHistoryTemplateEMC from "./checklistTemplate/EMC/AdminHistoryTemplateEMC.jsx";
import AdminHistoryTemplateVCBSBAREVA from "./checklistTemplate/VCBSBAREVA/AdminHistoryTemplateVCBSBAREVA.jsx";
import AdminHistoryTemplateEnglish from "./checklistTemplate/English/AdminHistoryTemplateEnglish.jsx";
import AdminHistoryTemplateFDCS from "./checklistTemplate/FDCS/AdminHistoryTemplateFDCS.jsx";
import AdminHistoryTemplateQD from "./checklistTemplate/QD/AdminHistoryTemplateQD.jsx";
import AdminHistoryTemplateflasher from "./checklistTemplate/flasher/AdminHistoryTemplateflasher.jsx";
//RevertedHistoryInputField
import RevertHistoryInputFieldMRB from "./checklists/Auxiliary/MRB/InputField/RevertHistoryInputFieldMRB.jsx";
import RevertHistoryInputFieldOCB from "./checklists/Auxiliary/OCB/InputField/RevertHistoryInputFieldOCB.jsx";
import RevertHistoryInputFieldEnglish from "./checklists/Electronics/English/InputField/RevertHistoryInputFieldEnglish.jsx";
import RevertHistoryInputFieldFDCS from "./checklists/Electronics/FDCS/InputField/RevertHistoryInputFieldFDCS.jsx";
import RevertHistoryInputFieldQD from "./checklists/Electronics/QD/InputField/RevertHistoryInputFieldQD.jsx";
import RevertHistoryInputFieldflasher from "./checklists/Electronics/flasher/InputField/RevertHistoryInputFieldFLASHER.jsx";
import RevertHistoryInputFieldVCBSBAREVA from "./checklists/Test_Room/VCBSBAREVA/InputField/RevertHistoryInputFieldVCBSBAREVA.jsx";
import RevertHistoryInputFieldEMC from "./checklists/Test_Room/EMC/InputField/RevertHistoryInputFieldEMC.jsx";
//Checklist Summary
import SummaryModeratorDash from "./components/Summary/ModCheckSummary.jsx";
import SummaryDashboard from "./components/Summary/userCheckSummary.jsx";
//FormCreation
import AUFC from "./components/FormCreation/SectionForm/AUFC.jsx";
import BRFC from "./components/FormCreation/SectionForm/BRFC";
import HRFC from "./components/FormCreation/SectionForm/HRFC";
import SFC from "./components/FormCreation/SectionForm/SFC";
import EFC from "./components/FormCreation/SectionForm/EFC";
import PFC from "./components/FormCreation/SectionForm/PFC";
import TRFC from "./components/FormCreation/SectionForm/TRFC";
import TMFC from "./components/FormCreation/SectionForm/TMFC";
import FormCSectionSelection from "./components/FormCreation/FormCSectionSelection.jsx";
import FormCreator from "./components/FormCreation/FormCreator.jsx";

// Import checklist components dynamically
const ChecklistRouter = ({ section, checklistName }) => {
  const ChecklistComponent = lazy(() =>
    import(
      `./checklists/${section}/${checklistName}/InputField/App${checklistName}.jsx`
    )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChecklistComponent />
    </Suspense>
  );
};

function App() {
  const { state } = useAuth();
  const isAuthenticated = state.isAuthenticated;

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* Private */}

        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route
          path="/dashboard/update"
          element={<PrivateRoute element={<Update />} />}
        />
        <Route
          path="/admin-dashboard/update"
          element={<PrivateRoute element={<Update />} />}
        />
        <Route
          path="/admin-dashboard/resetpassword"
          element={<PrivateRoute element={<Resetpassword />} />}
        />
        <Route
          path="/moderator-dashboard/update"
          element={<PrivateRoute element={<Update />} />}
        />
        <Route
          path="/dashboard/reverted"
          element={<PrivateRoute element={<Reverted />} />}
        />
        <Route
          path="/dashboard/history"
          element={<PrivateRoute element={<UserHistory />} />}
        />
        <Route
          path="/admin-dashboard/AdminVerify"
          element={<PrivateRoute element={<AdminVerify />} />}
        />
        <Route
          path="/admin-dashboard/history"
          element={<PrivateRoute element={<AdminHistory />} />}
        />
        <Route
          path="/moderator-dashboard/history"
          element={<PrivateRoute element={<ModeratorHistory />} />}
        />
        <Route
          path="/admin-dashboard/promotion"
          element={<PrivateRoute element={<Promotion />} />}
        />

        {/* Admin and Moderator */}
        <Route
          path="/admin-dashboard"
          element={<PrivateRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/moderator-dashboard"
          element={<PrivateRoute element={<ModeratorDashboard />} />}
        />

        {/* FormCreation */}
        <Route
          path="/admin-dashboard/sectionselection/auxiliary"
          element={<PrivateRoute element={<AUFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/bodyrepair"
          element={<PrivateRoute element={<BRFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/electronics"
          element={<PrivateRoute element={<EFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/heavyrepair"
          element={<PrivateRoute element={<HRFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/pneumatic"
          element={<PrivateRoute element={<PFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/static"
          element={<PrivateRoute element={<SFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/testroom"
          element={<PrivateRoute element={<TRFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/tractionmotor"
          element={<PrivateRoute element={<TMFC />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection"
          element={<PrivateRoute element={<FormCSectionSelection />} />}
        />
        <Route
          path="/admin-dashboard/sectionselection/:section/formCreation"
          element={<PrivateRoute element={<FormCreator />} />}
        />

        {/* Summary Page Moderator and User */}
        <Route
          path="/moderator-dashboard/summary"
          element={<PrivateRoute element={<SummaryModeratorDash />} />}
        />
        <Route
          path="/dashboard/summary"
          element={<PrivateRoute element={<SummaryDashboard />} />}
        />

        {/* Moderator View Checklist */}
        <Route
          path="/moderator-ocb-dashboard/:uid"
          element={<PrivateRoute element={<TemplateOCB />} />}
        />

        <Route
          path="/moderator-mrb-dashboard/:uid"
          element={<PrivateRoute element={<TemplateMRB />} />}
        />

        <Route
          path="/moderator-FDCS-dashboard/:uid"
          element={<PrivateRoute element={<TemplateFDCS />} />}
        />

        <Route
          path="/moderator-QD-dashboard/:uid"
          element={<PrivateRoute element={<TemplateQD />} />}
        />

        <Route
          path="/moderator-English-dashboard/:uid"
          element={<PrivateRoute element={<TemplateEnglish />} />}
        />

        <Route
          path="/moderator-flasher-dashboard/:uid"
          element={<PrivateRoute element={<Templateflasher />} />}
        />

        <Route
          path="/moderator-VCBSBAREVA-dashboard/:uid"
          element={<PrivateRoute element={<TemplateVCBSBAREVA />} />}
        />

        <Route
          path="/moderator-EMC-dashboard/:uid"
          element={<PrivateRoute element={<TemplateEMC />} />}
        />

        {/* Admin History View */}
        <Route
          path="/view-ocb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateOCB />} />}
        />
        <Route
          path="/view-mrb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateMRB />} />}
        />
        <Route
          path="/view-VCBSBAREVA-form/:submittedDate/:uid"
          element={
            <PrivateRoute element={<AdminHistoryTemplateVCBSBAREVA />} />
          }
        />
        <Route
          path="/view-flasher-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateflasher />} />}
        />
        <Route
          path="/view-EMC-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateEMC />} />}
        />
        <Route
          path="/view-FDCS-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateFDCS />} />}
        />
        <Route
          path="/view-QD-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateQD />} />}
        />
        <Route
          path="/view-English-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateEnglish />} />}
        />

        {/* Reverted History View */}
        <Route
          path="/view-revert-ocb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<RevertHistoryInputFieldOCB />} />}
        />
        <Route
          path="/view-revert-mrb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<RevertHistoryInputFieldMRB />} />}
        />
        <Route
          path="/view-revert-QD-form/:submittedDate/:uid"
          element={<PrivateRoute element={<RevertHistoryInputFieldQD />} />}
        />
        <Route
          path="/view-revert-flasher-form/:submittedDate/:uid"
          element={
            <PrivateRoute element={<RevertHistoryInputFieldflasher />} />
          }
        />
        <Route
          path="/view-revert-FDCS-form/:submittedDate/:uid"
          element={<PrivateRoute element={<RevertHistoryInputFieldFDCS />} />}
        />
        <Route
          path="/view-revert-English-form/:submittedDate/:uid"
          element={
            <PrivateRoute element={<RevertHistoryInputFieldEnglish />} />
          }
        />
        <Route
          path="/view-revert-VCBSBAREVA-form/:submittedDate/:uid"
          element={
            <PrivateRoute element={<RevertHistoryInputFieldVCBSBAREVA />} />
          }
        />
        <Route
          path="/view-revert-EMC-form/:submittedDate/:uid"
          element={<PrivateRoute element={<RevertHistoryInputFieldEMC />} />}
        />

        {/* Checklist Routes */}
        {Object.entries(sectionData).map(([section, checklists]) =>
          checklists.map((checklist) => (
            <Route
              key={checklist.checklistName}
              path={`/dashboard/${section}/${checklist.checklistName}`}
              element={
                <PrivateRoute
                  element={
                    <ChecklistRouter
                      section={section}
                      checklistName={checklist.checklistName}
                    />
                  }
                />
              }
            />
          ))
        )}

        {/* Else */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
