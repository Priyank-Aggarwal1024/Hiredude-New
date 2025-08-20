import React, { useState } from "react";
import "../../styles/input.css";
import { upload } from "../../assets";

const InputField = ({
  label,
  required = false,
  type = "text",
  placeholder = "",
  name,
  value,
  onChange,
  options = [],
  ...props
}) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
    if (onChange) onChange(e);
  };

  return (
    <div className="input-container">
      {label && (
        <div className="input-label">
          <span>{label}</span>
          {required && <span className="required">*</span>}
        </div>
      )}

      {type === "file" ? (
        <label className="input-wrapper file-input-wrapper">
          <div className={`file-placeholder ${fileName && "file-name"}`}>
            {fileName || placeholder || "Upload Your Resume Here"}
          </div>
          <img src={upload} alt="Upload Icon" className="file-icon" />
          <input
            type="file"
            name={name}
            onChange={handleFileChange}
            required={required}
            {...props}
            className="input-field file-input"
          />
        </label>
      ) : type === "select" ? (
        <div className="input-wrapper">
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="input-field"
          >
            <option value="" disabled>
              {placeholder || "Select"}
            </option>
            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="input-wrapper">
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            {...props}
            className="input-field"
          />
        </div>
      )}
    </div>
  );
};

export default InputField;
