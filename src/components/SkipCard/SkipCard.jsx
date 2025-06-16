import { Calendar, Truck, Check } from "lucide-react";
import "./SkipCard.css";
import image from "../../assets/image.png";

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div
      className={`skip-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(skip)}
    >
      <div className="skip-header">
        <div className="skip-size">{skip.size} Yard Skip</div>
        <div className="skip-price">
          <div className="price-main">£{totalPrice.toFixed(0)}</div>
          <div className="price-vat">Inc. VAT</div>
        </div>
      </div>

      <div className="skip-image">
        <img src={image} />
      </div>

      <div className="skip-info">
        <div className="info-item">
          <Calendar className="info-icon" />
          <span>{skip.hire_period_days} days</span>
        </div>
        {skip.transport_cost && (
          <div className="info-item">
            <Truck className="info-icon" />
            <span>Transport: £{skip.transport_cost}</span>
          </div>
        )}
      </div>

      <div className="skip-features">
        {skip.allowed_on_road && (
          <span className="feature-badge feature-road">Road Legal</span>
        )}
        {skip.allows_heavy_waste && (
          <span className="feature-badge feature-heavy">Heavy Waste</span>
        )}
      </div>

      <button className={`select-button ${isSelected ? "selected" : ""}`}>
        {isSelected ? (
          <>
            <Check size={16} />
            Selected
          </>
        ) : (
          "Select This Skip"
        )}
      </button>
    </div>
  );
};

export default SkipCard;
