import { Truck, Shield } from "lucide-react";
import "./FilterButtons.css";

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: "all", label: "All Sizes", icon: null },
    { id: "road", label: "Road Legal", icon: <Truck className="info-icon" /> },
    {
      id: "heavy",
      label: "Heavy Waste",
      icon: <Shield className="info-icon" />,
    },
  ];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-button ${
            activeFilter === filter.id ? "active" : ""
          }`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.icon}
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
