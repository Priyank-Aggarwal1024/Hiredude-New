import "../../styles/button.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`button ${variant} ${disabled && "secondary"} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
