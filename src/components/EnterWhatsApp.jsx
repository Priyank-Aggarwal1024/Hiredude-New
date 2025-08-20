import { useState } from "react";
import Button from "./common/Button";
import "../styles/whatsappModal.css";
import { cancel, phone } from "../assets";

function EnterWhatsApp({ onCancel, onContinue }) {
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value.replace(/\D/g, ""));
  };

  return (
    <div className="hiredude-whatsapp">
      <div className="hiredude-whatsapp-container">
        <div className="hiredude-whatsapp-box">
          <div className="hiredude-whatsapp-icon">
            <img src={phone} alt="mobile" />
            <img
              src={cancel}
              alt="cancel"
              style={{ width: "14px", height: "14px", cursor: "pointer" }}
              onClick={onCancel}
            />
          </div>
          <div className="hiredude-whatsapp-texts">
            <div className="hiredude-whatsapp-title">
              Continue with Whatsapp
            </div>
            <div className="hiredude-whatsapp-subtitle">
              Sign in or sign up with your whatsapp number.
            </div>
          </div>
          <div className="hiredude-whatsapp-input-wrapper">
            <div className="hiredude-whatsapp-input">
              <span className="hiredude-whatsapp-prefix">+91</span>
              <input
                type="tel"
                value={number}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="hiredude-whatsapp-field"
              />
              {number && (
                <img
                  src={cancel}
                  alt="clear"
                  style={{ width: "14px", height: "14px", cursor: "pointer" }}
                  onClick={() => setNumber("")}
                />
              )}
            </div>
          </div>
        </div>
        <Button
          disabled={!number || number.length < 10}
          onClick={() => onContinue(number)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default EnterWhatsApp;
