import { useState, useEffect } from "react";
import { cancel, phone, edit } from "../assets";
import Button from "./common/Button";
import "../styles/verifyNumber.css";

function VerifyNumber({
  onCancel,
  onContinue,
  phoneNumber = "+91-91500-64417",
  initialTimer = 53,
  onEdit,
}) {
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(initialTimer);

  const handleChange = (e) => setOtp(e.target.value);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  return (
    <div className="hiredude-verifyno">
      <div className="hiredude-verifyno-container">
        <div className="hiredude-verifyno-header">
          <img src={phone} alt="phone" className="hiredude-verifyno-icon" />
          <img
            src={cancel}
            alt="cancel"
            className="hiredude-verifyno-cancel"
            onClick={onCancel}
          />
        </div>

        <div className="hiredude-verifyno-texts">
          <div className="hiredude-verifyno-title">Confirm Your Phone</div>
          <div className="hiredude-verifyno-subtitle">
            We’ve sent a code to{" "}
            <span className="hiredude-verifyno-phone">{phoneNumber}</span>
            <img
              src={edit}
              alt="edit"
              className="hiredude-verifyno-edit"
              onClick={onEdit}
            />
          </div>
        </div>

        <div className="hiredude-verifyno-input-wrapper">
          <input
            type="text"
            value={otp}
            onChange={handleChange}
            placeholder="XXXXXX"
            maxLength={6}
            className="hiredude-verifyno-input"
          />
          <div className="hiredude-verifyno-resend">
            {resendTimer > 0 ? `Resend Code (${resendTimer}s)` : "Resend Code"}
          </div>
        </div>

        <Button
          onClick={() => onContinue(otp)}
          disabled={!otp || otp.length < 6}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default VerifyNumber;
