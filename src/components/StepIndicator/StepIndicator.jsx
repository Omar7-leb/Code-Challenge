import "./StepIndicator.css";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Postcode", icon: "📍" },
    { id: 2, label: "Waste Type", icon: "🗑️" },
    { id: 3, label: "Select Skip", icon: "📦" },
    { id: 4, label: "Permit Check", icon: "📋" },
    { id: 5, label: "Choose Date", icon: "📅" },
    { id: 6, label: "Payment", icon: "💳" },
  ];

  return (
    <div className="steps">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`step ${currentStep >= step.id ? "active" : ""}`}
        >
          <div className="step-icon">
            {currentStep > step.id ? "✓" : step.icon}
          </div>
          <span>{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
