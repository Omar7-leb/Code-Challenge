import { useState } from "react";
import skipData from "../data/skipData";
import SkipCard from "../components/SkipCard/SkipCard";
import FilterButtons from "../components/FilterButtons/FilterButtons";
import StepIndicator from "../components/StepIndicator/StepIndicator";
import "./SkipSelectionPage.css";

const SkipSelectionPage = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const currentStep = 3;

  const handleSelect = (skip) => {
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  const filteredSkips = skipData.filter((skip) => {
    if (activeFilter === "road") return skip.allowed_on_road;
    if (activeFilter === "heavy") return skip.allows_heavy_waste;
    return true;
  });

  const selectedSkipTotalPrice = selectedSkip
    ? selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)
    : 0;

  return (
    <div className="container">
      <div className="header">
        <h1>Choose Your Skip Size</h1>
        <p>Select the skip size that best suits your needs.</p>
        <StepIndicator currentStep={currentStep} />
      </div>

      <FilterButtons
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="skip-grid">
        {filteredSkips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={() => handleSelect(skip)}
          />
        ))}
      </div>

      <div className="actions">
        {selectedSkip ? (
          <div className="bottom-alert">
            <div className="price-alert">
              <p>
                <strong>{selectedSkip.size} Yard Skip Selected</strong>
              </p>
              <p>Total: £{selectedSkipTotalPrice.toFixed(2)}</p>
              <button className="btn btn-primary">Continue</button>
            </div>
          </div>
        ) : (
          <p>Please select a skip to continue</p>
        )}
      </div>
    </div>
  );
};

export default SkipSelectionPage;
