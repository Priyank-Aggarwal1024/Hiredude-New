import React, { useState } from "react";
import "../styles/step3.css";
import InputField from "./common/InputField";
import { success } from "../assets";
import RoleSelect from "./common/RoleSelect";
import Button from "./common/Button";

const Step3 = ({ verified, navigateProfile }) => {
  const [formData, setFormData] = useState({
    linkedin: "",
    city: "",
    status: "",
    experience: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="hiredude-step3">
      {!verified && (
        <div class="hiredude-step3-success">
          <div class="hiredude-step3-icon-wrapper">
            <img src={success} alt="success" class="hiredude-step3-icon" />
          </div>
          <div class="hiredude-step3-texts">
            <div class="hiredude-step3-title">
              You’re in. Your application is submitted.
            </div>
            <div class="hiredude-step3-subtitle">
              We’ll be sending your assignment straight to your WhatsApp soon.
            </div>
          </div>
        </div>
      )}
      <form className="hiredude-step-3-container">
        <div className="hiredude-step-3-header">
          <h2 className="hiredude-step-3-title">One Final Step!</h2>
          <p className="hiredude-step-3-subtitle">
            Let us personalize your experience
          </p>
        </div>

        <div className="hiredude-step-3-form">
          <InputField
            label="LinkedIn Profile"
            required
            type="text"
            name="linkedin"
            placeholder="https://linkedin.com/in/profile"
            value={formData.linkedin}
            onChange={handleChange}
          />

          <InputField
            label="City, State"
            required
            type="select"
            name="city"
            value={formData.city}
            onChange={handleChange}
            options={[
              "India",
              "New York, NY",
              "San Francisco, CA",
              "Austin, TX",
            ]}
          />

          <InputField
            label="Current Status"
            required
            type="select"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={["Student", "Working Professional", "Freelancer"]}
          />

          <InputField
            label="Years of Experience"
            required
            type="select"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            options={["0-1 years", "2-4 years", "5-7 years", "8+ years"]}
          />
          <RoleSelect
            options={[
              "UI/UX",
              "Full Stack",
              "Product Management",
              "Data Science",
            ]}
            value={formData.role}
            onChange={(newVal) => setFormData({ ...formData, role: newVal })}
          />
        </div>
        <Button
          children={"Let’s get started!"}
          type="submit"
          onClick={navigateProfile}
        />
      </form>
    </div>
  );
};

export default Step3;
