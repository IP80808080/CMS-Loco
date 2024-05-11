import Navbar from "../../Navbar/NavBar";
import SpeedDialTooltipOpen from "../../SpeedDial/AdminSpeedDial";
import { useNavigate } from "react-router-dom";

export default function AUFC() {
  const formNames = [
    "Form 1",
    "Form 2",
    "Form 3",
    "Form 4",
    "Form 5",
    "Form 6",
    "Form 7",
    "Form 8",
  ];

  const navigate = useNavigate();

  const handleCreateNewForm = () => {
    navigate("/admin-dashboard/sectionselection/auxiliary/formCreation");
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center p-4">
        <div
          onClick={handleCreateNewForm}
          className="w-48 h-48 m-2 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors duration-300"
        >
          <span className="text-white font-bold text-xl">Create New Form</span>
        </div>
        {formNames.map((name, index) => (
          <div
            key={index}
            className="w-48 h-48 m-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
          </div>
        ))}
        <SpeedDialTooltipOpen />
      </div>
    </>
  );
}
