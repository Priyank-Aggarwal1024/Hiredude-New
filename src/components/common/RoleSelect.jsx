import React, { useState } from "react";
import "../../styles/RoleSelect.css";

const RoleSelect = ({
  label = "Type of role interested in",
  options = [],
  value = [],
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleOption = (option) => {
    let newValue;
    if (value.includes(option)) {
      newValue = value.filter((v) => v !== option);
    } else {
      newValue = [...value, option];
    }
    onChange(newValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      const newRole = inputValue.trim();
      if (!value.includes(newRole)) {
        onChange([...value, newRole]);
      }
      setInputValue("");
      setOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (!open) setOpen(true); // auto-open dropdown when typing
  };

  // filter options based on input
  const filteredOptions = options.filter(
    (opt) =>
      opt.toLowerCase().includes(inputValue.toLowerCase()) &&
      !value.includes(opt)
  );

  return (
    <div className="hiredude-role-wrapper">
      <label className="hiredude-role-label">{label}</label>

      <div className="hiredude-role-selectbox" onClick={() => setOpen(!open)}>
        <input
          type="text"
          className="hiredude-role-input"
          placeholder={value.length === 0 ? "Select from the list or type" : ""}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <span className="hiredude-role-caret"></span>
      </div>

      {open && filteredOptions.length > 0 && (
        <div className="hiredude-role-dropdown">
          {filteredOptions.map((opt) => (
            <div
              key={opt}
              className={`hiredude-role-option ${
                value.includes(opt) ? "selected" : ""
              }`}
              onClick={() => {
                toggleOption(opt);
                setInputValue("");
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {value.length > 0 && (
        <div className="hiredude-role-chips">
          {value.map((val) => (
            <div key={val} className="hiredude-role-chip">
              <span>{val}</span>
              <button
                className="hiredude-role-chip-remove"
                onClick={() => toggleOption(val)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleSelect;
